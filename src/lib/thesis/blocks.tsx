import type { ReactNode } from "react";

export function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: ReactNode;
}) {
  return (
    <figure className="figure-frame">
      <img src={src} alt={alt} />
      <figcaption className="figure-cap">{caption}</figcaption>
    </figure>
  );
}

export function Code({
  caption,
  children,
}: {
  caption?: string;
  children: string;
}) {
  return (
    <figure className="my-5 overflow-hidden rounded-md bg-code-bg shadow-[0_0_0_1px_rgba(28,25,21,0.08)]">
      {caption ? (
        <figcaption className="border-b border-rule px-3 py-2 font-sans text-[0.72rem] font-medium tracking-wide text-navy">
          {caption}
        </figcaption>
      ) : null}
      <pre className="overflow-x-auto p-3 sm:p-4">
        <code className="font-mono text-[0.72rem] leading-relaxed text-ink sm:text-[0.78rem]">
          {children}
        </code>
      </pre>
    </figure>
  );
}

export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-5 rounded-md bg-navy/[0.04] px-4 py-3 shadow-[0_0_0_1px_rgba(30,58,95,0.16)]">
      <p className="font-sans text-xs font-semibold tracking-wide text-navy uppercase">
        {title}
      </p>
      <div className="mt-1.5 font-display text-[0.98rem] leading-relaxed text-ink">
        {children}
      </div>
    </aside>
  );
}
