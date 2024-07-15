self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("pwa-cache").then(function(cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/welcome.html",
                "/css/style.css",
                "/js/app.js",
                "/manifest.json"
            ]);
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});