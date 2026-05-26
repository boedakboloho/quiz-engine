/* ============================================ */
/* FILE: sw.js                                   */
/* DESKRIPSI: Service Worker - Offline Cache     */
/* SIMPAN DI: quiz-engine/                       */
/* ============================================ */

const CACHE_NAME = 'boedakboloho-v1.0.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/app.js',
  './js/furigana.js',
  './js/storage.js',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/build/kuromoji.min.js',
  'https://cdn.jsdelivr.net/npm/dexie@3.2.4/dist/dexie.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap'
];

// ========== INSTALL ==========
self.addEventListener('install', (event) => {
  console.log('⚙️ Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Caching assets...');
        return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
          console.warn('⚠️ Some assets failed to cache (may be offline):', err);
        });
      })
      .then(() => {
        console.log('✅ Service Worker: Installed');
        return self.skipWaiting();
      })
  );
});

// ========== ACTIVATE ==========
self.addEventListener('activate', (event) => {
  console.log('⚙️ Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('🗑️ Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => {
      console.log('✅ Service Worker: Activated');
      return self.clients.claim();
    })
  );
});

// ========== FETCH (Strategi: Cache First, Network Fallback) ==========
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip chrome-extension requests
  if (event.request.url.startsWith('chrome-extension://')) return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if available
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Cache successful responses
            if (response && response.status === 200 && response.type === 'basic') {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return response;
          })
          .catch((err) => {
            console.warn('⚠️ Fetch failed, returning offline page:', err);
            // Optional: return custom offline page
            // return caches.match('./offline.html');
          });
      })
  );
});

// ========== MESSAGE HANDLER ==========
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME).then(() => {
      console.log('🗑️ Cache cleared');
    });
  }
});

console.log('🚀 Service Worker: Ready');