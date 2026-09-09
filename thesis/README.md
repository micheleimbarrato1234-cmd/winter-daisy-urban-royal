# CAN Interface for the Automation of a Dynamometer Test Bench

Master's thesis source (LaTeX) by **Michele Imbarrato**, SRA Lab, STMicroelectronics.

This directory is a self-contained `pdflatex` project. Open `main.tex` in Overleaf, TeXstudio, or any TeX Live / MiKTeX installation.

## Compile

```bash
pdflatex -interaction=nonstopmode main.tex
bibtex main
pdflatex -interaction=nonstopmode main.tex
pdflatex -interaction=nonstopmode main.tex
```

XeLaTeX and LuaLaTeX also work (the preamble loads `fontenc`/`inputenc` only under pdfLaTeX).

## Layout

| File | Contents |
|---|---|
| `main.tex` | Preamble, title page, front matter, `\include` of chapters |
| `thesis.bib` | Bibliography (BibTeX) |
| `chapters/01_introduction.tex` | Context, objectives, contributions |
| `chapters/02_background.tex` | CAN/CAN FD, FOC, Stellar-E, MCSDK, dyno benches |
| `chapters/03_architecture.tex` | SR5E1 CAN library, DYNO2DW, offsets, TX/RX |
| `chapters/04_developments.tex` | Firmware changes (commands, ramps, PI, ACK/NACK) |
| `chapters/05_validation.tex` | PCAN-View, TRACE32, protocol discrepancy |
| `chapters/06_dbc.tex` | DBC design, alignment, response messages |
| `chapters/07_gui.tex` | Vector CANalyzer, CAPL, Python GUI |
| `chapters/08_conclusions.tex` | Results and outlook |
| `chapters/A_listings.tex` | Extended firmware / CAPL listings |
| `figures/` | Screenshots from the laboratory setup |

University, supervisor and matriculation fields on the title page are marked with `\todo` comments so they can be filled in before binding.
