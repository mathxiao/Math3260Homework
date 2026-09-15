# MATH 3260 Interactive Homework — Stage 1

This is the browser-only Stage 1 homework practice site for MATH 3260 Linear Algebra.

## What is included

- 10 course chapters
- 52 lecture sessions
- exactly 2 problems per session
- 104 auto-graded problems total
- number, fraction/expression, complex-number, vector, matrix, and multiple-choice inputs
- instant feedback with unlimited retries
- browser-local progress tracking
- responsive desktop/mobile interface
- locally bundled MathJax for reliable mathematical rendering

## Mathematical rendering

MathJax is bundled under `assets/vendor/mathjax/` rather than loaded from a CDN. The interface waits for MathJax startup before typesetting dynamic session content. Prompts, options, hints, solutions, and mathematical input labels are escaped safely before they enter the page and are then typeset by MathJax.

The MathJax distribution is included under its Apache 2.0 license; see `assets/vendor/mathjax/LICENSE`.

## Files

- `index.html` — GitHub Pages entry page
- `404.html` — static fallback shell
- `assets/questions.js` — complete 104-problem question bank
- `assets/grader.js` — browser-side grading/parser engine
- `assets/app.js` — interface, navigation, progress, and rendering logic
- `assets/styles.css` — desktop/mobile styling
- `assets/vendor/mathjax/` — local mathematics renderer and license
- `tests/test_question_bank.js` — grading and parser validation
- `tests/test_markup_and_math.js` — delimiter, environment, escaping, and dependency audit
- `QUESTION_BANK_REVIEW.md` — instructor question-bank overview
- `INSTRUCTOR_TESTING.md` — manual instructor test checklist
- `RENDERING_AUDIT.md` — full 52-session rendering audit

## Run locally

For the closest match to GitHub Pages, serve the folder with a simple local web server rather than opening the HTML file directly. From this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` in a browser.

## Automated checks

With Node.js installed:

```bash
node tests/test_question_bank.js
node tests/test_markup_and_math.js
```

## GitHub Pages

Place the contents of this folder at the root of a GitHub repository and enable GitHub Pages from the repository’s default branch/root folder.

## Stage 1 limitation

This version is intentionally browser-only. Student answers and progress are stored with local storage on the current device and are not transmitted to an instructor. Because grading occurs in the browser, Stage 1 should be treated as practice/self-checking homework rather than a secure high-stakes assessment system.
