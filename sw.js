/**
 * NURSPHERE - Service Worker for Offline PWA Capabilities
 * Caches application assets for offline studying in provincial/hospital settings.
 */

const CACHE_VERSION = 'v4';
const CACHE_NAME = `nursphere-pnle-${CACHE_VERSION}`;
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/nursphere-icon-clean.png',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './css/style.css',
  './css/components.css',
  './js/data/pnle_questions.js',
  './js/data/case_studies.js',
  './js/data/flashcards_data.js',
  './js/data/roadmap_data.js',
  './js/data/clinical_pearls.js',
  './js/audio.js',
  './js/state.js',
  './js/app.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        const acceptHeader = event.request.headers.get('accept');
        if (acceptHeader && acceptHeader.includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
