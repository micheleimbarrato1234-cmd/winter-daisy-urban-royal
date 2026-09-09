import { Callout, Code, Figure } from "./blocks";

export function Chapters58() {
  return (
    <>
      <section id="ch5" className="mt-20 scroll-mt-24">
        <p className="font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase">
          Chapter 5
        </p>
        <h1>Validation and debugging</h1>
        <p>
          Firmware that has only been compiled has not been validated. The
          method is deliberately low-level: PCAN-View injects frames, the
          SR5E1 raises an FDCAN interrupt, TRACE32 steps through{" "}
          <code>DYNO2DWProtocol</code>, and PCAN-View records the response.
        </p>

        <h2 id="ch5-chain">Debug chain</h2>
        <ol>
          <li>
            <b>Frame injection.</b> A PCAN-USB FD adapter transmits a frame
            with a chosen identifier, DLC and payload.
          </li>
          <li>
            <b>Interrupt.</b> Arrival of a filtered identifier raises{" "}
            <code>IRQ_CAN1_LINE0_HANDLER</code>. TRACE32 is programmed with a
            breakpoint on the first instruction of DYNO2DW.
          </li>
          <li>
            <b>Step-by-step execution.</b> From that breakpoint the engineer
            watches the construction of <code>msg[]</code>, the CRC, the call
            into FCP, and the Motor Control function that ultimately runs.
          </li>
          <li>
            <b>Response.</b> On resume the MCU publishes either identifier
            0x10 with payload 0xF0/0xFF, or identifier 0x11 with a four-byte
            register value.
          </li>
        </ol>
        <Figure
          src="/thesis-media/image4.png"
          alt="PCAN-View transmit list of test frames"
          caption={
            <>
              <strong>Figure 5.1.</strong> PCAN-View transmit list used for
              command injection. Each row is a hand-composed CAN frame.
            </>
          }
        />
        <p>
          Before any command was trusted, the TX path was checked in
          isolation. With the motor idle, PCAN-View logged the diagnostic
          window 0x40–0x60. The expected behaviour is ten frames every
          100&nbsp;ms.
        </p>
        <Figure
          src="/thesis-media/image6.png"
          alt="PCAN-View receive trace of diagnostics and ACK frames"
          caption={
            <>
              <strong>Figure 5.2.</strong> MCU-to-dyno traffic. Identifier
              0x10 carries ACK/NACK; 0x11 carries REG_VALUE; the remaining
              identifiers are the periodic diagnostic stack.
            </>
          }
        />

        <h2 id="ch5-disc">Case study: SET_REG versus the specification</h2>
        <p>
          The Motor Control protocol document describes SET_REG as a
          length-prefixed frame: byte 0 is the payload length, byte 1 is the
          register identifier. The SR5E1 library, as written and as executed,
          does something else. Byte 0 of the CAN payload <i>is</i> the
          register identifier. There is no length byte on the wire; the FCP
          length is inserted by DYNO2DW when it builds <code>msg[]</code>.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <Figure
            src="/thesis-media/image7.png"
            alt="SET_REG frame in PCAN-View"
            caption={
              <>
                <strong>Figure 5.3.</strong> SET_REG as transmitted from
                PCAN-View. Byte 0 of the payload is already the target
                register identifier.
              </>
            }
          />
          <Figure
            src="/thesis-media/image8.png"
            alt="Dishwasher protocol SET_REG layout"
            caption={
              <>
                <strong>Figure 5.4.</strong> SET_REG layout in the dishwasher
                specification, with a length byte in front of the register
                identifier.
              </>
            }
          />
        </div>
        <p>
          Two equally defensible repairs were available: change the firmware
          to match the document, or document the firmware and change the DBC.
          The second option was taken. The library was already deployed on
          boards that the dyno spoke to; DYNO2DW exists specifically to absorb
          this kind of difference; and the DBC is the contract the GUI and
          the dyno software compile.
        </p>
        <Callout title="Pass criteria">
          <p className="mb-0">
            A command was marked validated when TRACE32 showed the intended
            FCP frame, the associated Motor Control function executed, the
            bus showed 0x10/0xF0 for writes or 0x11 with the expected value
            for reads, and a malformed variant produced 0xFF without changing
            machine state. The GUI was not used as an oracle during this
            campaign.
          </p>
        </Callout>
      </section>

      <section id="ch6" className="mt-20 scroll-mt-24">
        <p className="font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase">
          Chapter 6
        </p>
        <h1>The CAN database</h1>
        <p>
          Without a DBC, CANalyzer displays identifiers and hex dumps. With a
          DBC it displays “heatsink temperature, 47.3 °C” and it can encode a
          speed ramp from two physical fields. The Python GUI never packs a
          CAN frame itself; it writes system variables, CAPL reads those
          variables, and CANalyzer encodes the frame from the DBC. A DBC
          which disagrees with the firmware is therefore a functional bug in
          the operator path.
        </p>

        <h2 id="ch6-tree">Message tree</h2>
        <Figure
          src="/thesis-media/image18.png"
          alt="DBC message tree in CANalyzer"
          caption={
            <>
              <strong>Figure 6.1.</strong> DBC message tree. Diagnostics occupy
              0x40–0x60; motor-control commands occupy 0x30–; MCU responses
              occupy 0x10 and 0x11.
            </>
          }
        />
        <p>
          <code>EXECUTE_COMMAND</code> (0x33) is a bit-mask spread over two
          bytes; each flag is a 1-bit signal so CAPL can write{" "}
          <code>msg.EXE_START_MOTOR = 1</code> without shifting.{" "}
          <code>SET_RAMP</code> (0x37) carries two physical signals: final
          speed in RPM and duration in milliseconds. The same pattern—final
          value plus duration—is reused for the current ramps, with the
          final-value signal scaled in milliamperes.
        </p>
        <Figure
          src="/thesis-media/image16.png"
          alt="DBC signal layout of a CAN message"
          caption={
            <>
              <strong>Figure 6.2.</strong> Signal-level view of a DBC message.
              Start bit, length, factor and offset must match the firmware’s
              little-endian packing.
            </>
          }
        />

        <h2 id="ch6-ack">Structural correction of ACK/NACK</h2>
        <p>
          The original DBC declared two messages with identifiers 0xF0 and
          0xFF. Those values are the <i>payload</i> of an acknowledgement,
          not CAN identifiers: they do not fit in 11 bits, and they never
          appeared on the wire as identifiers. CANalyzer therefore never
          decoded a real ACK.
        </p>
        <Figure
          src="/thesis-media/image11.png"
          alt="Original DBC treating 0xF0 and 0xFF as identifiers"
          caption={
            <>
              <strong>Figure 6.3.</strong> Original DBC fragment in which 0xFF
              (NACK) and 0xF0 (ACK) are declared as distinct CAN identifiers.
              Both values are payload codes of the single message 0x10.
            </>
          }
        />
        <p>
          The repair is a single message ACK_NACK at identifier 0x10, DLC 1,
          with one unsigned 8-bit signal <code>AckCode</code> and a value
          table mapping 0xF0 ↦ ACK and 0xFF ↦ NACK. Identifier 0x11 remains
          REG_VALUE. After this change, a CAPL <code>on message ACK_NACK</code>{" "}
          handler fires on every write, and Python never has to look at
          identifiers.
        </p>
      </section>

      <section id="ch7" className="mt-20 scroll-mt-24">
        <p className="font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase">
          Chapter 7
        </p>
        <h1>CANalyzer integration and operator GUI</h1>
        <p>
          Python is a poor real-time CAN stack. Vector CANalyzer is a poor
          widget toolkit. The architecture takes that observation literally:
          CANalyzer owns timing, DBC encoding and CAPL; Python owns widgets
          and talks only to system variables via <code>win32com.client</code>.
        </p>

        <h2 id="ch7-arch">Partition of responsibilities</h2>
        <Figure
          src="/thesis-media/image5.png"
          alt="Vector CANalyzer and system-variable namespace"
          caption={
            <>
              <strong>Figure 7.1.</strong> Vector CANalyzer during a session,
              with the system-variable namespace that the Python GUI reads
              and writes through the COM API.
            </>
          }
        />
        <p>
          A speed ramp has two parameters. If the GUI wrote{" "}
          <code>SET_RAMP = 1</code> the moment the operator touched either
          field, the frame on the bus would carry a stale duration or a stale
          final speed. The CAPL layer therefore keeps a physical value, a
          ready flag per value, and a trigger. The trigger fires the handler;
          the handler transmits only when every ready flag is one.
        </p>
        <Code caption="CAPL handler for the speed ramp, with ready-flag guard">{`on sysvar SET_SPEED_RAMP::SET_RAMP
{
  message SET_RAMP msgSpeedRamp;
  if (@this == 1 &&
      is_finalSpeed_ready == 1 &&
      is_durSpeed_ready   == 1)
  {
    msgSpeedRamp.FinalSpeed_execrmp = g_finalSpeed_value;
    msgSpeedRamp.Duration_execrmp   = g_durSpeed_value;
    output(msgSpeedRamp);
  }
}`}</Code>
        <Code caption="CAPL helper that encodes a packed PI SET_REG">{`void send_pi_message(word reg_id, int val, int denom)
{
  message SET_REG msg;
  msg.REGISTER_ID          = reg_id;
  msg.REGISTER_VALUE       = val;
  msg.REGISTER_VALUE_DENOM = denom;
  output(msg);
}`}</Code>

        <h2 id="ch7-panels">Operator panels</h2>
        <p>
          The GUI is organised as a connection banner plus four tabs. The
          banner is always visible: a CAN-bus indicator, machine state,
          heatsink temperature, DC-link voltage, and the start / stop /
          reset-fault controls. Putting those controls outside the tabs is a
          safety choice—an operator looking at a PI panel can still stop the
          motor without changing tab.
        </p>
        <Figure
          src="/thesis-media/image9.png"
          alt="Motor control panel of the Python GUI"
          caption={
            <>
              <strong>Figure 7.2.</strong> Motor control panel. Connection
              status, start/stop, thermal and DC-link readouts, machine state
              and fault reset live in the top banner.
            </>
          }
        />
        <Figure
          src="/thesis-media/image10.png"
          alt="Speed control tab with RPM gauge"
          caption={
            <>
              <strong>Figure 7.3.</strong> Speed-control tab. The operator
              sets a final speed and a duration; the gauge compares reference
              and actual RPM in real time.
            </>
          }
        />
        <Figure
          src="/thesis-media/image21.png"
          alt="PI controller tab with Kp Ki numerator and divisor"
          caption={
            <>
              <strong>Figure 7.4.</strong> PI-controller tab. Each of the
              three loops exposes <i>K<sub>p</sub></i> and{" "}
              <i>K<sub>i</sub></i> as a numerator / 2<sup>n</sup> pair,
              matching the packed 32-bit register layout.
            </>
          }
        />
        <Figure
          src="/thesis-media/image20.png"
          alt="Current control tab with Iq and Id plots"
          caption={
            <>
              <strong>Figure 7.5.</strong> Current-control tab. Independent{" "}
              <i>I<sub>q</sub></i> and <i>I<sub>d</sub></i> set-points and
              ramps, with live plots of reference and measured current.
            </>
          }
        />
        <Figure
          src="/thesis-media/image19.png"
          alt="Live charts tab"
          caption={
            <>
              <strong>Figure 7.6.</strong> Live-charts tab: speed overview
              together with the <i>I<sub>q</sub></i> (torque) and{" "}
              <i>I<sub>d</sub></i> (flux) current plots.
            </>
          }
        />
        <p>
          The GUI does not implement a safety PLC, does not log to disk
          (CANalyzer already records traces), does not re-implement DBC
          packing, and does not talk to the MCU except through CANalyzer.
          Those restrictions keep the three-artefact rule intact: firmware,
          DBC, operator surface, in that order of authority.
        </p>
      </section>

      <section id="ch8" className="mt-20 scroll-mt-24">
        <p className="font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase">
          Chapter 8
        </p>
        <h1>Conclusions and outlook</h1>
        <p>
          The project set out to make the CAN interface between a Stellar-E
          inverter and a dynamometer bench automatable. That sentence unpacks
          into three artefacts that now agree with each other.
        </p>
        <ul>
          <li>
            <b>The SR5E1 CAN library is a contract.</b> EXECUTE_COMMAND
            commits to a single Motor Control command per frame. Independent
            current references exist as first-class codes. The torque ramp is
            reachable from CAN, and a flux ramp that the SDK did not
            previously offer is implemented through the UI, MCI and STC
            layers. PI gains travel as a packed 32-bit word. ACK/NACK and
            GET_REG no longer share an identifier.
          </li>
          <li>
            <b>The DBC is a projection of that contract.</b> Identifiers
            follow the +0x30 / +0x40 offset rule, with an explicit exception
            for the independent current commands. Acknowledgement codes 0xF0
            and 0xFF are payload values of message 0x10. The SET_REG
            discrepancy was resolved by documenting the firmware as
            authoritative.
          </li>
          <li>
            <b>An operator can drive the inverter without composing
            hexadecimal.</b> Vector CANalyzer owns timing and encoding. A
            Python GUI exposes start/stop, speed ramps, three PI loops,
            independent current axes and live plots. CAPL ready-flags keep
            incomplete multi-parameter commands off the bus.
          </li>
        </ul>
        <p>
          Limitations are accepted rather than accidental. The physical layer
          was validated as CAN 2.0; range checking of set-points is left to
          the SDK; the GUI requires a licensed CANalyzer installation; and
          functional-safety aspects of Stellar-E were out of scope.
        </p>
        <p>
          Three extensions follow naturally: scripted characterisation on the
          now-stable DBC; CAN FD and higher-rate telemetry once the TX path
          is measured not to drop stacks under FCP_TRANSFER_IDLE
          back-pressure; and bidirectional PI scheduling that writes{" "}
          <i>K<sub>p</sub></i> and <i>K<sub>i</sub></i> of one loop together,
          which would make automated tuning less sensitive to a control
          period that lands between two CAN frames.
        </p>
        <p>
          The technical content of this thesis is a handful of C cases, a DBC
          file and a Python window. The engineering content is the refusal to
          let those three disagree. A bench that is automated on top of a
          silently wrong identifier map is worse than a bench that is
          operated by hand: it produces plots that look like measurements and
          are not. The debug chain of Chapter 5—inject, halt, step,
          compare—is the method that keeps the plots honest.
        </p>
      </section>

      <section id="app" className="mt-20 scroll-mt-24">
        <p className="font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase">
          Appendix
        </p>
        <h1>Extended listings</h1>
        <p>
          The listings in the main chapters are shortened to the statements
          that carry the argument. The complete functions, including the
          Send_Status sketch, the UI/MCI/STC flux-ramp chain and the deployed
          CAPL events, are in <code>chapters/A_listings.tex</code> of the
          downloadable project.
        </p>
        <Code caption="Inbound CAPL: diagnostics and REG_VALUE">{`on message DIAG_TORQUE_REF
{
  @DIAG_MESSAGES::TORQUE_REF = this.DWord(0);
}

on message REG_VALUE
{
  @GET_REG::K_num = this.GET_K_NUMERATOR;
  @GET_REG::K_den = this.GET_K_DENOMINATOR;
}`}</Code>
      </section>
    </>
  );
}
