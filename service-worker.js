self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("color-app").then(cache => {
      return cache.addAll(["/", "/index.html", "/manifest.json", "/icon.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});