import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Check, Copy, Download } from "lucide-react";
import { LATEX_ZIP, SOURCE_FILES } from "@/lib/thesis/toc";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/source")({ component: SourceBrowser });

function SourceBrowser() {
  const [current, setCurrent] = useState(SOURCE_FILES[1]!.path);
  const [text, setText] = useState("Loading…");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setText("Loading…");
    fetch(`/thesis-src/${current}`)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.text();
      })
      .then((t) => {
        if (!cancelled) setText(t);
      })
      .catch(() => {
        if (!cancelled) setText("% Failed to load this file.");
      });
    return () => {
      cancelled = true;
    };
  }, [current]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="flex min-h-dvh flex-col bg-bg">
      <header className="flex h-14 items-center gap-3 border-b border-rule px-3 sm:px-5">
        <Link
          to="/"
          className="inline-flex size-11 items-center justify-center rounded-[10px] text-navy hover:bg-paper-edge"
          aria-label="Back"
        >
          <ArrowLeft className="size-5" />
        </Link>
        <div className="min-w-0">
          <p className="truncate font-sans text-sm font-medium text-navy">
            LaTeX source
          </p>
          <p className="truncate font-mono text-[0.7rem] text-muted">{current}</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={copy}
            className="inline-flex h-11 items-center gap-2 rounded-xl px-3 font-sans text-sm font-medium text-navy hover:bg-paper-edge"
          >
            {copied ? (
              <Check className="size-4" strokeWidth={1.75} />
            ) : (
              <Copy className="size-4" strokeWidth={1.75} />
            )}
            <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
          </button>
          <a
            href={LATEX_ZIP}
            download
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-navy px-3 font-sans text-sm font-medium text-accent-fg hover:bg-navy-deep sm:px-4"
          >
            <Download className="size-4" strokeWidth={1.75} />
            <span className="hidden sm:inline">Zip</span>
          </a>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col md:flex-row">
        <nav className="max-h-44 overflow-auto border-b border-rule md:max-h-none md:w-64 md:shrink-0 md:border-r md:border-b-0">
          <ul className="p-2">
            {SOURCE_FILES.map((f) => (
              <li key={f.path}>
                <button
                  type="button"
                  onClick={() => setCurrent(f.path)}
                  className={cn(
                    "flex w-full rounded-md px-3 py-2 text-left font-mono text-[0.75rem] leading-snug",
                    current === f.path
                      ? "bg-navy text-accent-fg"
                      : "text-ink hover:bg-paper-edge",
                  )}
                >
                  {f.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <pre className="min-h-0 flex-1 overflow-auto bg-paper p-4 font-mono text-[0.72rem] leading-relaxed text-ink sm:p-6 sm:text-[0.78rem]">
          {text}
        </pre>
      </div>
    </div>
  );
}
