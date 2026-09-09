import { a as THESIS_TITLE, i as THESIS_AUTHOR, r as THESIS_AFFIL, t as LATEX_ZIP } from "./toc-D2z1IAKK.mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Download, c as BookOpen, i as FileCode, l as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-_kty4b3y.js
var import_jsx_runtime = require_jsx_runtime();
function Cover() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-dvh bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-dvh max-w-6xl flex-col px-4 py-6 sm:px-8 sm:py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[0.72rem] font-medium tracking-[0.18em] text-navy uppercase",
						children: "Master of Science Thesis"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: LATEX_ZIP,
						download: true,
						className: "inline-flex h-11 items-center gap-2 rounded-xl bg-navy px-4 font-sans text-sm font-medium text-accent-fg transition-transform duration-150 ease-out hover:bg-navy-deep active:scale-[0.96]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							strokeWidth: 1.75
						}), "Download LaTeX"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid flex-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "relative overflow-hidden rounded-xl bg-paper px-6 py-10 shadow-paper sm:px-12 sm:py-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-navy/40"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-xs font-medium tracking-[0.16em] text-navy uppercase",
								children: "Electronic Engineering · Academic year 2025/2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 font-display text-[clamp(1.85rem,1.1rem+2.4vw,3.15rem)] leading-[1.12] font-semibold tracking-[-0.03em] text-navy text-balance",
								children: THESIS_TITLE
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl font-display text-lg leading-snug text-ink/80 italic text-pretty",
								children: "Validation of the SR5E1 motor-control library, alignment of the CAN database, and integration of an operator graphical interface."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-10 h-px w-24 bg-navy/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-display text-xl text-ink",
								children: THESIS_AUTHOR
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sans text-sm text-muted",
								children: THESIS_AFFIL
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusMotif, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/read",
									className: "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-navy px-5 font-sans text-base font-medium text-accent-fg transition-transform duration-150 ease-out hover:bg-navy-deep active:scale-[0.96]",
									children: ["Read the thesis", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "size-4",
										strokeWidth: 1.75
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/source",
									className: "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-transparent px-5 font-sans text-base font-medium text-navy shadow-[0_0_0_1px_rgba(30,58,95,0.18)] transition-[background-color,transform] duration-150 ease-out hover:bg-paper-edge active:scale-[0.96]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, {
										className: "size-4",
										strokeWidth: 1.75
									}), "Browse LaTeX source"]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-xl bg-paper p-6 shadow-paper sm:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-xs font-medium tracking-[0.14em] text-navy uppercase",
										children: "Compile"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 font-display text-[1.05rem] leading-relaxed text-ink text-pretty",
										children: [
											"A complete ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "italic",
												children: "pdflatex"
											}),
											" project: eight chapters, bibliography, laboratory figures and CAPL/C listings. Open the zip in Overleaf or any TeX Live install."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
										className: "mt-4 overflow-x-auto rounded-[10px] bg-code-bg p-4 font-mono text-[0.72rem] leading-relaxed text-navy",
										children: `pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex`
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "rounded-xl bg-paper p-6 shadow-paper sm:p-7",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-xs font-medium tracking-[0.14em] text-navy uppercase",
									children: "Contents"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-4 space-y-2.5 font-sans text-sm text-ink",
									children: [
										"Introduction and contributions",
										"CAN, FOC and the Stellar-E stack",
										"DYNO2DW architecture and offset rule",
										"Firmware: ramps, PI packing, ACK/NACK",
										"PCAN-View and TRACE32 validation",
										"DBC rebuild and identifier map",
										"Vector CANalyzer and Python GUI",
										"Results and outlook"
									].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-5 shrink-0 font-medium tabular-nums text-navy",
											children: String(i + 1).padStart(2, "0")
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
									}, item))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/read",
								className: "group flex items-center justify-between rounded-xl bg-navy px-5 py-4 text-accent-fg shadow-paper transition-transform duration-150 ease-out hover:bg-navy-deep active:scale-[0.96]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-3 font-sans text-sm font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
										className: "size-4",
										strokeWidth: 1.75
									}), "Open the typeset reader"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4 transition-transform duration-150 group-hover:translate-x-0.5",
									strokeWidth: 1.75
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 font-sans text-xs text-subtle",
					children: [
						"Expanded from the laboratory presentation",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "CAN Interface for Automation of the Dyno Bench"
						}),
						". University and supervisor fields are marked in the title page of",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
							className: "font-mono",
							children: "main.tex"
						}),
						" for binding."
					]
				})
			]
		})
	});
}
function BusMotif() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 560 72",
		className: "mt-10 w-full text-navy/70",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "8",
				y1: "36",
				x2: "552",
				y2: "36",
				stroke: "currentColor",
				strokeWidth: "1.4"
			}),
			[
				48,
				168,
				288,
				408,
				512
			].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: x,
					cy: "36",
					r: "7",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: x,
					y1: "36",
					x2: x,
					y2: "18",
					stroke: "currentColor",
					strokeWidth: "1.4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: x - 14,
					y: "6",
					width: "28",
					height: "12",
					rx: "1.5",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "1.4"
				})
			] }, x)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 58h36l8-12 12 24 12-24 8 12h36",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.4",
				strokeLinejoin: "miter"
			})
		]
	});
}
//#endregion
export { Cover as component };
