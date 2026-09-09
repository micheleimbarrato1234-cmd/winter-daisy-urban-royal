import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Download, FileCode, Menu, X } from "lucide-react";
import { FrontMatter } from "@/lib/thesis/body-front";
import { Chapters14 } from "@/lib/thesis/body-ch14";
import { Chapters58 } from "@/lib/thesis/body-ch58";
import { LATEX_ZIP, TOC, THESIS_AUTHOR } from "@/lib/thesis/toc";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/read")({ component: Reader });

function Reader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("abstract");

  useEffect(() => {
    const ids = TOC.flatMap((t) => [t.id, ...(t.children?.map((c) => c.id) ?? [])]);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]?.target.id) setActive(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-dvh bg-bg">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-rule bg-bg/90 px-3 backdrop-blur-sm sm:px-5">
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-[10px] text-navy lg:hidden"
          aria-label={open ? "Close contents" : "Open contents"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
        <Link to="/" className="font-sans text-sm font-medium text-navy">
          CAN Thesis
        </Link>
        <span className="hidden font-display text-sm text-muted sm:inline">
          {THESIS_AUTHOR}
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <Link
            to="/source"
            className="inline-flex h-11 items-center gap-2 rounded-xl px-3 font-sans text-sm font-medium text-navy hover:bg-paper-edge"
          >
            <FileCode className="size-4" strokeWidth={1.75} />
            <span className="hidden sm:inline">Source</span>
          </Link>
          <a
            href={LATEX_ZIP}
            download
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-navy px-3 font-sans text-sm font-medium text-accent-fg hover:bg-navy-deep sm:px-4"
          >
            <Download className="size-4" strokeWidth={1.75} />
            <span className="hidden sm:inline">LaTeX zip</span>
          </a>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl">
        {open ? (
          <button
            type="button"
            className="fixed inset-0 z-20 bg-ink/25 lg:hidden"
            aria-label="Close contents"
            onClick={() => setOpen(false)}
          />
        ) : null}

        <nav
          className={cn(
            "overflow-y-auto px-4",
            "lg:static lg:block lg:w-64 lg:shrink-0 lg:border-r lg:border-rule lg:bg-transparent lg:py-8 lg:shadow-none",
            open
              ? "fixed inset-y-0 left-0 z-30 block w-[min(18.5rem,88vw)] border-r border-rule bg-paper py-16 shadow-paper"
              : "hidden lg:block",
          )}
        >
          <p className="mb-3 flex items-center gap-2 font-sans text-[0.7rem] font-medium tracking-[0.16em] text-navy uppercase">
            <BookOpen className="size-3.5" strokeWidth={1.75} />
            Contents
          </p>
          <ul className="space-y-0.5">
            {TOC.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href.replace("/read", "")}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-2 py-1.5 font-sans text-[0.8rem] leading-snug",
                    active === item.id
                      ? "bg-navy/10 font-medium text-navy"
                      : "text-ink/80 hover:bg-paper-edge hover:text-navy",
                  )}
                >
                  {item.label}
                </a>
                {item.children ? (
                  <ul className="mb-1 ml-2 border-l border-rule pl-2">
                    {item.children.map((c) => (
                      <li key={c.id}>
                        <a
                          href={c.href.replace("/read", "")}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block rounded-md px-2 py-1 font-sans text-[0.75rem] leading-snug",
                            active === c.id
                              ? "font-medium text-navy"
                              : "text-muted hover:text-navy",
                          )}
                        >
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <article className="min-w-0 flex-1 px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
          <div className="mx-auto max-w-2xl rounded-xl bg-paper px-5 py-8 shadow-paper sm:px-10 sm:py-12">
            <p className="font-sans text-[0.7rem] font-medium tracking-[0.18em] text-navy uppercase">
              Master of Science Thesis
            </p>
            <p className="mt-3 font-display text-2xl leading-snug font-semibold tracking-[-0.02em] text-navy text-balance">
              CAN Interface for the Automation of a Dynamometer Test Bench
            </p>
            <p className="mt-2 font-display text-sm text-muted">
              Michele Imbarrato · SRA Lab, STMicroelectronics · 2025/2026
            </p>
            <div className="mt-6 h-px bg-navy/30" />
            <div className="prose-thesis mt-8">
              <FrontMatter />
              <Chapters14 />
              <Chapters58 />
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl px-1 font-sans text-xs text-subtle">
            Typeset reading copy of the LaTeX thesis. Download the source zip
            for Overleaf / pdflatex, including laboratory figures and the
            bibliography.
          </p>
        </article>
      </div>
    </div>
  );
}
