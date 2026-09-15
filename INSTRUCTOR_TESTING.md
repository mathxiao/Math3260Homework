# Instructor Testing Checklist — Stage 1

The site has already passed the automated and browser-level audits documented in `RENDERING_AUDIT.md`. This checklist is for your own usability review before students see the site.

1. Open the site through a local web server or GitHub Pages.
2. Open **Session 7.5** on a phone-width browser window. Confirm that `A = diag(3,1)` is rendered as mathematics rather than displaying dollar signs or LaTeX commands.
3. Confirm the labels `σ₁` and `σ₂` are rendered mathematically.
4. Confirm Problem 2 in Session 7.5 shows a 2-by-2 matrix-style answer entry with brackets.
5. Open **Session 2.1** and confirm the matrix product is rendered and the choices show `2 × 4`, `3 × 3`, and `4 × 2` rather than malformed spacing.
6. Open **Session 6.6** and confirm the Kronecker-product symbol and the dimension choices render properly.
7. Open **Session 8.5** and confirm the conjugate-transpose notation and complex matrix render properly.
8. Enter a wrong answer in one problem and a correct answer in the other; click **Check answers** and confirm the two feedback messages differ appropriately.
9. Correct both answers and confirm the session changes to **2/2** and the sidebar/session progress is updated.
10. Click **Show answer explanation** and confirm its mathematics is also rendered rather than shown as LaTeX source.
11. Refresh the browser and confirm the saved answers/progress remain on that device.
12. Test at least one narrow mobile width and confirm the page itself does not scroll horizontally. Wide mathematics or matrix entry areas may scroll within their own bounded container when necessary.
13. Use **Reset progress** after testing if you want a clean student-facing state.

Stage 1 does not transmit grades or answers to the instructor.
