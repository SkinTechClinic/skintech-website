const CACHE = 'skintech-v4';
const PRECACHE = ['/', '/css/styles.min.css', '/js/data.min.js', '/js/pages.min.js', '/js/app.min.js', '/assets/logo-v2.png'];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) { return c.addAll(PRECACHE); }));
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(names) {
    return Promise.all(names.filter(function(n) { return n !== CACHE; }).map(function(n) { return caches.delete(n); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request).then(function(r) {
      if (r.ok) {
        var rc = r.clone();
        caches.open(CACHE).then(function(c) { c.put(e.request, rc); });
      }
      return r;
    }).catch(function() {
      return caches.match(e.request);
    })
  );
});
