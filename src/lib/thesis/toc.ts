export type TocItem = {
  id: string;
  label: string;
  href: string;
  children?: { id: string; label: string; href: string }[];
};

export const THESIS_TITLE =
  "CAN Interface for the Automation of a Dynamometer Test Bench";

export const THESIS_AUTHOR = "Michele Imbarrato";
export const THESIS_AFFIL = "SRA Lab — STMicroelectronics";
export const LATEX_ZIP = "/can-interface-thesis-latex.zip";

export const SOURCE_FILES: { path: string; label: string }[] = [
  { path: "README.md", label: "README.md" },
  { path: "main.tex", label: "main.tex" },
  { path: "thesis.bib", label: "thesis.bib" },
  { path: "chapters/01_introduction.tex", label: "01_introduction.tex" },
  { path: "chapters/02_background.tex", label: "02_background.tex" },
  { path: "chapters/03_architecture.tex", label: "03_architecture.tex" },
  { path: "chapters/04_developments.tex", label: "04_developments.tex" },
  { path: "chapters/05_validation.tex", label: "05_validation.tex" },
  { path: "chapters/06_dbc.tex", label: "06_dbc.tex" },
  { path: "chapters/07_gui.tex", label: "07_gui.tex" },
  { path: "chapters/08_conclusions.tex", label: "08_conclusions.tex" },
  { path: "chapters/A_listings.tex", label: "A_listings.tex" },
];

export const TOC: TocItem[] = [
  {
    id: "front",
    label: "Front matter",
    href: "/read#abstract",
    children: [
      { id: "abstract", label: "Abstract", href: "/read#abstract" },
      { id: "ack", label: "Acknowledgements", href: "/read#ack" },
      { id: "abbr", label: "Abbreviations", href: "/read#abbr" },
    ],
  },
  {
    id: "ch1",
    label: "1  Introduction",
    href: "/read#ch1",
    children: [
      { id: "ch1-mot", label: "Motivation", href: "/read#ch1-mot" },
      { id: "ch1-obj", label: "Objectives", href: "/read#ch1-obj" },
      { id: "ch1-contrib", label: "Contributions", href: "/read#ch1-contrib" },
    ],
  },
  {
    id: "ch2",
    label: "2  Technical background",
    href: "/read#ch2",
    children: [
      { id: "ch2-can", label: "CAN and CAN FD", href: "/read#ch2-can" },
      { id: "ch2-foc", label: "Field-oriented control", href: "/read#ch2-foc" },
      { id: "ch2-mcp", label: "Motor Control protocol", href: "/read#ch2-mcp" },
    ],
  },
  {
    id: "ch3",
    label: "3  Existing CAN library",
    href: "/read#ch3",
    children: [
      { id: "ch3-off", label: "Offset rule", href: "/read#ch3-off" },
      { id: "ch3-diag", label: "Send_Status", href: "/read#ch3-diag" },
      { id: "ch3-map", label: "Command map", href: "/read#ch3-map" },
    ],
  },
  {
    id: "ch4",
    label: "4  Firmware developments",
    href: "/read#ch4",
    children: [
      { id: "ch4-exec", label: "EXECUTE_COMMAND", href: "/read#ch4-exec" },
      { id: "ch4-iqd", label: "Independent Id / Iq", href: "/read#ch4-iqd" },
      { id: "ch4-ramp", label: "Current ramps", href: "/read#ch4-ramp" },
      { id: "ch4-pi", label: "PI packing", href: "/read#ch4-pi" },
      { id: "ch4-ack", label: "ACK / NACK", href: "/read#ch4-ack" },
    ],
  },
  {
    id: "ch5",
    label: "5  Validation",
    href: "/read#ch5",
    children: [
      { id: "ch5-chain", label: "Debug chain", href: "/read#ch5-chain" },
      { id: "ch5-disc", label: "SET_REG discrepancy", href: "/read#ch5-disc" },
    ],
  },
  {
    id: "ch6",
    label: "6  CAN database",
    href: "/read#ch6",
    children: [
      { id: "ch6-tree", label: "Message tree", href: "/read#ch6-tree" },
      { id: "ch6-ack", label: "ACK correction", href: "/read#ch6-ack" },
    ],
  },
  {
    id: "ch7",
    label: "7  CANalyzer and GUI",
    href: "/read#ch7",
    children: [
      { id: "ch7-arch", label: "Architecture", href: "/read#ch7-arch" },
      { id: "ch7-panels", label: "Operator panels", href: "/read#ch7-panels" },
    ],
  },
  { id: "ch8", label: "8  Conclusions", href: "/read#ch8" },
  { id: "app", label: "Appendix  Listings", href: "/read#app" },
];
