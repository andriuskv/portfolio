const cacheName = "portfolio-5";
const toCache = [
  "./index.html",
  "./main.css",
  "./images/code-keep.jpg",
  "./images/code-keep-512.webp",
  "./images/code-keep-768.webp",
  "./images/code-keep-1024.webp",
  "./images/imagis.jpg",
  "./images/imagis-512.webp",
  "./images/imagis-768.webp",
  "./images/imagis-1024.webp",
  "./images/initium.jpg",
  "./images/initium-512.webp",
  "./images/initium-768.webp",
  "./images/initium-1024.webp",
  "./images/modest-read.jpg",
  "./images/modest-read-512.webp",
  "./images/modest-read-768.webp",
  "./images/modest-read-1024.webp",
  "./images/nimus-cards.jpg",
  "./images/nimus-cards-512.webp",
  "./images/nimus-cards-768.webp",
  "./images/nimus-cards-1024.webp",
  "./images/veery.jpg",
  "./images/veery-512.webp",
  "./images/veery-768.webp",
  "./images/veery-1024.webp",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(toCache))
    .then(() => self.skipWaiting())
    );
  });

  self.addEventListener("activate", event => {
    event.waitUntil(self.clients.claim());
    event.waitUntil(
      caches.keys().then(keys => {
        return Promise.all(keys.map(key => {
          if (key.startsWith("portfolio") && key !== cacheName) {
            return caches.delete(key);
          }
          return key;
        }));
      })
    );
  });

  self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request)
      .then(response => response || fetch(event.request))
    );
  });
