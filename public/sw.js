// Simple service worker for caching and performance
const CACHE_NAME = "kunal-portfolio-v1";
const urlsToCache = [
  "/",
  "/projects",
  "/blogs",
  "/github",
  "/connect",
  "/logo2.jpg",
  "/kunal.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      return response || fetch(event.request);
    })
  );
});
