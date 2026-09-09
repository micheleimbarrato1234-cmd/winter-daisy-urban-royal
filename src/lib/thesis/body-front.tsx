import { Callout } from "./blocks";

export function FrontMatter() {
  return (
    <>
      <section id="abstract" className="scroll-mt-24">
        <p className="font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase">
          Abstract
        </p>
        <h1 className="mt-3">Abstract</h1>
        <p>
          The characterisation of traction inverters and electric machines on a
          dynamometer (dyno) test bench is a bottleneck in the development of
          modern electric-drive systems. Every start/stop command, speed or
          torque ramp, current reference and proportional–integral (PI) gain
          must reach the unit under test with deterministic timing, while a
          dense stream of diagnostics must travel in the opposite direction so
          that the operator—or an automated test script—can close the loop.
          When the unit under test is an STMicroelectronics Stellar-E (SR5E1)
          microcontroller running the Motor Control software development kit,
          that exchange is carried by a Controller Area Network (CAN) bus and
          by a translation layer historically called DYNO2DW
          (Dyno-to-Dishwasher), which maps bench-side CAN frames onto the
          internal ST Motor Control protocol.
        </p>
        <p>
          This thesis documents the complete rework of that interface. The
          existing SR5E1 CAN library was validated on the bench, and several
          defects—ambiguous command decoding, colliding response identifiers,
          incorrect packing of PI gains, and a mismatch between the documented
          Motor Control frame layout and the firmware implementation—were
          identified and corrected. The library was then extended with features
          required by automated characterisation: independent{" "}
          <i>I<sub>d</sub></i>/<i>I<sub>q</sub></i> set-points, a flux (
          <i>I<sub>d</sub></i>) ramp that did not exist in the original stack,
          torque (<i>I<sub>q</sub></i>) ramps, and a compact 32-bit encoding
          that writes both a PI numerator and its power-of-two divisor in a
          single CAN message. A CAN database (DBC) was rewritten so that every
          identifier, layout and signal scaling matches the firmware, including
          a structural correction that turned the acknowledgement codes{" "}
          <code>0xF0</code> and <code>0xFF</code> from illegal message
          identifiers into payload values of a single response frame. Finally,
          a Python graphical user interface was connected to Vector CANalyzer
          through the Windows COM API, so that an operator can drive the
          inverter and observe telemetry without composing hexadecimal frames
          by hand.
        </p>
        <p>
          The resulting chain—firmware, DBC, CAPL and GUI—was verified with
          PCAN-View frame injection and Lauterbach TRACE32 source-level
          debugging. Periodic diagnostics (ten registers every 100&nbsp;ms) are
          received reliably, commands are acknowledged on identifier{" "}
          <code>0x10</code> and register reads return on <code>0x11</code>, and
          the mutually exclusive start/stop/reset path no longer emits
          contradictory frames on the bus.
        </p>
      </section>

      <section id="ack" className="mt-16 scroll-mt-24">
        <h1>Acknowledgements</h1>
        <p>
          I wish to thank the engineers of the SRA Lab at STMicroelectronics
          for the opportunity to work on a production-relevant motor-control
          stack, for access to the dynamometer bench, and for the TRACE32 and
          Vector toolchains that made the validation possible. I am equally
          grateful to the academic supervisor who followed this work, and to
          colleagues who reviewed early versions of the DBC and of the
          operator interface.
        </p>
      </section>

      <section id="abbr" className="mt-16 scroll-mt-24">
        <h1>List of abbreviations</h1>
        <table>
          <thead>
            <tr>
              <th>Abbr.</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ACK/NACK", "Positive / negative acknowledgement"],
              ["CAN", "Controller Area Network (ISO 11898)"],
              ["CAN FD", "CAN with Flexible Data-rate"],
              ["CAPL", "Communication Access Programming Language (Vector)"],
              ["DBC", "CAN database (Vector .dbc format)"],
              ["DYNO2DW", "Dyno-to-Dishwasher translation layer"],
              ["FDCAN", "Flexible Data-rate CAN peripheral (ST)"],
              ["FOC", "Field-Oriented Control"],
              ["MCSDK", "ST Motor Control Software Development Kit"],
              ["PI", "Proportional–Integral controller"],
              ["PMSM", "Permanent-Magnet Synchronous Machine"],
              ["UUT", "Unit Under Test"],
            ].map(([k, v]) => (
              <tr key={k}>
                <td>
                  <code>{k}</code>
                </td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <Callout title="How to compile the LaTeX">
        <p className="mb-0">
          Download the project zip, open <code>thesis/main.tex</code> in
          Overleaf or TeX Live, then run <code>pdflatex</code>,{" "}
          <code>bibtex</code>, <code>pdflatex</code>, <code>pdflatex</code>.
          University and supervisor fields on the title page are left as
          placeholders for binding.
        </p>
      </Callout>
    </>
  );
}
