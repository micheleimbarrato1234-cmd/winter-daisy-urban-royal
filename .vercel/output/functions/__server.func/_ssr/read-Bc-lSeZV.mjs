import { i as __toESM } from "../_runtime.mjs";
import { i as THESIS_AUTHOR, o as TOC, t as LATEX_ZIP } from "./toc-D2z1IAKK.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { R as require_react, _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Download, c as BookOpen, i as FileCode, r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/read-Bc-lSeZV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Figure({ src, alt, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "figure-frame",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "figure-cap",
			children: caption
		})]
	});
}
function Code({ caption, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-5 overflow-hidden rounded-md bg-code-bg shadow-[0_0_0_1px_rgba(28,25,21,0.08)]",
		children: [caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "border-b border-rule px-3 py-2 font-sans text-[0.72rem] font-medium tracking-wide text-navy",
			children: caption
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto p-3 sm:p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
				className: "font-mono text-[0.72rem] leading-relaxed text-ink sm:text-[0.78rem]",
				children
			})
		})]
	});
}
function Callout({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "my-5 rounded-md bg-navy/[0.04] px-4 py-3 shadow-[0_0_0_1px_rgba(30,58,95,0.16)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-sans text-xs font-semibold tracking-wide text-navy uppercase",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1.5 font-display text-[0.98rem] leading-relaxed text-ink",
			children
		})]
	});
}
function FrontMatter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "abstract",
			className: "scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase",
					children: "Abstract"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3",
					children: "Abstract"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The characterisation of traction inverters and electric machines on a dynamometer (dyno) test bench is a bottleneck in the development of modern electric-drive systems. Every start/stop command, speed or torque ramp, current reference and proportional–integral (PI) gain must reach the unit under test with deterministic timing, while a dense stream of diagnostics must travel in the opposite direction so that the operator—or an automated test script—can close the loop. When the unit under test is an STMicroelectronics Stellar-E (SR5E1) microcontroller running the Motor Control software development kit, that exchange is carried by a Controller Area Network (CAN) bus and by a translation layer historically called DYNO2DW (Dyno-to-Dishwasher), which maps bench-side CAN frames onto the internal ST Motor Control protocol." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"This thesis documents the complete rework of that interface. The existing SR5E1 CAN library was validated on the bench, and several defects—ambiguous command decoding, colliding response identifiers, incorrect packing of PI gains, and a mismatch between the documented Motor Control frame layout and the firmware implementation—were identified and corrected. The library was then extended with features required by automated characterisation: independent",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
					"/",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
					" set-points, a flux (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
					") ramp that did not exist in the original stack, torque (",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
					") ramps, and a compact 32-bit encoding that writes both a PI numerator and its power-of-two divisor in a single CAN message. A CAN database (DBC) was rewritten so that every identifier, layout and signal scaling matches the firmware, including a structural correction that turned the acknowledgement codes",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0xF0" }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0xFF" }),
					" from illegal message identifiers into payload values of a single response frame. Finally, a Python graphical user interface was connected to Vector CANalyzer through the Windows COM API, so that an operator can drive the inverter and observe telemetry without composing hexadecimal frames by hand."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The resulting chain—firmware, DBC, CAPL and GUI—was verified with PCAN-View frame injection and Lauterbach TRACE32 source-level debugging. Periodic diagnostics (ten registers every 100\xA0ms) are received reliably, commands are acknowledged on identifier",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x10" }),
					" and register reads return on ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x11" }),
					", and the mutually exclusive start/stop/reset path no longer emits contradictory frames on the bus."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "ack",
			className: "mt-16 scroll-mt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Acknowledgements" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I wish to thank the engineers of the SRA Lab at STMicroelectronics for the opportunity to work on a production-relevant motor-control stack, for access to the dynamometer bench, and for the TRACE32 and Vector toolchains that made the validation possible. I am equally grateful to the academic supervisor who followed this work, and to colleagues who reviewed early versions of the DBC and of the operator interface." })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "abbr",
			className: "mt-16 scroll-mt-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "List of abbreviations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Abbr." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Meaning" })] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
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
				["UUT", "Unit Under Test"]
			].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: k }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: v })] }, k)) })] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "How to compile the LaTeX",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-0",
				children: [
					"Download the project zip, open ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "thesis/main.tex" }),
					" in Overleaf or TeX Live, then run ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "pdflatex" }),
					",",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "bibtex" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "pdflatex" }),
					", ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "pdflatex" }),
					". University and supervisor fields on the title page are left as placeholders for binding."
				]
			})
		})
	] });
}
function Chapters14() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "ch1",
			className: "mt-20 scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase",
					children: "Chapter 1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Introduction" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch1-mot",
					children: "Motivation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Electrification has moved a large fraction of product validation from the vehicle or the appliance onto the dynamometer bench. A dyno can impose a controlled mechanical load and exercise the current, flux and speed loops of a field-oriented controller. The value of that facility is only as high as the digital interface that binds the bench software to the unit under test." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"In the laboratory that hosted this work, the UUT is an STMicroelectronics Stellar-E microcontroller of the SR5E1 family, running the Motor Control SDK. The physical link is CAN. Historically, bench commands were translated into the internal ST Motor Control protocol by DYNO2DW—“Dyno to Dishwasher”, a name that betrays the appliance origin of the protocol profile. The layer was functional enough for manual bring-up, but it was not a contract a test automation engineer could trust: identifiers collided, a single",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "EXECUTE_COMMAND" }),
					" frame could request both start and stop, PI gains could not be written atomically, ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
					" and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
					" could not be ramped independently, and the DBC that Vector CANalyzer used to decode the bus had drifted away from the C implementation."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch1-obj",
					children: "Objectives"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The work was organised around three objectives." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Validate and correct the SR5E1 CAN library." }), " Exercise every incoming command and every outgoing diagnostic on hardware. Prove, with TRACE32 breakpoints and PCAN-View traces, that each CAN identifier maps onto the intended Motor Control call."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Rebuild the DBC" }), " so that it is a faithful dictionary of the bus: add the new messages, enforce the +0x30 / +0x40 offset convention, and correct the structural error that treated acknowledgement codes as CAN identifiers."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Provide an operator GUI on top of Vector CANalyzer." }), " Use CAPL and the COM API so that a Python interface can start and stop the motor, program ramps, tune PI gains and plot telemetry without exposing hexadecimal layouts."] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch1-contrib",
					children: "Contributions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A documented architecture of DYNO2DW, including the offset rule, the ten-message diagnostic stack and the TX/RX call graph." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"A mutually exclusive rewrite of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "EXECUTE_COMMAND" }),
						" that cannot emit both START and STOP for the same frame."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Independent ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
						"/",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
						" set-points and a newly implemented flux ramp through the UI, MCI and STC layers."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"A 32-bit packing convention for PI registers, so a single",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "SET_REG" }),
						" writes both ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["K", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "p" })] }),
						" and its power-of-two divisor."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Separation of ACK/NACK (ID ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x10" }),
						", payload",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0xF0" }),
						"/",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0xFF" }),
						") from the GET_REG response (ID ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x11" }),
						")."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A case study of a specification-versus-implementation discrepancy: byte 0 of a SET_REG frame is the register identifier, not a length field." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"A DBC aligned on the firmware, and a Python GUI driven through",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: " win32com.client" }),
						", with CAPL-side ready-flags that prevent incomplete multi-parameter frames from reaching the bus."
					] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The methodology was closed-loop rather than spec-first. Each defect was reproduced on the bench by injecting a CAN frame, trapped in TRACE32 on the FDCAN interrupt, and only then corrected in C, DBC or CAPL. The firmware is treated as the source of truth: a DBC that disagrees with the MCU will decode the bus wrongly, and a GUI that disagrees with the DBC will send frames the MCU silently nacks." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "ch2",
			className: "mt-20 scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase",
					children: "Chapter 2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Technical background" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch2-can",
					children: "Controller Area Network"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "CAN is a multi-master, message-oriented serial bus standardised as ISO 11898. Nodes do not address each other; they publish frames that carry an identifier, a payload and a CRC. Arbitration is bitwise and non-destructive: priority is encoded in the identifier itself. Two facts structure everything that follows." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "The identifier is the message." }),
					" There is no session. A node that wants to start the motor publishes ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x33" }),
					"; a node that wants to report heatsink temperature publishes",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x5A" }),
					". A DBC file, which binds names and layouts to identifiers, is not documentation on the side—it is the only human-readable contract the bus has."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Payload layout is convention, not syntax." }), " Little-endian packing of a 32-bit speed, a 16-bit current or a concatenated PI word is entirely a matter of agreement. Break it and the bus still “works”: frames are acknowledged at the data-link layer while the application reads garbage."] })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The SR5E1 implements an FDCAN peripheral. In this project the physical layer was operated as CAN 2.0 with 11-bit identifiers: payloads fit in eight bytes, and the dyno software was configured for that mode. A later migration to CAN FD is a configuration change rather than a protocol redesign." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch2-foc",
					children: "Field-oriented control"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Permanent-magnet synchronous machines are controlled, in the ST Motor Control SDK as in most industrial drives, by FOC. Stator currents are transformed into a rotor-aligned ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "dq" }),
					" frame in which ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
					" is flux-producing and",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
					" is torque-producing. Three consequences for the CAN interface follow."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Independent ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
						" ",
						"references are not a luxury. Characterisation holds one axis while sweeping the other."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Ramps are a safety and a physics feature. A step of",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
						" is a step of torque; on a dyno with finite mechanical bandwidth it produces a torsional shock."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"PI gains are stored as a numerator and a power-of-two divisor, so the effective gain is ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "K" }),
						" / 2",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "n" }),
						". Exposing only the numerator would make closed-loop behaviour impossible to reconstruct."
					] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch2-mcp",
					children: "Motor Control protocol and FCP"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The internal protocol is a short, length-prefixed, checksummed frame:" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center font-mono text-sm",
					children: "[Code : 1 B][Length : 1 B][Payload : Length B][CRC : 1 B]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"DYNO2DW is a translator: it reads a CAN identifier and a raw 8-byte buffer, and it ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "builds" }),
					" that FCP frame in a local array",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "msg[]" }),
					". Any confusion between “byte 0 of the CAN payload” and “byte 0 of the FCP frame” produces a protocol discrepancy—exactly the SET_REG case study of Chapter 5. Acknowledgements and register-read responses are both produced by the same TX handler; if they share a CAN identifier, a consumer cannot tell a successful write from a four-byte value."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The “dishwasher” qualifier is historical. ST’s Motor Control SDK ships application profiles, among them an appliance profile originally demonstrated on a dishwasher drum motor. The register map, command codes and Frame Communication Protocol of that profile were reused as the internal language of the dyno interface." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "ch3",
			className: "mt-20 scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase",
					children: "Chapter 3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "The existing SR5E1 CAN library" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The library is an adapter. On one side is the dynamometer software, which speaks a flat set of 11-bit CAN identifiers. On the other side is the ST Motor Control SDK. Between them sits",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "DYNO2DWProtocol" }),
					", invoked from the FDCAN receive interrupt."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch3-off",
					children: "The offset rule"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Two constants structure the identifier map. An incoming command whose Motor Control code is ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "c" }),
					" is published as identifier",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "c" }),
					" + ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x30" }),
					". An outgoing diagnostic whose register identifier is ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "r" }),
					" is published as ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "r" }),
					" + ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x40" }),
					". The constants park commands in 0x30–0x3F and diagnostics in 0x40–0x60, leaving 0x10–0x11 free for MCU responses."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
					title: "Collision exception",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-0",
						children: [
							"The offset is the default, not a law. Protocol codes",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x0F" }),
							" and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x11" }),
							" would have mapped to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x3F" }),
							" and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x41" }),
							", colliding with the",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
							" ramp and the diagnostic window. Unused identifiers ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x3B" }),
							" and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "0x3C" }),
							" were therefore assigned in both the DBC and the C switch."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch3-diag",
					children: "Periodic diagnostics — Send_Status"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The dyno must observe the inverter without polling. The library therefore emits a stack of ten diagnostic frames every 100\xA0ms. Each iteration reads one register through ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "UI_GetReg" }),
					", packs the 32-bit value as four little-endian bytes, assigns the identifier ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "r" }),
					" + 0x40, and submits the frame. Submission is gated on ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "FCP_TRANSFER_IDLE" }),
					": if the TX path is still busy, the entire stack is skipped for that period."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					caption: "Diagnostic register list",
					children: `#define CAN_NUM_MSG  10

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
};`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch3-map",
					children: "Command and diagnostic map"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "ID" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Command" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Role" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
					[
						"0x31",
						"SET_REG",
						"Write a Motor Control register"
					],
					[
						"0x32",
						"GET_REG",
						"Read a Motor Control register"
					],
					[
						"0x33",
						"EXECUTE_COMMAND",
						"Start, stop, reset, align"
					],
					[
						"0x37",
						"SET_RAMP",
						"Speed ramp (final value, duration)"
					],
					[
						"0x3A",
						"SET_CURRENT_ID_IQ",
						"Simultaneous Id and Iq"
					],
					[
						"0x3B",
						"SET_CURRENT_ID",
						"Independent Id reference"
					],
					[
						"0x3C",
						"SET_CURRENT_IQ",
						"Independent Iq reference"
					],
					[
						"0x3E",
						"SET_ID_RAMP",
						"Flux (Id) ramp"
					],
					[
						"0x3F",
						"SET_IQ_RAMP",
						"Torque (Iq) ramp"
					]
				].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: r[0] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: r[1] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r[2] })
				] }, r[0])) })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "ID" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Diagnostic" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Content" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
					[
						"0x42",
						"DIAG_STATE_MC",
						"Machine status"
					],
					[
						"0x44 / 0x5E",
						"SPEED_REF / MEAS",
						"Speed"
					],
					[
						"0x48 / 0x5F",
						"TORQUE_REF / MEAS",
						"Iq"
					],
					[
						"0x4C / 0x60",
						"FLUX_REF / MEAS",
						"Id"
					],
					[
						"0x59",
						"DIAG_BUS_VOLTAGE",
						"DC-link voltage"
					],
					[
						"0x5A",
						"DIAG_TEMPERATURE",
						"Heatsink temperature"
					]
				].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: r[0] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: r[1] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r[2] })
				] }, r[0])) })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Reception is entirely interrupt-driven: hardware raises",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "IRQ_CAN1_LINE0_HANDLER" }),
					", the ISR copies the payload into",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "RxArr[]" }),
					", DYNO2DW builds ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "msg[]" }),
					" with a CRC from ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "SelfCRCCalc" }),
					", and each byte is fed to",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "CFCP_RX_IRQ_Handler" }),
					". Timeouts live in the FCP layer, so an interrupted multi-byte feed cannot be parsed as the tail of an earlier command."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "ch4",
			className: "mt-20 scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase",
					children: "Chapter 4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Firmware developments" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch4-exec",
					children: "Mutually exclusive EXECUTE_COMMAND"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The original decoder was a sequence of independent ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "if" }),
					" ",
					"blocks. Because start was coded as",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "if (RxArr[0] & EXE_START_MOTOR)" }),
					" and stop as",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "else if (!(RxArr[0] & EXE_START_MOTOR))" }),
					",",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "every" }),
					" frame produced either a start or a stop. Reset lived in its own ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "if" }),
					" afterwards, so a single CAN frame could emit two FCP frames back to back."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The decoder was rewritten around an explicit",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "validCommand" }),
					" flag and a chain of",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "if / else if" }),
					" that commits to at most one Motor Control command per CAN frame. The start bit still means start; its absence no longer means stop."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					caption: "Decoded EXECUTE_COMMAND path (simplified)",
					children: `case EXECUTE_COMMAND:
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
    break;`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Byte" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Bit" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Flag" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
					[
						"0",
						"1",
						"EXE_START_MOTOR"
					],
					[
						"0",
						"2",
						"STOP_RAMP"
					],
					[
						"0",
						"3",
						"RESET"
					],
					[
						"0",
						"5",
						"EXE_PING"
					],
					[
						"0",
						"6",
						"FAULT_ACK"
					],
					[
						"0",
						"7",
						"ENCODER_ALIGN"
					],
					[
						"1",
						"0",
						"EXE_IQDREF_CLEAR"
					],
					[
						"1",
						"1",
						"GET_BOARD_INFO"
					]
				].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r[0] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r[1] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: r[2] }) })
				] }, r[2])) })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "ch4-iqd",
					children: [
						"Independent I",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" }),
						" / I",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" }),
						" references"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "SET_CURRENT_ID_IQ" }), " (0x3A) already writes both axes in one frame. Characterisation, however, almost always holds one axis and moves the other. Two Motor Control codes that the original library did not use were claimed, with 16-bit signed little-endian set-points and FCP length 0x02."] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					caption: "New protocol codes and UI dispatch",
					children: `#define MC_PROTOCOL_CODE_SET_CURRENT_ID_REF  0x0F
#define MC_PROTOCOL_CODE_SET_CURRENT_IQ_REF  0x11

case MC_PROTOCOL_CODE_SET_CURRENT_ID_REF: {
    int16_t hIdRef = (int16_t)buffer[0] + ((int16_t)buffer[1] << 8);
    UI_SetIdRef(&pHandle->_Super, hIdRef);
    bNoError = true;
} break;`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch4-ramp",
					children: "Torque and flux ramps"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The torque ramp already existed as",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "UI_ExecTorqueRamp" }),
					". The library lacked only the DYNO2DW case: six bytes, a 32-bit signed final ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
					" and a 16-bit unsigned duration in milliseconds. A duration of zero means “step”."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"A flux ramp did not exist at all. The implementation adds",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "MC_PROTOCOL_CODE_SET_FLUX_RAMP" }),
					" and three weak functions that mirror the torque-ramp call chain:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "UI_ExecFluxRamp" }),
					" → ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "MCI_ExecFluxRamp" }),
					" →",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "STC_ExecCurrentRamps" }),
					". The speed/torque controller stores flux in Q16. Given ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
					"(0), a final value",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "⋆" }),
					" and a duration ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "T" }),
					" in milliseconds,"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-center font-display",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "N" }),
						" = ⌊",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "T" }),
						" · ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "f" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "STC" }),
						" / 1000⌋ + 1, \xA0\xA0 Δ = (",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "⋆" }),
						" − ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
						"(0)) · 2",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "16" }),
						" / ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "N" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"If ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "T" }),
					" = 0, the Q16 reference is loaded immediately. The controller is switched to torque mode so the outer speed loop cannot fight the current ramps. The DYNO2DW case preserves the",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
					" component of the current ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "qd_t" }),
					" ",
					"pair, so commanding an ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
					" ramp cannot accidentally zero ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					caption: "STC flux-ramp update (excerpt)",
					children: `if (hDurationms == 0u) {
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
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch4-pi",
					children: "Packed PI register access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The MCSDK stores an integer numerator and a power-of-two divisor. A single 32-bit ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "wValue" }),
					" therefore carries both halves: bits 15–0 are the gain, bits 31–16 are the divisor. Reading is the inverse, so a GET_REG of ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "MC_PROTOCOL_REG_SPEED_KP" }),
					" ",
					"round-trips. The same layout is used for ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["K", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" })] }),
					" and for the three loops (speed, flux, torque)."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					caption: "Packing and unpacking of SPEED_KP",
					children: `/* UI_SetReg */
uint16_t kp_gain     = (uint16_t)(wValue & 0xFFFF);
uint16_t kp_div_pow2 = (uint16_t)(((uint32_t)wValue >> 16) & 0xFFFF);
PID_SetKP(pMCT->pPIDSpeed, (int16_t)kp_gain);
PID_SetKPDivisorPOW2(pMCT->pPIDSpeed, kp_div_pow2);

/* UI_GetReg */
bRetVal = ((int32_t)(PID_GetKPDivisor(pMCT->pPIDSpeed) & 0xFFFFu) << 16)
        |  ((uint16_t)(PID_GetKP(pMCT->pPIDSpeed) & 0xFFFFu));`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch4-ack",
					children: "Separating ACK/NACK from GET_REG"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every well-formed command produces a response. A write produces a one-byte acknowledgement, 0xF0 for success and 0xFF for failure. A read produces a four-byte register value. In the original library both responses were emitted under the same CAN identifier. The FCP TX handler already knew the size of the frame it was serialising: acknowledgements are not four bytes, and register values are." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					caption: "Identifier selection in CFCP_TX_IRQ_Handler",
					children: `TxHeader.Identifier = CAN_TX_MSG_ID_START;   /* 0x10 */
if (pBaseHandle->TxFrame.Size == 4) {
    TxHeader.Identifier = 17U;               /* 0x11 */
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "On the DBC side the same split is two messages, ACK_NACK and REG_VALUE. A further DBC defect—treating 0xF0 and 0xFF themselves as identifiers—is repaired in Chapter 6." })
			]
		})
	] });
}
function Chapters58() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "ch5",
			className: "mt-20 scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase",
					children: "Chapter 5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Validation and debugging" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Firmware that has only been compiled has not been validated. The method is deliberately low-level: PCAN-View injects frames, the SR5E1 raises an FDCAN interrupt, TRACE32 steps through",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "DYNO2DWProtocol" }),
					", and PCAN-View records the response."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch5-chain",
					children: "Debug chain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Frame injection." }), " A PCAN-USB FD adapter transmits a frame with a chosen identifier, DLC and payload."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Interrupt." }),
						" Arrival of a filtered identifier raises",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "IRQ_CAN1_LINE0_HANDLER" }),
						". TRACE32 is programmed with a breakpoint on the first instruction of DYNO2DW."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Step-by-step execution." }),
						" From that breakpoint the engineer watches the construction of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "msg[]" }),
						", the CRC, the call into FCP, and the Motor Control function that ultimately runs."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Response." }), " On resume the MCU publishes either identifier 0x10 with payload 0xF0/0xFF, or identifier 0x11 with a four-byte register value."] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image4.png",
					alt: "PCAN-View transmit list of test frames",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 5.1." }), " PCAN-View transmit list used for command injection. Each row is a hand-composed CAN frame."] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Before any command was trusted, the TX path was checked in isolation. With the motor idle, PCAN-View logged the diagnostic window 0x40–0x60. The expected behaviour is ten frames every 100\xA0ms." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image6.png",
					alt: "PCAN-View receive trace of diagnostics and ACK frames",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 5.2." }), " MCU-to-dyno traffic. Identifier 0x10 carries ACK/NACK; 0x11 carries REG_VALUE; the remaining identifiers are the periodic diagnostic stack."] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch5-disc",
					children: "Case study: SET_REG versus the specification"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The Motor Control protocol document describes SET_REG as a length-prefixed frame: byte 0 is the payload length, byte 1 is the register identifier. The SR5E1 library, as written and as executed, does something else. Byte 0 of the CAN payload ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "is" }),
					" the register identifier. There is no length byte on the wire; the FCP length is inserted by DYNO2DW when it builds ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "msg[]" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/thesis-media/image7.png",
						alt: "SET_REG frame in PCAN-View",
						caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 5.3." }), " SET_REG as transmitted from PCAN-View. Byte 0 of the payload is already the target register identifier."] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/thesis-media/image8.png",
						alt: "Dishwasher protocol SET_REG layout",
						caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 5.4." }), " SET_REG layout in the dishwasher specification, with a length byte in front of the register identifier."] })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Two equally defensible repairs were available: change the firmware to match the document, or document the firmware and change the DBC. The second option was taken. The library was already deployed on boards that the dyno spoke to; DYNO2DW exists specifically to absorb this kind of difference; and the DBC is the contract the GUI and the dyno software compile." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
					title: "Pass criteria",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-0",
						children: "A command was marked validated when TRACE32 showed the intended FCP frame, the associated Motor Control function executed, the bus showed 0x10/0xF0 for writes or 0x11 with the expected value for reads, and a malformed variant produced 0xFF without changing machine state. The GUI was not used as an oracle during this campaign."
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "ch6",
			className: "mt-20 scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase",
					children: "Chapter 6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "The CAN database" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Without a DBC, CANalyzer displays identifiers and hex dumps. With a DBC it displays “heatsink temperature, 47.3 °C” and it can encode a speed ramp from two physical fields. The Python GUI never packs a CAN frame itself; it writes system variables, CAPL reads those variables, and CANalyzer encodes the frame from the DBC. A DBC which disagrees with the firmware is therefore a functional bug in the operator path." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch6-tree",
					children: "Message tree"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image18.png",
					alt: "DBC message tree in CANalyzer",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 6.1." }), " DBC message tree. Diagnostics occupy 0x40–0x60; motor-control commands occupy 0x30–; MCU responses occupy 0x10 and 0x11."] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "EXECUTE_COMMAND" }),
					" (0x33) is a bit-mask spread over two bytes; each flag is a 1-bit signal so CAPL can write",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "msg.EXE_START_MOTOR = 1" }),
					" without shifting.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "SET_RAMP" }),
					" (0x37) carries two physical signals: final speed in RPM and duration in milliseconds. The same pattern—final value plus duration—is reused for the current ramps, with the final-value signal scaled in milliamperes."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image16.png",
					alt: "DBC signal layout of a CAN message",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 6.2." }), " Signal-level view of a DBC message. Start bit, length, factor and offset must match the firmware’s little-endian packing."] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch6-ack",
					children: "Structural correction of ACK/NACK"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The original DBC declared two messages with identifiers 0xF0 and 0xFF. Those values are the ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "payload" }),
					" of an acknowledgement, not CAN identifiers: they do not fit in 11 bits, and they never appeared on the wire as identifiers. CANalyzer therefore never decoded a real ACK."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image11.png",
					alt: "Original DBC treating 0xF0 and 0xFF as identifiers",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 6.3." }), " Original DBC fragment in which 0xFF (NACK) and 0xF0 (ACK) are declared as distinct CAN identifiers. Both values are payload codes of the single message 0x10."] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The repair is a single message ACK_NACK at identifier 0x10, DLC 1, with one unsigned 8-bit signal ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "AckCode" }),
					" and a value table mapping 0xF0 ↦ ACK and 0xFF ↦ NACK. Identifier 0x11 remains REG_VALUE. After this change, a CAPL ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "on message ACK_NACK" }),
					" ",
					"handler fires on every write, and Python never has to look at identifiers."
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "ch7",
			className: "mt-20 scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase",
					children: "Chapter 7"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "CANalyzer integration and operator GUI" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Python is a poor real-time CAN stack. Vector CANalyzer is a poor widget toolkit. The architecture takes that observation literally: CANalyzer owns timing, DBC encoding and CAPL; Python owns widgets and talks only to system variables via ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "win32com.client" }),
					"."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch7-arch",
					children: "Partition of responsibilities"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image5.png",
					alt: "Vector CANalyzer and system-variable namespace",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 7.1." }), " Vector CANalyzer during a session, with the system-variable namespace that the Python GUI reads and writes through the COM API."] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"A speed ramp has two parameters. If the GUI wrote",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "SET_RAMP = 1" }),
					" the moment the operator touched either field, the frame on the bus would carry a stale duration or a stale final speed. The CAPL layer therefore keeps a physical value, a ready flag per value, and a trigger. The trigger fires the handler; the handler transmits only when every ready flag is one."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					caption: "CAPL handler for the speed ramp, with ready-flag guard",
					children: `on sysvar SET_SPEED_RAMP::SET_RAMP
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
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					caption: "CAPL helper that encodes a packed PI SET_REG",
					children: `void send_pi_message(word reg_id, int val, int denom)
{
  message SET_REG msg;
  msg.REGISTER_ID          = reg_id;
  msg.REGISTER_VALUE       = val;
  msg.REGISTER_VALUE_DENOM = denom;
  output(msg);
}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "ch7-panels",
					children: "Operator panels"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The GUI is organised as a connection banner plus four tabs. The banner is always visible: a CAN-bus indicator, machine state, heatsink temperature, DC-link voltage, and the start / stop / reset-fault controls. Putting those controls outside the tabs is a safety choice—an operator looking at a PI panel can still stop the motor without changing tab." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image9.png",
					alt: "Motor control panel of the Python GUI",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 7.2." }), " Motor control panel. Connection status, start/stop, thermal and DC-link readouts, machine state and fault reset live in the top banner."] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image10.png",
					alt: "Speed control tab with RPM gauge",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 7.3." }), " Speed-control tab. The operator sets a final speed and a duration; the gauge compares reference and actual RPM in real time."] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image21.png",
					alt: "PI controller tab with Kp Ki numerator and divisor",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 7.4." }),
						" PI-controller tab. Each of the three loops exposes ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["K", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "p" })] }),
						" and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["K", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" })] }),
						" as a numerator / 2",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "n" }),
						" pair, matching the packed 32-bit register layout."
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image20.png",
					alt: "Current control tab with Iq and Id plots",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 7.5." }),
						" Current-control tab. Independent",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
						" and ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
						" set-points and ramps, with live plots of reference and measured current."
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/thesis-media/image19.png",
					alt: "Live charts tab",
					caption: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Figure 7.6." }),
						" Live-charts tab: speed overview together with the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "q" })] }),
						" (torque) and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["I", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "d" })] }),
						" (flux) current plots."
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The GUI does not implement a safety PLC, does not log to disk (CANalyzer already records traces), does not re-implement DBC packing, and does not talk to the MCU except through CANalyzer. Those restrictions keep the three-artefact rule intact: firmware, DBC, operator surface, in that order of authority." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "ch8",
			className: "mt-20 scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase",
					children: "Chapter 8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Conclusions and outlook" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The project set out to make the CAN interface between a Stellar-E inverter and a dynamometer bench automatable. That sentence unpacks into three artefacts that now agree with each other." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "The SR5E1 CAN library is a contract." }), " EXECUTE_COMMAND commits to a single Motor Control command per frame. Independent current references exist as first-class codes. The torque ramp is reachable from CAN, and a flux ramp that the SDK did not previously offer is implemented through the UI, MCI and STC layers. PI gains travel as a packed 32-bit word. ACK/NACK and GET_REG no longer share an identifier."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "The DBC is a projection of that contract." }), " Identifiers follow the +0x30 / +0x40 offset rule, with an explicit exception for the independent current commands. Acknowledgement codes 0xF0 and 0xFF are payload values of message 0x10. The SET_REG discrepancy was resolved by documenting the firmware as authoritative."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "An operator can drive the inverter without composing hexadecimal." }), " Vector CANalyzer owns timing and encoding. A Python GUI exposes start/stop, speed ramps, three PI loops, independent current axes and live plots. CAPL ready-flags keep incomplete multi-parameter commands off the bus."] })
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Limitations are accepted rather than accidental. The physical layer was validated as CAN 2.0; range checking of set-points is left to the SDK; the GUI requires a licensed CANalyzer installation; and functional-safety aspects of Stellar-E were out of scope." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Three extensions follow naturally: scripted characterisation on the now-stable DBC; CAN FD and higher-rate telemetry once the TX path is measured not to drop stacks under FCP_TRANSFER_IDLE back-pressure; and bidirectional PI scheduling that writes",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["K", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "p" })] }),
					" and ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { children: ["K", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "i" })] }),
					" of one loop together, which would make automated tuning less sensitive to a control period that lands between two CAN frames."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The technical content of this thesis is a handful of C cases, a DBC file and a Python window. The engineering content is the refusal to let those three disagree. A bench that is automated on top of a silently wrong identifier map is worse than a bench that is operated by hand: it produces plots that look like measurements and are not. The debug chain of Chapter 5—inject, halt, step, compare—is the method that keeps the plots honest." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "app",
			className: "mt-20 scroll-mt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-xs font-medium tracking-[0.18em] text-navy uppercase",
					children: "Appendix"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Extended listings" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"The listings in the main chapters are shortened to the statements that carry the argument. The complete functions, including the Send_Status sketch, the UI/MCI/STC flux-ramp chain and the deployed CAPL events, are in ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "chapters/A_listings.tex" }),
					" of the downloadable project."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
					caption: "Inbound CAPL: diagnostics and REG_VALUE",
					children: `on message DIAG_TORQUE_REF
{
  @DIAG_MESSAGES::TORQUE_REF = this.DWord(0);
}

on message REG_VALUE
{
  @GET_REG::K_num = this.GET_K_NUMERATOR;
  @GET_REG::K_den = this.GET_K_DENOMINATOR;
}`
				})
			]
		})
	] });
}
function Reader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("abstract");
	(0, import_react.useEffect)(() => {
		const els = TOC.flatMap((t) => [t.id, ...t.children?.map((c) => c.id) ?? []]).map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		if (!els.length) return;
		const obs = new IntersectionObserver((entries) => {
			const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (vis[0]?.target.id) setActive(vis[0].target.id);
		}, {
			rootMargin: "-20% 0px -70% 0px",
			threshold: [0, 1]
		});
		els.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-rule bg-bg/90 px-3 backdrop-blur-sm sm:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-[10px] text-navy lg:hidden",
					"aria-label": open ? "Close contents" : "Open contents",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-sans text-sm font-medium text-navy",
					children: "CAN Thesis"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden font-display text-sm text-muted sm:inline",
					children: THESIS_AUTHOR
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/source",
						className: "inline-flex h-11 items-center gap-2 rounded-xl px-3 font-sans text-sm font-medium text-navy hover:bg-paper-edge",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileCode, {
							className: "size-4",
							strokeWidth: 1.75
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: "Source"
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
							children: "LaTeX zip"
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl",
			children: [
				open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "fixed inset-0 z-20 bg-ink/25 lg:hidden",
					"aria-label": "Close contents",
					onClick: () => setOpen(false)
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: cn("overflow-y-auto px-4", "lg:static lg:block lg:w-64 lg:shrink-0 lg:border-r lg:border-rule lg:bg-transparent lg:py-8 lg:shadow-none", open ? "fixed inset-y-0 left-0 z-30 block w-[min(18.5rem,88vw)] border-r border-rule bg-paper py-16 shadow-paper" : "hidden lg:block"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 flex items-center gap-2 font-sans text-[0.7rem] font-medium tracking-[0.16em] text-navy uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
							className: "size-3.5",
							strokeWidth: 1.75
						}), "Contents"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-0.5",
						children: TOC.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href.replace("/read", ""),
							onClick: () => setOpen(false),
							className: cn("block rounded-md px-2 py-1.5 font-sans text-[0.8rem] leading-snug", active === item.id ? "bg-navy/10 font-medium text-navy" : "text-ink/80 hover:bg-paper-edge hover:text-navy"),
							children: item.label
						}), item.children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mb-1 ml-2 border-l border-rule pl-2",
							children: item.children.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: c.href.replace("/read", ""),
								onClick: () => setOpen(false),
								className: cn("block rounded-md px-2 py-1 font-sans text-[0.75rem] leading-snug", active === c.id ? "font-medium text-navy" : "text-muted hover:text-navy"),
								children: c.label
							}) }, c.id))
						}) : null] }, item.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "min-w-0 flex-1 px-4 py-8 sm:px-8 sm:py-12 lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl rounded-xl bg-paper px-5 py-8 shadow-paper sm:px-10 sm:py-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-[0.7rem] font-medium tracking-[0.18em] text-navy uppercase",
								children: "Master of Science Thesis"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-2xl leading-snug font-semibold tracking-[-0.02em] text-navy text-balance",
								children: "CAN Interface for the Automation of a Dynamometer Test Bench"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-sm text-muted",
								children: "Michele Imbarrato · SRA Lab, STMicroelectronics · 2025/2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-px bg-navy/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "prose-thesis mt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrontMatter, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapters14, {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapters58, {})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl px-1 font-sans text-xs text-subtle",
						children: "Typeset reading copy of the LaTeX thesis. Download the source zip for Overleaf / pdflatex, including laboratory figures and the bibliography."
					})]
				})
			]
		})]
	});
}
//#endregion
export { Reader as component };
