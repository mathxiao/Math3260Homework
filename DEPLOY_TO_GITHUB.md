# Deploy MATH 3260 Interactive Homework to GitHub Pages

This package is ready for a static GitHub Pages site. The important rule is that `index.html` and the `assets` folder must be at the repository root.

## Replace an existing site

1. Download and unzip the package.
2. Open the extracted folder. You should immediately see `index.html`, `404.html`, `assets`, and `tests`.
3. In GitHub, open the repository that hosts the homework site.
4. On the **Code** tab, choose **Add file → Upload files**.
5. Drag the **contents of the extracted folder** into the upload area. Do not upload the outer package folder as a single nested folder.
6. Confirm that the upload includes the complete `assets` folder, especially:
   - `assets/app.js`
   - `assets/grader.js`
   - `assets/questions.js`
   - `assets/styles.css`
   - `assets/vendor/mathjax/tex-svg-full.js`
   - `assets/vendor/mathjax/LICENSE`
7. Commit the changes to the `main` branch.

## Turn on GitHub Pages

1. Open **Settings** in the repository.
2. Select **Pages** in the left sidebar.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **main** and folder **/(root)**.
5. Click **Save**.
6. Wait for GitHub to finish the deployment. The Pages screen will show the published site address.

## Test the mathematics-rendering repair

After the deployment is live, test these sessions:

- **7.5 Singular Value Decomposition** — `A = diag(3,1)` should render as mathematics, with no visible dollar signs or LaTeX commands.
- **2.1 Operations with Matrices** — dimensions such as `2 × 4` should render correctly.
- **6.6 Kronecker Product and Structured Matrices** — `\otimes` and matrix dimensions should render correctly.
- **8.5 Unitary and Hermitian Matrices** — complex/conjugate-transpose notation should render correctly.

The direct session URL uses a hash. For example, append `#session=7.5` to the published GitHub Pages URL.

## If an old cached version appears

The package includes cache-busting version tags on the CSS and JavaScript references. If a browser still shows the previous site, do a hard refresh or open the Pages URL in a private/incognito window once.

## Expected repository root

```text
index.html
404.html
.nojekyll
assets/
  app.js
  grader.js
  questions.js
  styles.css
  vendor/
    mathjax/
      tex-svg-full.js
      LICENSE
tests/
  test_question_bank.js
  test_markup_and_math.js
README.md
QUESTION_BANK_REVIEW.md
INSTRUCTOR_TESTING.md
RENDERING_AUDIT.md
DEPLOY_TO_GITHUB.md
```
