#!/usr/bin/env python3
"""Rebuild the .min files the live site loads. Run from the repository root:

    python3 build.py            minify, then stamp the version of each file into the references to it
    python3 build.py --check    report what would change, write nothing

The minify step is the one from the handoff brief, unchanged. It is deliberately conservative: it only
removes comments, indentation and blank lines, and keeps every line break and every space inside a line,
because the code relies on both.

The stamp step (added 21 Nov 2026) appends ?v=<first 8 hex of the file's sha256> to the references in
index.html and to the lazy loader in js/data.js. Browsers keep /js and /css for 24 hours (vercel.json),
while index.html is checked on every visit. With the stamp a changed file gets a new address, so a release
is visible at once instead of up to a day later. If someone builds without this step the stamps simply stay
as they are and the site behaves as it did before (changes visible within a day).
"""
import hashlib
import re
import sys

CHECK = '--check' in sys.argv


def minify_js(code):
    code = re.sub(r'/\*[\s\S]*?\*/', '', code)                      # block comments
    code = re.sub(r'^\s*//[^\n]*$', '', code, flags=re.MULTILINE)   # whole-line // comments only
    return '\n'.join(l.strip() for l in code.split('\n') if l.strip())


def minify_css(code):
    code = re.sub(r'/\*[\s\S]*?\*/', '', code)
    code = re.sub(r'\s+', ' ', code)
    for ch in ['{', '}', ';', ':', ',']:
        code = re.sub(r'\s*' + re.escape(ch) + r'\s*', ch, code)
    return code.strip()


def read(path):
    with open(path, encoding='utf-8') as f:
        return f.read()


def write(path, text):
    old = None
    try:
        old = read(path)
    except FileNotFoundError:
        pass
    changed = old != text
    if changed and not CHECK:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(text)
    print('%-34s %7d bytes  %s' % (path, len(text.encode('utf-8')), 'CHANGED' if changed else 'same'))
    return text


def version(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()[:8]


def stamp(text, ref, ver, expect):
    """Set ?v=<ver> on every reference to <ref> in <text>. <expect> is how many references there must be."""
    pattern = re.compile(re.escape(ref) + r'(\?v=[0-9a-f]{8})?(?=["\'])')
    found = pattern.findall(text)
    if len(found) != expect:
        sys.exit('STOP: expected %d reference(s) to %s, found %d' % (expect, ref, len(found)))
    return pattern.sub(ref + '?v=' + ver, text)


# 1. the article texts, loaded on demand by js/data.js
articles = write('js/articles-content.min.js', minify_js(read('js/articles-content.js')))

# 2. js/data.js carries the address of the article file
data_src = stamp(read('js/data.js'), 'js/articles-content.min.js', version(articles), 1)
write('js/data.js', data_src)
built = {
    'js/data.min.js': write('js/data.min.js', minify_js(data_src)),
    'js/pages.min.js': write('js/pages.min.js', minify_js(read('js/pages.js'))),
    'js/app.min.js': write('js/app.min.js', minify_js(read('js/app.js'))),
    'css/styles.min.css': write('css/styles.min.css', minify_css(read('css/styles.css'))),
}

# 3. index.html carries the addresses of the other four
html = read('index.html')
for ref, text in built.items():
    html = stamp(html, ref, version(text), 1)
write('index.html', html)
