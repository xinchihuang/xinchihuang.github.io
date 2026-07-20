# Human-Centered Robotics REU Website

A portable static website for GitHub Pages. It uses only HTML, CSS, JavaScript, and local image files.

## Publish under `xinchihuang.github.io`

1. Create a new public repository, for example `hcr-reu`.
2. Upload **all files and folders in this package** to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, `main`, and `/(root)`.
5. The site will appear at:

   `https://xinchihuang.github.io/hcr-reu/`

Because all internal links use relative paths, the same files can later be moved to a custom domain.

## Replace carousel images

The default files are:

- `assets/images/slide-1.svg`
- `assets/images/slide-2.svg`
- `assets/images/slide-3.svg`

You can replace them with real images and either keep the same filenames, or edit the `<img src="...">` values in `index.html`.

To add another slide, copy one complete `<figure class="slide">...</figure>` block inside `.carousel-track`. The JavaScript creates the navigation dot automatically.

Recommended image ratio: **4:3**, at least **1200 × 900 px**. JPG, PNG, WebP, and SVG all work.

## Main items to edit

Open `index.html` and search for:

- `Replace this paragraph`
- `Project title to be added`
- `Name to be added`
- `reu@example.edu`
- `Application link to be added`

## Files

```text
index.html
README.md
assets/
├── styles.css
├── script.js
└── images/
    ├── slide-1.svg
    ├── slide-2.svg
    └── slide-3.svg
```
