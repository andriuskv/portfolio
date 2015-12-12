"use strict";

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("images1").then(function(cache) {
            return cache.addAll([
                "images/about.540.jpg",
                "images/about.1024.jpg",
                "images/about.jpg",
                "images/header.360.jpg",
                "images/header.540.jpg",
                "images/header.768.jpg",
                "images/header.1024.jpg",
                "images/header.jpg",
                "images/work/work1.jpg",
                "images/work/work1.500.jpg",
                "images/work/work1.800.jpg",
                "images/work/work2.768.jpg",
                "images/work/work2.jpg",
                "images/work/work3.500.jpg",
                "images/work/work3.800.jpg",
                "images/work/work3.jpg"
            ]);
        })
    );
});

self.addEventListener("fetch", function(event) {
    var request = event.request;
    
    if (request.method !== "GET") {
        event.respondWith(fetch(request));
        return;
    }
    
    event.respondWith(
        caches.match(request).then(function(response) {
            return response || fetch(request);
        })
    );
});
