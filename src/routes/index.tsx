import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, FileCode, Download } from "lucide-react";
import { LATEX_ZIP, THESIS_AUTHOR, THESIS_AFFIL, THESIS_TITLE } from "@/lib/thesis/toc";

export const Route = createFileRoute("/")({ component: Cover });

function Cover() {
  return (
    <main className="min-h-dvh bg-bg">
      <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 py-6 sm:px-8 sm:py-10">
        <header className="flex items-center justify-between gap-3">
          <p className="font-sans text-[0.72rem] font-medium tracking-[0.18em] text-navy uppercase">
            Master of Science Thesis
          </p>
          <a
            href={LATEX_ZIP}
            download
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-navy px-4 font-sans text-sm font-medium text-accent-fg transition-transform duration-150 ease-out hover:bg-navy-deep active:scale-[0.96]"
          >
            <Download className="size-4" strokeWidth={1.75} />
            Download LaTeX
          </a>
        </header>

        <div className="mt-8 grid flex-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <article className="relative overflow-hidden rounded-xl bg-paper px-6 py-10 shadow-paper sm:px-12 sm:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-navy/40"
            />
            <p className="font-sans text-xs font-medium tracking-[0.16em] text-navy uppercase">
              Electronic Engineering · Academic year 2025/2026
            </p>
            <h1 className="mt-6 font-display text-[clamp(1.85rem,1.1rem+2.4vw,3.15rem)] leading-[1.12] font-semibold tracking-[-0.03em] text-navy text-balance">
              {THESIS_TITLE}
            </h1>
            <p className="mt-5 max-w-xl font-display text-lg leading-snug text-ink/80 italic text-pretty">
              Validation of the SR5E1 motor-control library, alignment of the
              CAN database, and integration of an operator graphical interface.
            </p>
            <div className="mt-10 h-px w-24 bg-navy/50" />
            <p className="mt-6 font-display text-xl text-ink">{THESIS_AUTHOR}</p>
            <p className="mt-1 font-sans text-sm text-muted">{THESIS_AFFIL}</p>

            <BusMotif />

            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/read"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-navy px-5 font-sans text-base font-medium text-accent-fg transition-transform duration-150 ease-out hover:bg-navy-deep active:scale-[0.96]"
              >
                Read the thesis
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </Link>
              <Link
                to="/source"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-transparent px-5 font-sans text-base font-medium text-navy shadow-[0_0_0_1px_rgba(30,58,95,0.18)] transition-[background-color,transform] duration-150 ease-out hover:bg-paper-edge active:scale-[0.96]"
              >
                <FileCode className="size-4" strokeWidth={1.75} />
                Browse LaTeX source
              </Link>
            </div>
          </article>

          <aside className="flex flex-col gap-4">
            <section className="rounded-xl bg-paper p-6 shadow-paper sm:p-7">
              <p className="font-sans text-xs font-medium tracking-[0.14em] text-navy uppercase">
                Compile
              </p>
              <p className="mt-3 font-display text-[1.05rem] leading-relaxed text-ink text-pretty">
                A complete <span className="italic">pdflatex</span> project:
                eight chapters, bibliography, laboratory figures and CAPL/C
                listings. Open the zip in Overleaf or any TeX Live install.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-[10px] bg-code-bg p-4 font-mono text-[0.72rem] leading-relaxed text-navy">
                {`pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex`}
              </pre>
            </section>

            <section className="rounded-xl bg-paper p-6 shadow-paper sm:p-7">
              <p className="font-sans text-xs font-medium tracking-[0.14em] text-navy uppercase">
                Contents
              </p>
              <ol className="mt-4 space-y-2.5 font-sans text-sm text-ink">
                {[
                  "Introduction and contributions",
                  "CAN, FOC and the Stellar-E stack",
                  "DYNO2DW architecture and offset rule",
                  "Firmware: ramps, PI packing, ACK/NACK",
                  "PCAN-View and TRACE32 validation",
                  "DBC rebuild and identifier map",
                  "Vector CANalyzer and Python GUI",
                  "Results and outlook",
                ].map((item, i) => (
                  <li key={item} className="flex gap-3">
                    <span className="w-5 shrink-0 font-medium tabular-nums text-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <Link
              to="/read"
              className="group flex items-center justify-between rounded-xl bg-navy px-5 py-4 text-accent-fg shadow-paper transition-transform duration-150 ease-out hover:bg-navy-deep active:scale-[0.96]"
            >
              <span className="inline-flex items-center gap-3 font-sans text-sm font-medium">
                <BookOpen className="size-4" strokeWidth={1.75} />
                Open the typeset reader
              </span>
              <ArrowRight
                className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </Link>
          </aside>
        </div>

        <p className="mt-8 font-sans text-xs text-subtle">
          Expanded from the laboratory presentation{" "}
          <span className="italic">CAN Interface for Automation of the Dyno Bench</span>.
          University and supervisor fields are marked in the title page of{" "}
          <code className="font-mono">main.tex</code> for binding.
        </p>
      </div>
    </main>
  );
}

function BusMotif() {
  return (
    <svg
      viewBox="0 0 560 72"
      className="mt-10 w-full text-navy/70"
      aria-hidden="true"
    >
      <line x1="8" y1="36" x2="552" y2="36" stroke="currentColor" strokeWidth="1.4" />
      {[48, 168, 288, 408, 512].map((x) => (
        <g key={x}>
          <circle cx={x} cy="36" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <line x1={x} y1="36" x2={x} y2="18" stroke="currentColor" strokeWidth="1.4" />
          <rect
            x={x - 14}
            y="6"
            width="28"
            height="12"
            rx="1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </g>
      ))}
      <path
        d="M24 58h36l8-12 12 24 12-24 8 12h36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
