#!/usr/bin/env node
/* SkinTech Laser Clinic: one HTML file per page and language.

   Run from the repository root, after the scripts and styles have been minified:
     node tools/prerender.mjs            writes the pages into the repository
     node tools/prerender.mjs --check    reports what would change, writes nothing

   How it works: the site's own render functions (js/data.js, js/pages.js, js/articles-content.js)
   run here outside a browser. Each result is wrapped in tools/template.html, with its own title,
   description, canonical address, language links and structured data.
   Dutch pages: /, /about, /journal/<id> ...   English pages: /en, /en/about, /en/journal/<id> ...
   Prices, legal text and claims come from the same sources as before; nothing is written here. */
import vm from 'node:vm';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const CHECK = process.argv.includes('--check');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

/* ---------- the site's scripts, outside a browser ---------- */
const ctx = {
  console, setTimeout, clearTimeout,
  localStorage: { getItem: () => null, setItem: () => {} },
  navigator: { userAgent: 'prerender' },
  history: { pushState() {}, replaceState() {} },
  location: { pathname: '/', search: '', hash: '' },
  document: {
    getElementById: () => null, querySelector: () => null, querySelectorAll: () => [],
    createElement: () => ({ style: {}, setAttribute() {}, appendChild() {} }),
    addEventListener() {}, documentElement: { style: { setProperty() {} } }, body: { style: { setProperty() {} } }, head: { appendChild() {} },
  },
  addEventListener() {}, scrollTo() {},
};
ctx.window = ctx; ctx.self = ctx; ctx.globalThis = ctx;
vm.createContext(ctx);
const run = (code, name) => vm.runInContext(code, ctx, { filename: name || 'prerender' });
for (const f of ['js/data.js', 'js/articles-content.js', 'js/pages.js']) run(read(f), f);
run('_articlesLoaded = true;');

const ORIGIN = run('SITE_ORIGIN');
const ROUTES = { home: 'renderHome', about: 'renderAbout', services: 'renderServices', technology: 'renderTechnology', results: 'renderResults', faq: 'renderFaq', journal: 'renderJournal', contact: 'renderContact', privacy: 'renderPrivacy', terms: 'renderTerms' };
const ARTICLES = JSON.parse(run('JSON.stringify(ARTICLES)'));
const LANGS = ['nl', 'en'];

/* ---------- small helpers ---------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const text = html => String(html).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const cut = (s, max = 158) => { if (s.length <= max) return s; const c = s.slice(0, max - 1); return c.slice(0, c.lastIndexOf(' ')).replace(/[\s,;:.—–-]+$/, '') + '…'; };
const q = v => v === null || v === undefined ? 'null' : JSON.stringify(v);
const pathFor = (route, lang, article) => run(`pathFor(${q(route)}, ${q(lang)}, ${q(article)})`);
const titleFor = (route, lang, article) => run(`pageTitle(${q(route)}, ${q(lang)}, ${q(article)})`);
/* the short name of a page: the part of its title before the clinic name ("Journal: articles on ..." -> "Journal") */
const nameFor = (route, lang) => route === 'home' ? 'SkinTech Laser Clinic Amsterdam' : titleFor(route, lang).split(/ \| |: /)[0];
const t = (key, lang) => run(`currentLang=${q(lang)}; t(${q(key)})`);
const fileFor = (route, lang, article) => {
  const base = lang === 'en' ? 'en/' : '';
  if (article) return `${base}journal/${article}.html`;
  if (route === 'home') return `${base}index.html`;
  return `${base}${route}.html`;
};
const jsonld = obj => `<script type="application/ld+json">\n${JSON.stringify(obj, null, 2)}\n</script>`;

const HOME_DESC = {
  nl: 'SkinTech Laser Clinic Amsterdam — Premium laserontharing, huidverbetering en gezichtsbehandelingen. Opening in het tweede kwartaal van 2027.',
  en: 'SkinTech Laser Clinic Amsterdam — premium laser hair removal, skin improvement and facials. Opening in the second quarter of 2027.',
};
const FALLBACK_DESC = {
  privacy: { nl: 'Privacybeleid van SkinTech Laser Clinic, Amsterdam.', en: 'Privacy policy of SkinTech Laser Clinic, Amsterdam.' },
  terms: { nl: 'Algemene voorwaarden van SkinTech Laser Clinic, Amsterdam.', en: 'Terms and conditions of SkinTech Laser Clinic, Amsterdam.' },
};
const CHROME = {
  nl: { skip: 'Ga naar inhoud', nav: 'Hoofdnavigatie', menu: 'Menu openen', cookieLabel: 'Cookie-instellingen', accept: 'Accepteren', decline: 'Weigeren',
        choose: 'Zelf kiezen', stats: 'Statistieken (Google Analytics)', ads: 'Advertenties (Meta Pixel)',
        cookie: p => `Wij gebruiken cookies voor statistieken (Google Analytics) en advertenties (Meta Pixel), alleen met jouw toestemming. Lees meer in ons <a href="${p}" data-route="privacy" style="color:inherit; text-decoration:underline;">privacybeleid</a>.` },
  en: { skip: 'Skip to content', nav: 'Main navigation', menu: 'Open menu', cookieLabel: 'Cookie settings', accept: 'Accept', decline: 'Decline',
        choose: 'Let me choose', stats: 'Statistics (Google Analytics)', ads: 'Advertising (Meta Pixel)',
        cookie: p => `We use cookies for statistics (Google Analytics) and advertising (Meta Pixel), only with your consent. Read more in our <a href="${p}" data-route="privacy" style="color:inherit; text-decoration:underline;">privacy policy</a>.` },
};

/* ---------- versions of the minified files, so a release shows at once ---------- */
const ASSETS = ['css/styles.min.css', 'js/data.min.js', 'js/pages.min.js', 'js/app.min.js'];
const versions = Object.fromEntries(ASSETS.map(f => [f, crypto.createHash('sha256').update(fs.readFileSync(path.join(ROOT, f))).digest('hex').slice(0, 8)]));
const stamp = html => ASSETS.reduce((h, f) => {
  const re = new RegExp(f.replace(/[.]/g, '\\.') + '(\\?v=[0-9a-f]{8})?(?=["\'])', 'g');
  if (!re.test(h)) throw new Error('reference missing in template: ' + f);
  return h.replace(re, f + '?v=' + versions[f]);
}, html);

/* ---------- menu ---------- */
const NAV_SOURCE = read('tools/nav.html').trim();
function nav(route, lang, article) {
  const labels = { home: t('navHome', lang), about: t('navAbout', lang), services: t('navServices', lang), technology: t('navTech', lang), faq: 'FAQ', journal: 'Journal', contact: 'Contact' };
  let h = NAV_SOURCE;
  h = h.replace(' class="active"', '');
  h = h.replace(/<a href="#" class="logo" data-route="home">/, `<a href="${pathFor('home', lang)}" class="logo" data-route="home">`);
  h = h.replace(/<a href="#" data-route="([a-z]+)"([^>]*)>[^<]*<\/a>/g, (m, r, rest) => `<a href="${pathFor(r, lang)}" data-route="${r}"${r === route ? ' class="active"' : ''}${rest}>${esc(labels[r])}</a>`);
  h = h.replace(/(id="nl-m-book">)[^<]*/, `$1${esc(t('navBook', lang))}`).replace(/(id="nl-m-scan">)[^<]*/, `$1${esc(t('navScan', lang))}`);
  h = h.replace(/(id="nl-scan">)[^<]*/, `$1${esc(t('navScan', lang))}`).replace(/(id="nl-book">)[^<]*/, `$1${esc(t('navBook', lang))}`);
  h = h.replace('aria-label="Hoofdnavigatie"', `aria-label="${CHROME[lang].nav}"`).replace('aria-label="Menu openen"', `aria-label="${CHROME[lang].menu}"`);
  h = h.replace(/<a href="#" data-lang="([a-z]+)"/g, (m, l) => `<a href="${pathFor(route, l, article)}" data-lang="${l}"${l === lang ? ' class="active" aria-current="true"' : ''}`);
  const dark = !article && (route === 'home' || route === 'results');
  if (!dark) h = h.replace('class="site on-dark"', 'class="site"');
  if (/href="#" data-route/.test(h)) throw new Error('menu link without address');
  return h;
}

/* ---------- one page ---------- */
const LOCAL_BUSINESS = read('tools/jsonld-localbusiness.json').trim();
/* The privacy policy and the terms name the company's registered office, as the law asks. They stay readable for visitors
   but are kept out of search results and out of the sitemap, so that address is not taken for the clinic's location. */
const NOINDEX = ['privacy', 'terms'];
const ROBOTS_INDEX = '<meta name="robots" content="index, follow">';
const OG_ALT = { nl: 'SkinTech Laser Clinic: premium laser- en huidbehandelingen in Amsterdam', en: 'SkinTech Laser Clinic: premium laser and skin treatments in Amsterdam' };
function page(route, lang, article) {
  run(`currentLang=${q(lang)}; currentRoute=${q(route)}; currentArticle=${q(article)};`);
  const body = article ? run(`outlineHeadings(renderArticle(${q(article)}))`) : run(`outlineHeadings(${ROUTES[route]}())`);
  const footer = run('outlineHeadings(renderFooter(), 1)');
  if (!body) throw new Error(`empty page: ${route} ${lang} ${article || ''}`);
  const a = article ? ARTICLES.find(x => x.id === article) : null;
  const url = ORIGIN + pathFor(route, lang, article);
  const title = titleFor(route, lang, article);
  let desc;
  if (a) desc = cut(text(lang === 'nl' ? a.excerptNl : a.excerptEn));
  else if (route === 'home') desc = HOME_DESC[lang];
  else {
    const lede = body.match(/<p class="lede"[^>]*>([\s\S]*?)<\/p>/);
    desc = lede ? cut(text(lede[1])) : (FALLBACK_DESC[route] ? FALLBACK_DESC[route][lang] : HOME_DESC[lang]);
  }
  const image = a && a.img ? ORIGIN + a.img : ORIGIN + `/assets/og-image-${lang}-v2.jpg`;
  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}">`,
    `<link rel="canonical" href="${url}">`,
    ...LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${ORIGIN + pathFor(route, l, article)}">`),
    `<link rel="alternate" hreflang="x-default" href="${ORIGIN + pathFor(route, 'nl', article)}">`,
    `<meta property="og:type" content="${a ? 'article' : 'website'}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:site_name" content="SkinTech Laser Clinic">`,
    `<meta property="og:image" content="${image}">`,
    ...(a && a.img ? [] : [`<meta property="og:image:width" content="1200">`, `<meta property="og:image:height" content="630">`,
      `<meta property="og:image:alt" content="${esc(OG_ALT[lang])}">`]),
    `<meta property="og:locale" content="${lang === 'nl' ? 'nl_NL' : 'en_GB'}">`,
    `<meta property="og:locale:alternate" content="${lang === 'nl' ? 'en_GB' : 'nl_NL'}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  ].join('\n');

  /* structured data: only what the page itself shows */
  const ld = [];
  if (route === 'home') ld.push(`<script type="application/ld+json">\n${LOCAL_BUSINESS}\n</script>`);
  if (route === 'faq') {
    const faqs = JSON.parse(run(`JSON.stringify(${lang === 'nl' ? 'FAQS' : 'FAQS_EN'})`));
    ld.push(jsonld({ '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang,
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: text(f.q), acceptedAnswer: { '@type': 'Answer', text: text(f.a) } })) }));
  }
  if (a) {
    ld.push(jsonld({ '@context': 'https://schema.org', '@type': 'Article', headline: lang === 'nl' ? a.titleNl : a.titleEn, description: desc,
      datePublished: a.date, dateModified: a.updated || a.date, inLanguage: lang, image, mainEntityOfPage: url,
      author: { '@type': 'Organization', name: 'SkinTech Laser Clinic', url: ORIGIN + '/' },
      publisher: { '@type': 'Organization', name: 'SkinTech Laser Clinic', logo: { '@type': 'ImageObject', url: ORIGIN + '/assets/logo.png' } } }));
  }
  if (route !== 'home') {
    const crumbs = [{ name: 'Home', item: ORIGIN + pathFor('home', lang) }, { name: text(nameFor(route, lang)), item: ORIGIN + pathFor(route, lang) }];
    if (a) crumbs.push({ name: lang === 'nl' ? a.titleNl : a.titleEn, item: url });
    ld.push(jsonld({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })) }));
  }

  const main = `<main id="app" role="main" tabindex="-1" data-page="${route}" data-page-lang="${lang}"${article ? ` data-page-article="${article}"` : ''}><div class="page-enter">${body}</div><footer class="site">${footer}</footer></main>`;
  const c = CHROME[lang];
  let html = TEMPLATE
    .replace('{{LANG}}', lang).replace('{{HEAD_META}}', () => head).replace('{{JSONLD}}', () => ld.join('\n'))
    .replace('{{NAV}}', () => nav(route, lang, article)).replace('{{MAIN}}', () => main)
    .replace('{{SKIP}}', c.skip).replace('{{COOKIE_LABEL}}', c.cookieLabel).replace('{{COOKIE_TEXT}}', () => c.cookie(pathFor('privacy', lang)))
    .replace('{{COOKIE_ACCEPT}}', c.accept).replace('{{COOKIE_DECLINE}}', c.decline)
    .replace('{{COOKIE_CHOOSE}}', c.choose).replace('{{COOKIE_STATS}}', c.stats).replace('{{COOKIE_ADS}}', c.ads);
  if (/\{\{[A-Z_]+\}\}/.test(html)) throw new Error('unfilled placeholder in ' + fileFor(route, lang, article));
  const noindex = NOINDEX.includes(route) && !article;
  if (noindex) {
    if (!html.includes(ROBOTS_INDEX)) throw new Error('robots tag not found in ' + fileFor(route, lang, article));
    html = html.replace(ROBOTS_INDEX, '<meta name="robots" content="noindex, follow">');
  }
  const name = a ? (lang === 'nl' ? a.titleNl : a.titleEn) : nameFor(route, lang);
  return { file: fileFor(route, lang, article), html: stamp(html), url, title, name, desc, route, lang, article, noindex };
}

/* ---------- all pages ---------- */
const TEMPLATE = read('tools/template.html');
const pages = [];
for (const lang of LANGS) {
  for (const route of Object.keys(ROUTES)) pages.push(page(route, lang, null));
  for (const a of ARTICLES) pages.push(page('journal', lang, a.id));
}
/* ---------- every title must fit in a search result and be the only one of its kind ---------- */
const TITLE_MAX = Number(run('TITLE_MAX'));
const wide = pages.map(p => ({ p, w: Math.round(Number(run(`titleWidth(${q(p.title)})`))) })).filter(x => x.w > TITLE_MAX);
if (wide.length) throw new Error('title too wide (limit ' + TITLE_MAX + ' px): give the article a shorter seoNl / seoEn in js/data.js\n' + wide.map(x => `  ${x.w} px  ${x.p.file}  ${x.p.title}`).join('\n'));
const seenTitles = new Map();
for (const p of pages) { if (seenTitles.has(p.title)) throw new Error(`same title on two pages: ${seenTitles.get(p.title)} and ${p.file}: ${p.title}`); seenTitles.set(p.title, p.file); }
let changed = 0;
for (const p of pages) {
  const dest = path.join(ROOT, p.file);
  const old = fs.existsSync(dest) ? fs.readFileSync(dest, 'utf8') : null;
  if (old !== p.html) {
    changed++;
    if (!CHECK) { fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.writeFileSync(dest, p.html); }
  }
  console.log(`${old === p.html ? 'same   ' : (CHECK ? 'CHANGE ' : 'written')} ${p.file.padEnd(46)} ${String(Buffer.byteLength(p.html)).padStart(7)} bytes  ${p.title.slice(0, 60)}`);
}
console.log(`${pages.length} pages, ${changed} ${CHECK ? 'would change' : 'written'}`);
fs.writeFileSync(path.join(ROOT, 'tools/pages.json'), JSON.stringify(pages.map(({ file, url, title, name, desc, route, lang, article }) => ({ file, url, title, name, desc, route, lang, article })), null, 1) + '\n');

/* ---------- sitemap: every address in both languages, with the date its content last changed ---------- */
const today = process.env.BUILD_DATE || new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Amsterdam' }).format(new Date());
const LASTMOD_FILE = path.join(ROOT, 'tools/lastmod.json');
const lastmod = fs.existsSync(LASTMOD_FILE) ? JSON.parse(fs.readFileSync(LASTMOD_FILE, 'utf8')) : {};
for (const p of pages) {
  const content = p.html.replace(/\?v=[0-9a-f]{8}/g, '');
  const hash = crypto.createHash('sha256').update(content).digest('hex').slice(0, 16);
  if (!lastmod[p.file] || lastmod[p.file].hash !== hash) lastmod[p.file] = { hash, date: today };
}
for (const f of Object.keys(lastmod)) if (!pages.some(p => p.file === f)) delete lastmod[f];
const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...pages.filter(p => !p.noindex).map(p => ['  <url>', `    <loc>${p.url}</loc>`, `    <lastmod>${lastmod[p.file].date}</lastmod>`,
    ...LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${ORIGIN + pathFor(p.route, l, p.article)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN + pathFor(p.route, 'nl', p.article)}"/>`, '  </url>'].join('\n')),
  '</urlset>', ''].join('\n');

/* ---------- llms.txt: a short guide to the site for AI assistants ---------- */
const en = pages.filter(p => p.lang === 'en'), nlp = pages.filter(p => p.lang === 'nl');
const line = p => `- [${p.name}](${p.url}): ${p.desc}`;
const llms = [
  '# SkinTech Laser Clinic',
  '',
  '> Laser and skin clinic in Amsterdam, the Netherlands. The clinic is in preparation and has not opened yet. The opening is planned for the second quarter of 2027. Appointments cannot be booked yet; visitors can join the waiting list on the website.',
  '',
  'Planned treatments: laser hair removal with the Candela GentleMax Pro Plus, Deep Cleansing Facial, Glacē Glow Facial, and a free skin scan and consultation with the Sylton Observ 520x. Prices are listed on the treatments page and are indications until the free skin scan.',
  'The site is in Dutch (default) and English (addresses under /en). Contact: info@skintechclinic.nl',
  '',
  '## Pages (English)',
  ...en.filter(p => !p.article && !['privacy', 'terms'].includes(p.route)).map(line),
  '',
  '## Journal (English)',
  ...en.filter(p => p.article).map(line),
  '',
  "## Pagina's (Nederlands)",
  ...nlp.filter(p => !p.article && !['privacy', 'terms'].includes(p.route)).map(line),
  '',
  '## Journal (Nederlands)',
  ...nlp.filter(p => p.article).map(line),
  '',
  '## Legal',
  ...pages.filter(p => ['privacy', 'terms'].includes(p.route)).map(line),
  '',
].join('\n');
for (const [file, body] of [['sitemap.xml', sitemap], ['llms.txt', llms]]) {
  const dest = path.join(ROOT, file); const old = fs.existsSync(dest) ? fs.readFileSync(dest, 'utf8') : null;
  if (old !== body && !CHECK) fs.writeFileSync(dest, body);
  console.log(`${old === body ? 'same   ' : (CHECK ? 'CHANGE ' : 'written')} ${file}`);
}
if (!CHECK) fs.writeFileSync(LASTMOD_FILE, JSON.stringify(lastmod, null, 1) + '\n');
