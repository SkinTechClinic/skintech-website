# Building the site

The site is plain HTML, CSS and JavaScript. Every page and article has its own HTML file in Dutch
and, under `en/`, in English. Those files are generated and committed; the host only serves them.

## After changing anything in `js/`, `css/`, or `tools/template.html`

Run from the repository root:

    python3 tools/build.py        # minifies js/ and css/, stamps versions
    node tools/prerender.mjs      # writes one HTML file per page and language, sitemap.xml, llms.txt

Then commit the sources together with everything the two commands changed.

- `python3 tools/build.py --check` and `node tools/prerender.mjs --check` report what would change and write nothing.
- Do not edit `index.html`, `about.html`, `en/*.html`, `journal/*.html`, `sitemap.xml` or `llms.txt` by hand:
  they are overwritten. Page text lives in `js/data.js`, `js/pages.js` and `js/articles-content.js`;
  the page frame (head, menu frame, cookie banner) lives in `tools/template.html` and `tools/nav.html`.
- Files in `assets/` are cached by browsers for a year. Never overwrite one: add a new file name.
- In the scripts, do not start a line inside a template string with `//` and do not write `/*` inside a string:
  the minifier would remove it.

## A new journal article

1. Add the article to `ARTICLES` in `js/data.js` (id, category, date, Dutch and English title and excerpt, image).
2. Add its Dutch and English text under the same id in `js/articles-content.js`.
3. Run the two commands above. The article gets `/journal/<id>` and `/en/journal/<id>`, and both are added to the sitemap.

## Addresses

Dutch: `/`, `/about`, `/services`, `/technology`, `/results`, `/faq`, `/journal`, `/journal/<id>`, `/contact`, `/privacy`, `/terms`.
English: the same under `/en`. `vercel.json` turns on addresses without `.html`.
