/*
HTG Maps service worker
Structured source edition

SW-01  Cache identity and app shell
SW-02  Install and activation
SW-03  Fetch strategy
*/

// ============================================================================
// [SW-01] VERSIONED, ATOMIC APP SHELL
// ============================================================================
const CACHE_PREFIX = "halloween-escape-map-";
const CACHE_NAME = "halloween-escape-map-v1.3.7-automatic-updates";
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
    "./assets/icons/storm-drain.svg",
    "./assets/icons/vehicle-route.svg",
    "./assets/icons/supply.svg",
    "./assets/icons/search-source.svg",
    "./assets/icons/game/game-cellar.png",
    "./assets/icons/game/game-gate.png",
    "./assets/icons/game/game-storm-drain.png",
    "./assets/icons/game/game-car.png",
    "./assets/icons/game/item-sedan-key.png",
    "./assets/icons/game/item-gas-can.png",
    "./assets/icons/game/item-repair-kit.png",
    "./assets/icons/game/item-bolt-cutters.png",
    "./assets/icons/game/item-fuse.png",
    "./assets/app/icon-192.png",
    "./assets/app/icon-512.png",
    "./assets/app/apple-touch-icon.png",
    "./assets/app/favicon-1.0.7.png",
    "./assets/maps/east-haddonfield.jpg",
    "./assets/maps/tower-farm-paper.webp",
    "./assets/maps/tower-farm-realistic.webp",
    "./assets/maps/orange-grove-estates-paper.webp",
    "./assets/maps/orange-grove-estates-realistic.webp",
    "./assets/maps/haddonfield-town-center-paper.webp",
    "./assets/maps/haddonfield-town-center-realistic.webp",
    "./assets/maps/haddonfield-heights-paper.webp",
    "./assets/maps/haddonfield-heights-realistic.webp",
    "./assets/maps/east-haddonfield-paper.webp",
    "./assets/maps/east-haddonfield-realistic.webp",
    "./assets/maps/haddonfield-heights.jpg",
    "./assets/maps/haddonfield-town-center.jpg",
    "./assets/maps/orange-grove-estates.jpg"
];

// ============================================================================
// [SW-02] INSTALL AND ACTIVATE THE NEW VERSION WITHOUT WAITING FOR OLD TABS
// ============================================================================
self.addEventListener("install", (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        // GitHub Pages and the browser can keep old URL responses cached.
        // Fetch each complete release asset anew, then activate atomically.
        const freshAssets = APP_SHELL.map((url) => new Request(
            new URL(url, self.registration.scope),
            { cache: "reload" }
        ));
        await cache.addAll(freshAssets);
        await self.skipWaiting();
    })());
});

self.addEventListener("activate", (event) => {
    event.waitUntil((async () => {
        const cacheNames = await caches.keys();
        const previousVersion = cacheNames.some((name) =>
            name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME
        );
        await Promise.all(cacheNames
            .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
            .map((name) => caches.delete(name)));

        await self.clients.claim();
        if (previousVersion) {
            // Even a page that still runs the old app.js gets a fresh load.
            // No redirect on first installation or an offline restart.
            const windows = await self.clients.matchAll({
                type: "window", includeUncontrolled: true
            });
            await Promise.all(windows.map(async (client) => {
                try {
                    if (client.url.startsWith(self.registration.scope) &&
                        typeof client.navigate === "function") {
                        await client.navigate(client.url);
                    }
                } catch (error) {
                    // The user can still refresh manually if a browser blocks navigation.
                }
            }));
        }
    })());
});

// ============================================================================
// [SW-03] NETWORK-FIRST APP CODE, CACHE-FIRST RELEASE IMAGES
// ============================================================================
self.addEventListener("fetch", (event) => {
    const request = event.request;
    if (request.method !== "GET") return;

    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;
    const isNavigation = request.mode === "navigate";
    const isAppCode = /\.(?:js|css|json|webmanifest|html)$/i.test(url.pathname);

    if (isNavigation || isAppCode) {
        // Revalidate the app's code and data even during an ordinary reload.
        // Retain fully offline operation if the request cannot reach GitHub.
        event.respondWith((async () => {
            const cache = await caches.open(CACHE_NAME);
            try {
                const fresh = await fetch(request, { cache: "no-cache" });
                if (fresh && fresh.ok && fresh.type !== "opaque") {
                    await cache.put(request, fresh.clone());
                }
                if (fresh && fresh.ok) return fresh;
                const fallback = await caches.match(request);
                return fallback || fresh;
            } catch (error) {
                return await caches.match(request) ||
                    (isNavigation ? await caches.match("./index.html") :
                    Response.error());
            }
        })());
        return;
    }

    // Map artwork and icons are complete, versioned assets precached on install.
    // Avoid downloading ~17 MB again during each routine map visit.
    event.respondWith((async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response && response.ok && response.type !== "opaque") {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response.clone());
        }
        return response;
    })());
});
