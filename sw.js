/*
HTG Maps service worker
Structured source edition

SW-01  Cache identity and app shell
SW-02  Install and activation
SW-03  Fetch strategy
*/

// ============================================================================
// [SW-01] CACHE IDENTITY + APP SHELL
// ============================================================================
const CACHE_NAME = "halloween-escape-map-v1.0.20";
const APP_SHELL = [
    "./",
    "./index.html",
    "./styles.css",
    "./app.js",
    "./app-config.js",
    "./data/maps.js",
    "./data/wiki.js",
    "./wiki.js",
    "./manifest.webmanifest",
    "./core/p8riot-core.css",
    "./core/p8riot-core.js",
    "./core/modules/p8riot-storage.js",
    "./core/modules/p8riot-dialog.css",
    "./core/modules/p8riot-dialog.js",
    "./core/modules/p8riot-pwa.js",
    "./assets/icons/escape-door.svg",
    "./assets/icons/car.svg",
    "./assets/app/icon-192.png",
    "./assets/app/icon-512.png",
    "./assets/app/apple-touch-icon.png",
    "./assets/app/favicon-1.0.7.png",
    "./assets/maps/east-haddonfield.jpg",
    "./assets/maps/haddonfield-heights.jpg",
    "./assets/maps/haddonfield-town-center.jpg",
    "./assets/maps/orange-grove-estates.jpg"
];

// ============================================================================
// [SW-02] INSTALL + ACTIVATION
// ============================================================================
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys
                    .filter((key) => key.startsWith("halloween-escape-map-") && key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

// ============================================================================
// [SW-03] FETCH STRATEGY
// ============================================================================
self.addEventListener("fetch", (event) => {
    const request = event.request;
    if (request.method !== "GET") return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    const copy = response.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                    return response;
                })
                .catch(() =>
                    caches.match(request).then((cached) => cached || caches.match("./index.html"))
                )
        );
        return;
    }

    event.respondWith(
        caches.match(request).then((cached) => {
            if (cached) return cached;
            return fetch(request).then((response) => {
                if (!response || response.status !== 200 || response.type === "opaque") {
                    return response;
                }
                const copy = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
                return response;
            });
        })
    );
});
