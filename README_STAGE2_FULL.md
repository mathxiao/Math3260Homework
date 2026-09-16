# MATH 3260 Stage 2 — Complete Homework Preview

This package expands the approved Chapter 1 Stage 2 preview to the full MATH 3260 course.

## Coverage

- 10 chapters
- 52 lecture/homework sessions
- 6 primary problems per session
- 312 primary auto-graded problems total
- Every session uses the same difficulty balance:
  - 2 Easy
  - 3 Medium
  - 1 Slightly challenging
- Every primary problem includes:
  - a hint;
  - a full worked solution;
  - a similar-practice problem;
  - a similar-practice solution.

The site also saves each session's best score in the student's browser using localStorage.

## Upload to the existing GitHub repository

Upload the contents of this package into the existing `mathxiao/Math3260Homework` repository while preserving the folder structure.

This package intentionally does **not** include the large MathJax vendor folder. It reuses the existing file:

`assets/vendor/mathjax/tex-svg-full.js`

Keep that existing folder in the repository.

The Stage 1 homepage (`index.html`) does not need to be replaced. The full Stage 2 preview uses:

`stage2.html`

After GitHub Pages updates, open:

`https://mathxiao.github.io/Math3260Homework/stage2.html`

## Main files

- `stage2.html` — complete Stage 2 preview page
- `assets/stage2_app.js` — navigation, grading UI, similar practice, solutions, and saved progress
- `assets/stage2_grader.js` — numeric, fraction/expression, complex, vector, matrix, and choice grading
- `assets/stage2.css` — desktop/mobile layout
- `assets/data/chapter01.js` through `chapter10.js` — complete question bank
- `tests/test_stage2_full.js` — automated structural/grading validation
- `tests/test_stage2_math_markup.js` — markup/LaTeX sanity checks

## Notes

The homework is organized to track the existing MATH 3260 chapter/session structure. Numbers were chosen to keep arithmetic appropriate for hand work and automatic grading. The Stage 2 preview remains separate from the Stage 1 homepage so the existing live version can remain available during review.
