const cacheName = "portfolio-1";
const toCache = [
    "./index.html",
    "./main.css",
    "./main.js",
    "./images/editor.l.jpg",
    "./images/editor.m.jpg",
    "./images/editor.s.jpg",
    "./images/initium.512.jpg",
    "./images/initium.768.jpg",
    "./images/initium.1024.jpg",
    "./images/initium.jpg",
    "./images/nimus-cards.512.jpg",
    "./images/nimus-cards.768.jpg",
    "./images/nimus-cards.1024.jpg",
    "./images/nimus-cards.jpg",
    "./images/veery.512.jpg",
    "./images/veery.768.jpg",
    "./images/veery.1024.jpg",
    "./images/veery.jpg",
    "./images/vocem.500.jpg",
    "./images/vocem.800.jpg",
    "./images/vocem.1000.jpg"
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
            .catch(() => caches.match("index.html"))
    );
});
