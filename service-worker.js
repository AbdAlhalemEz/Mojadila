const CACHE_NAME = 'quran-app-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './quran.txt',
  './manifest.json',
  './styles.css',
  './icon-192x192.png',
  './icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
