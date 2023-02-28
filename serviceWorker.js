const staticWatchBrasil = "watch-brasil-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/index.js",
  "/images/logo.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticWatchBrasil).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })