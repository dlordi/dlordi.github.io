
self.addEventListener('install', function (event) {
  console.log('sw.js installed');
  event.waitUntil(
    caches.open('static')
    .then(function (cache) {
      cache.addAll([
        '/',
        '/index.html',
        '/favicon.ico',
        '/index.js',
        '/app-icon-144x144.png'
      ]);
    })
  );
});

self.addEventListener('activate', function () {
  console.log('sw.js activated');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (res) {
        if (res) {
          // restituisce il contenuto dalla cache
          return res;
        } else {
          // restituisce una promise che esegue un download da rete
          return fetch(event.request);
        }
      })
  );
});
