const CACHE_NAME = 'mata-tour-cache-v1';
const BASE_PATH = '/AsiaTrip25';
const urlsToCache = [
  // HTML files
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/seoul.html`,
  `${BASE_PATH}/tokyo.html`,
  `${BASE_PATH}/kyoto.html`,
  `${BASE_PATH}/singapore.html`,
  `${BASE_PATH}/kl.html`,
  `${BASE_PATH}/maldives.html`,
  `${BASE_PATH}/packing.html`,
  `${BASE_PATH}/health.html`,
  `${BASE_PATH}/connectivity.html`,
  `${BASE_PATH}/money.html`,
  
  // CSS files
  'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
  
  // JavaScript files
  
  // Images
  `${BASE_PATH}/logowide.png`,
  `${BASE_PATH}/icon2.png`,
  `${BASE_PATH}/icons/icon-192x192.png`,
  `${BASE_PATH}/icons/icon-512x512.png`,
  
  // Manifest
  `${BASE_PATH}/manifest.json`
];

// Install service worker
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate and clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Serve from cache, falling back to network
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(() => {
            // If offline and requesting an HTML page, show index.html
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match(`${BASE_PATH}/index.html`);
            }
          });
      })
  );
});