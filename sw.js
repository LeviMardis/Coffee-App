caches.delete("sw-cache");
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("sw-cache").then((cache) => {
      return cache.add("index.html", "style.css", "./scripts/main.js");
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
