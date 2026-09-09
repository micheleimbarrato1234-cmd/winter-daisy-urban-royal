import { Callout, Code, Figure } from "./blocks";

export function Chapters14() {
  return (
    <>
      <section id="ch1" className="mt-20 scroll-mt-24">
        <p className="font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase">
          Chapter 1
        </p>
        <h1>Introduction</h1>

        <h2 id="ch1-mot">Motivation</h2>
        <p>
          Electrification has moved a large fraction of product validation
          from the vehicle or the appliance onto the dynamometer bench. A
          dyno can impose a controlled mechanical load and exercise the
          current, flux and speed loops of a field-oriented controller. The
          value of that facility is only as high as the digital interface that
          binds the bench software to the unit under test.
        </p>
        <p>
          In the laboratory that hosted this work, the UUT is an
          STMicroelectronics Stellar-E microcontroller of the SR5E1 family,
          running the Motor Control SDK. The physical link is CAN. Historically,
          bench commands were translated into the internal ST Motor Control
          protocol by DYNO2DW—“Dyno to Dishwasher”, a name that betrays the
          appliance origin of the protocol profile. The layer was functional
          enough for manual bring-up, but it was not a contract a test
          automation engineer could trust: identifiers collided, a single{" "}
          <code>EXECUTE_COMMAND</code> frame could request both start and stop,
          PI gains could not be written atomically, <i>I<sub>d</sub></i> and{" "}
          <i>I<sub>q</sub></i> could not be ramped independently, and the DBC
          that Vector CANalyzer used to decode the bus had drifted away from
          the C implementation.
        </p>

        <h2 id="ch1-obj">Objectives</h2>
        <p>The work was organised around three objectives.</p>
        <ol>
          <li>
            <b>Validate and correct the SR5E1 CAN library.</b> Exercise every
            incoming command and every outgoing diagnostic on hardware. Prove,
            with TRACE32 breakpoints and PCAN-View traces, that each CAN
            identifier maps onto the intended Motor Control call.
          </li>
          <li>
            <b>Rebuild the DBC</b> so that it is a faithful dictionary of the
            bus: add the new messages, enforce the +0x30 / +0x40 offset
            convention, and correct the structural error that treated
            acknowledgement codes as CAN identifiers.
          </li>
          <li>
            <b>Provide an operator GUI on top of Vector CANalyzer.</b> Use
            CAPL and the COM API so that a Python interface can start and stop
            the motor, program ramps, tune PI gains and plot telemetry
            without exposing hexadecimal layouts.
          </li>
        </ol>

        <h2 id="ch1-contrib">Contributions</h2>
        <ul>
          <li>
            A documented architecture of DYNO2DW, including the offset rule,
            the ten-message diagnostic stack and the TX/RX call graph.
          </li>
          <li>
            A mutually exclusive rewrite of <code>EXECUTE_COMMAND</code> that
            cannot emit both START and STOP for the same frame.
          </li>
          <li>
            Independent <i>I<sub>d</sub></i>/<i>I<sub>q</sub></i> set-points
            and a newly implemented flux ramp through the UI, MCI and STC
            layers.
          </li>
          <li>
            A 32-bit packing convention for PI registers, so a single{" "}
            <code>SET_REG</code> writes both <i>K<sub>p</sub></i> and its
            power-of-two divisor.
          </li>
          <li>
            Separation of ACK/NACK (ID <code>0x10</code>, payload{" "}
            <code>0xF0</code>/<code>0xFF</code>) from the GET_REG response
            (ID <code>0x11</code>).
          </li>
          <li>
            A case study of a specification-versus-implementation discrepancy:
            byte 0 of a SET_REG frame is the register identifier, not a length
            field.
          </li>
          <li>
            A DBC aligned on the firmware, and a Python GUI driven through
            <code> win32com.client</code>, with CAPL-side ready-flags that
            prevent incomplete multi-parameter frames from reaching the bus.
          </li>
        </ul>
        <p>
          The methodology was closed-loop rather than spec-first. Each defect
          was reproduced on the bench by injecting a CAN frame, trapped in
          TRACE32 on the FDCAN interrupt, and only then corrected in C, DBC
          or CAPL. The firmware is treated as the source of truth: a DBC that
          disagrees with the MCU will decode the bus wrongly, and a GUI that
          disagrees with the DBC will send frames the MCU silently nacks.
        </p>
      </section>

      <section id="ch2" className="mt-20 scroll-mt-24">
        <p className="font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase">
          Chapter 2
        </p>
        <h1>Technical background</h1>

        <h2 id="ch2-can">Controller Area Network</h2>
        <p>
          CAN is a multi-master, message-oriented serial bus standardised as
          ISO 11898. Nodes do not address each other; they publish frames that
          carry an identifier, a payload and a CRC. Arbitration is bitwise and
          non-destructive: priority is encoded in the identifier itself. Two
          facts structure everything that follows.
        </p>
        <ol>
          <li>
            <b>The identifier is the message.</b> There is no session. A node
            that wants to start the motor publishes <code>0x33</code>; a node
            that wants to report heatsink temperature publishes{" "}
            <code>0x5A</code>. A DBC file, which binds names and layouts to
            identifiers, is not documentation on the side—it is the only
            human-readable contract the bus has.
          </li>
          <li>
            <b>Payload layout is convention, not syntax.</b> Little-endian
            packing of a 32-bit speed, a 16-bit current or a concatenated PI
            word is entirely a matter of agreement. Break it and the bus still
            “works”: frames are acknowledged at the data-link layer while the
            application reads garbage.
          </li>
        </ol>
        <p>
          The SR5E1 implements an FDCAN peripheral. In this project the
          physical layer was operated as CAN 2.0 with 11-bit identifiers:
          payloads fit in eight bytes, and the dyno software was configured
          for that mode. A later migration to CAN FD is a configuration
          change rather than a protocol redesign.
        </p>

        <h2 id="ch2-foc">Field-oriented control</h2>
        <p>
          Permanent-magnet synchronous machines are controlled, in the ST
          Motor Control SDK as in most industrial drives, by FOC. Stator
          currents are transformed into a rotor-aligned <i>dq</i> frame in
          which <i>I<sub>d</sub></i> is flux-producing and{" "}
          <i>I<sub>q</sub></i> is torque-producing. Three consequences for
          the CAN interface follow.
        </p>
        <ul>
          <li>
            Independent <i>I<sub>d</sub></i> and <i>I<sub>q</sub></i>{" "}
            references are not a luxury. Characterisation holds one axis
            while sweeping the other.
          </li>
          <li>
            Ramps are a safety and a physics feature. A step of{" "}
            <i>I<sub>q</sub></i> is a step of torque; on a dyno with finite
            mechanical bandwidth it produces a torsional shock.
          </li>
          <li>
            PI gains are stored as a numerator and a power-of-two divisor, so
            the effective gain is <i>K</i> / 2<sup>n</sup>. Exposing only the
            numerator would make closed-loop behaviour impossible to
            reconstruct.
          </li>
        </ul>

        <h2 id="ch2-mcp">Motor Control protocol and FCP</h2>
        <p>
          The internal protocol is a short, length-prefixed, checksummed
          frame:
        </p>
        <p className="text-center font-mono text-sm">
          [Code : 1 B][Length : 1 B][Payload : Length B][CRC : 1 B]
        </p>
        <p>
          DYNO2DW is a translator: it reads a CAN identifier and a raw 8-byte
          buffer, and it <i>builds</i> that FCP frame in a local array{" "}
          <code>msg[]</code>. Any confusion between “byte 0 of the CAN
          payload” and “byte 0 of the FCP frame” produces a protocol
          discrepancy—exactly the SET_REG case study of Chapter 5.
          Acknowledgements and register-read responses are both produced by
          the same TX handler; if they share a CAN identifier, a consumer
          cannot tell a successful write from a four-byte value.
        </p>
        <p>
          The “dishwasher” qualifier is historical. ST’s Motor Control SDK
          ships application profiles, among them an appliance profile
          originally demonstrated on a dishwasher drum motor. The register
          map, command codes and Frame Communication Protocol of that profile
          were reused as the internal language of the dyno interface.
        </p>
      </section>

      <section id="ch3" className="mt-20 scroll-mt-24">
        <p className="font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase">
          Chapter 3
        </p>
        <h1>The existing SR5E1 CAN library</h1>
        <p>
          The library is an adapter. On one side is the dynamometer software,
          which speaks a flat set of 11-bit CAN identifiers. On the other side
          is the ST Motor Control SDK. Between them sits{" "}
          <code>DYNO2DWProtocol</code>, invoked from the FDCAN receive
          interrupt.
        </p>

        <h2 id="ch3-off">The offset rule</h2>
        <p>
          Two constants structure the identifier map. An incoming command
          whose Motor Control code is <i>c</i> is published as identifier{" "}
          <i>c</i> + <code>0x30</code>. An outgoing diagnostic whose register
          identifier is <i>r</i> is published as <i>r</i> + <code>0x40</code>.
          The constants park commands in 0x30–0x3F and diagnostics in
          0x40–0x60, leaving 0x10–0x11 free for MCU responses.
        </p>
        <Callout title="Collision exception">
          <p className="mb-0">
            The offset is the default, not a law. Protocol codes{" "}
            <code>0x0F</code> and <code>0x11</code> would have mapped to{" "}
            <code>0x3F</code> and <code>0x41</code>, colliding with the{" "}
            <i>I<sub>q</sub></i> ramp and the diagnostic window. Unused
            identifiers <code>0x3B</code> and <code>0x3C</code> were therefore
            assigned in both the DBC and the C switch.
          </p>
        </Callout>

        <h2 id="ch3-diag">Periodic diagnostics — Send_Status</h2>
        <p>
          The dyno must observe the inverter without polling. The library
          therefore emits a stack of ten diagnostic frames every 100&nbsp;ms.
          Each iteration reads one register through <code>UI_GetReg</code>,
          packs the 32-bit value as four little-endian bytes, assigns the
          identifier <i>r</i> + 0x40, and submits the frame. Submission is
          gated on <code>FCP_TRANSFER_IDLE</code>: if the TX path is still
          busy, the entire stack is skipped for that period.
        </p>
        <Code caption="Diagnostic register list">{`#define CAN_NUM_MSG  10

uint8_t msg_tx_diag_can[CAN_NUM_MSG] = {
    MC_PROTOCOL_REG_UNDEFINED,    /* sequence counter, 100 ms */
    MC_PROTOCOL_REG_SPEED_REF,
    MC_PROTOCOL_REG_TORQUE_REF,
    MC_PROTOCOL_REG_FLUX_REF,
    MC_PROTOCOL_REG_BUS_VOLTAGE,
    MC_PROTOCOL_REG_HEATS_TEMP,
    MC_PROTOCOL_REG_SPEED_MEAS,
    MC_PROTOCOL_REG_TORQUE_MEAS,
    MC_PROTOCOL_REG_FLUX_MEAS,
    MC_PROTOCOL_REG_STATUS
};`}</Code>

        <h2 id="ch3-map">Command and diagnostic map</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Command</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0x31", "SET_REG", "Write a Motor Control register"],
              ["0x32", "GET_REG", "Read a Motor Control register"],
              ["0x33", "EXECUTE_COMMAND", "Start, stop, reset, align"],
              ["0x37", "SET_RAMP", "Speed ramp (final value, duration)"],
              ["0x3A", "SET_CURRENT_ID_IQ", "Simultaneous Id and Iq"],
              ["0x3B", "SET_CURRENT_ID", "Independent Id reference"],
              ["0x3C", "SET_CURRENT_IQ", "Independent Iq reference"],
              ["0x3E", "SET_ID_RAMP", "Flux (Id) ramp"],
              ["0x3F", "SET_IQ_RAMP", "Torque (Iq) ramp"],
            ].map((r) => (
              <tr key={r[0]}>
                <td>
                  <code>{r[0]}</code>
                </td>
                <td>
                  <code>{r[1]}</code>
                </td>
                <td>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Diagnostic</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0x42", "DIAG_STATE_MC", "Machine status"],
              ["0x44 / 0x5E", "SPEED_REF / MEAS", "Speed"],
              ["0x48 / 0x5F", "TORQUE_REF / MEAS", "Iq"],
              ["0x4C / 0x60", "FLUX_REF / MEAS", "Id"],
              ["0x59", "DIAG_BUS_VOLTAGE", "DC-link voltage"],
              ["0x5A", "DIAG_TEMPERATURE", "Heatsink temperature"],
            ].map((r) => (
              <tr key={r[0]}>
                <td>
                  <code>{r[0]}</code>
                </td>
                <td>
                  <code>{r[1]}</code>
                </td>
                <td>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Reception is entirely interrupt-driven: hardware raises{" "}
          <code>IRQ_CAN1_LINE0_HANDLER</code>, the ISR copies the payload into{" "}
          <code>RxArr[]</code>, DYNO2DW builds <code>msg[]</code> with a CRC
          from <code>SelfCRCCalc</code>, and each byte is fed to{" "}
          <code>CFCP_RX_IRQ_Handler</code>. Timeouts live in the FCP layer, so
          an interrupted multi-byte feed cannot be parsed as the tail of an
          earlier command.
        </p>
      </section>

      <section id="ch4" className="mt-20 scroll-mt-24">
        <p className="font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase">
          Chapter 4
        </p>
        <h1>Firmware developments</h1>

        <h2 id="ch4-exec">Mutually exclusive EXECUTE_COMMAND</h2>
        <p>
          The original decoder was a sequence of independent <code>if</code>{" "}
          blocks. Because start was coded as{" "}
          <code>if (RxArr[0] & EXE_START_MOTOR)</code> and stop as{" "}
          <code>else if (!(RxArr[0] & EXE_START_MOTOR))</code>,{" "}
          <i>every</i> frame produced either a start or a stop. Reset lived
          in its own <code>if</code> afterwards, so a single CAN frame could
          emit two FCP frames back to back.
        </p>
        <p>
          The decoder was rewritten around an explicit{" "}
          <code>validCommand</code> flag and a chain of{" "}
          <code>if / else if</code> that commits to at most one Motor Control
          command per CAN frame. The start bit still means start; its absence
          no longer means stop.
        </p>
        <Code caption="Decoded EXECUTE_COMMAND path (simplified)">{`case EXECUTE_COMMAND:
    bool validCommand = true;
    msg[0] = MC_PROTOCOL_CODE_EXECUTE_CMD;
    msg[1] = 0x01;

    if (RxArr[0] & EXE_START_MOTOR)
        msg[2] = MC_PROTOCOL_CMD_START_MOTOR;
    else if (RxArr[0] & EXE_STOP_MOTOR)
        msg[2] = MC_PROTOCOL_CMD_STOP_MOTOR;
    else if (RxArr[0] & EXE_RESET)
        msg[2] = MC_PROTOCOL_CMD_RESET;
    else if (RxArr[0] & EXE_FAULT_ACK)
        msg[2] = MC_PROTOCOL_CMD_FAULT_ACK;
    else if (RxArr[0] & EXE_ENCODER_ALIGN)
        msg[2] = MC_PROTOCOL_CMD_ENCODER_ALIGN;
    else
        validCommand = false;

    if (validCommand) {
        msg[3] = SelfCRCCalc(msg);
        for (count = 0; count < (msg[1] + 3); count++)
            (void) CFCP_RX_IRQ_Handler(&pFDCAN, msg[count]);
    }
    break;`}</Code>
        <table>
          <thead>
            <tr>
              <th>Byte</th>
              <th>Bit</th>
              <th>Flag</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0", "1", "EXE_START_MOTOR"],
              ["0", "2", "STOP_RAMP"],
              ["0", "3", "RESET"],
              ["0", "5", "EXE_PING"],
              ["0", "6", "FAULT_ACK"],
              ["0", "7", "ENCODER_ALIGN"],
              ["1", "0", "EXE_IQDREF_CLEAR"],
              ["1", "1", "GET_BOARD_INFO"],
            ].map((r) => (
              <tr key={r[2]}>
                <td>{r[0]}</td>
                <td>{r[1]}</td>
                <td>
                  <code>{r[2]}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 id="ch4-iqd">Independent I<sub>d</sub> / I<sub>q</sub> references</h2>
        <p>
          <code>SET_CURRENT_ID_IQ</code> (0x3A) already writes both axes in
          one frame. Characterisation, however, almost always holds one axis
          and moves the other. Two Motor Control codes that the original
          library did not use were claimed, with 16-bit signed little-endian
          set-points and FCP length 0x02.
        </p>
        <Code caption="New protocol codes and UI dispatch">{`#define MC_PROTOCOL_CODE_SET_CURRENT_ID_REF  0x0F
#define MC_PROTOCOL_CODE_SET_CURRENT_IQ_REF  0x11

case MC_PROTOCOL_CODE_SET_CURRENT_ID_REF: {
    int16_t hIdRef = (int16_t)buffer[0] + ((int16_t)buffer[1] << 8);
    UI_SetIdRef(&pHandle->_Super, hIdRef);
    bNoError = true;
} break;`}</Code>

        <h2 id="ch4-ramp">Torque and flux ramps</h2>
        <p>
          The torque ramp already existed as{" "}
          <code>UI_ExecTorqueRamp</code>. The library lacked only the DYNO2DW
          case: six bytes, a 32-bit signed final <i>I<sub>q</sub></i> and a
          16-bit unsigned duration in milliseconds. A duration of zero means
          “step”.
        </p>
        <p>
          A flux ramp did not exist at all. The implementation adds{" "}
          <code>MC_PROTOCOL_CODE_SET_FLUX_RAMP</code> and three weak
          functions that mirror the torque-ramp call chain:{" "}
          <code>UI_ExecFluxRamp</code> → <code>MCI_ExecFluxRamp</code> →{" "}
          <code>STC_ExecCurrentRamps</code>. The speed/torque controller
          stores flux in Q16. Given <i>I<sub>d</sub></i>(0), a final value{" "}
          <i>I<sub>d</sub></i>
          <sup>⋆</sup> and a duration <i>T</i> in milliseconds,
        </p>
        <p className="text-center font-display">
          <i>N</i> = ⌊<i>T</i> · <i>f</i>
          <sub>STC</sub> / 1000⌋ + 1, &nbsp;&nbsp; Δ = (
          <i>I<sub>d</sub></i>
          <sup>⋆</sup> − <i>I<sub>d</sub></i>(0)) · 2<sup>16</sup> / <i>N</i>
        </p>
        <p>
          If <i>T</i> = 0, the Q16 reference is loaded immediately. The
          controller is switched to torque mode so the outer speed loop
          cannot fight the current ramps. The DYNO2DW case preserves the{" "}
          <i>I<sub>q</sub></i> component of the current <code>qd_t</code>{" "}
          pair, so commanding an <i>I<sub>d</sub></i> ramp cannot accidentally
          zero <i>I<sub>q</sub></i>.
        </p>
        <Code caption="STC flux-ramp update (excerpt)">{`if (hDurationms == 0u) {
    pHandle->FluxRef             = (int32_t)hFinalFlux * 65536;
    pHandle->RampRemainingStepId = 0u;
    pHandle->IncDecAmountId      = 0;
} else {
    pHandle->TargetFinalId = hFinalFlux;
    uint32_t wAux = (uint32_t)hDurationms
                  * (uint32_t)pHandle->STCFrequencyHz / 1000u;
    pHandle->RampRemainingStepId = wAux + 1u;
    int32_t wAux1 = ((int32_t)hFinalFlux
                   - (int32_t)hCurrentReferenceId) * 65536;
    pHandle->IncDecAmountId = wAux1 / (int32_t)pHandle->RampRemainingStepId;
}`}</Code>

        <h2 id="ch4-pi">Packed PI register access</h2>
        <p>
          The MCSDK stores an integer numerator and a power-of-two divisor.
          A single 32-bit <code>wValue</code> therefore carries both halves:
          bits 15–0 are the gain, bits 31–16 are the divisor. Reading is the
          inverse, so a GET_REG of <code>MC_PROTOCOL_REG_SPEED_KP</code>{" "}
          round-trips. The same layout is used for <i>K<sub>i</sub></i> and
          for the three loops (speed, flux, torque).
        </p>
        <Code caption="Packing and unpacking of SPEED_KP">{`/* UI_SetReg */
uint16_t kp_gain     = (uint16_t)(wValue & 0xFFFF);
uint16_t kp_div_pow2 = (uint16_t)(((uint32_t)wValue >> 16) & 0xFFFF);
PID_SetKP(pMCT->pPIDSpeed, (int16_t)kp_gain);
PID_SetKPDivisorPOW2(pMCT->pPIDSpeed, kp_div_pow2);

/* UI_GetReg */
bRetVal = ((int32_t)(PID_GetKPDivisor(pMCT->pPIDSpeed) & 0xFFFFu) << 16)
        |  ((uint16_t)(PID_GetKP(pMCT->pPIDSpeed) & 0xFFFFu));`}</Code>

        <h2 id="ch4-ack">Separating ACK/NACK from GET_REG</h2>
        <p>
          Every well-formed command produces a response. A write produces a
          one-byte acknowledgement, 0xF0 for success and 0xFF for failure. A
          read produces a four-byte register value. In the original library
          both responses were emitted under the same CAN identifier. The FCP
          TX handler already knew the size of the frame it was serialising:
          acknowledgements are not four bytes, and register values are.
        </p>
        <Code caption="Identifier selection in CFCP_TX_IRQ_Handler">{`TxHeader.Identifier = CAN_TX_MSG_ID_START;   /* 0x10 */
if (pBaseHandle->TxFrame.Size == 4) {
    TxHeader.Identifier = 17U;               /* 0x11 */
}`}</Code>
        <p>
          On the DBC side the same split is two messages, ACK_NACK and
          REG_VALUE. A further DBC defect—treating 0xF0 and 0xFF themselves
          as identifiers—is repaired in Chapter 6.
        </p>
      </section>
    </>
  );
}
