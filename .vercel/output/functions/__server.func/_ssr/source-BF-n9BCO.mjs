import { i as __toESM } from "../_runtime.mjs";
import { n as SOURCE_FILES, t as LATEX_ZIP } from "./toc-D2z1IAKK.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_react, _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Download, o as Copy, s as Check, u as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/source-BF-n9BCO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SourceBrowser() {
	const [current, setCurrent] = (0, import_react.useState)(SOURCE_FILES[1].path);
	const [text, setText] = (0, import_react.useState)("Loading…");
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		setText("Loading…");
		fetch(`/thesis-src/${current}`).then((r) => {
			if (!r.ok) throw new Error(String(r.status));
			return r.text();
		}).then((t) => {
			if (!cancelled) setText(t);
		}).catch(() => {
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
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex h-14 items-center gap-3 border-b border-rule px-3 sm:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex size-11 items-center justify-center rounded-[10px] text-navy hover:bg-paper-edge",
					"aria-label": "Back",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-sans text-sm font-medium text-navy",
						children: "LaTeX source"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-mono text-[0.7rem] text-muted",
						children: current
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: copy,
						className: "inline-flex h-11 items-center gap-2 rounded-xl px-3 font-sans text-sm font-medium text-navy hover:bg-paper-edge",
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-4",
							strokeWidth: 1.75
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
							className: "size-4",
							strokeWidth: 1.75
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: copied ? "Copied" : "Copy"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: LATEX_ZIP,
						download: true,
						className: "inline-flex h-11 items-center gap-2 rounded-xl bg-navy px-3 font-sans text-sm font-medium text-accent-fg hover:bg-navy-deep sm:px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							strokeWidth: 1.75
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Zip"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-6xl flex-1 flex-col md:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "max-h-44 overflow-auto border-b border-rule md:max-h-none md:w-64 md:shrink-0 md:border-r md:border-b-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "p-2",
					children: SOURCE_FILES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCurrent(f.path),
						className: cn("flex w-full rounded-md px-3 py-2 text-left font-mono text-[0.75rem] leading-snug", current === f.path ? "bg-navy text-accent-fg" : "text-ink hover:bg-paper-edge"),
						children: f.label
					}) }, f.path))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "min-h-0 flex-1 overflow-auto bg-paper p-4 font-mono text-[0.72rem] leading-relaxed text-ink sm:p-6 sm:text-[0.78rem]",
				children: text
			})]
		})]
	});
}
//#endregion
export { SourceBrowser as component };
