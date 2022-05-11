const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v2';
const files = [
    '/',
    '/src/routes/stakeholders.svelte',  
    '/src/routes/webinars.svelte',
    '/src/routes/gallery.svelte',
    '/src/routes/dreamteam.svelte',
    '/src/routes/knowledge.svelte',
    '/src/routes/media.svelte',
    '/src/routes/faq.svelte',
    '/src/routes/home.svelte',
    '/src/routes/__layout.svelte',
    
    ];

// cache size limit function
const limitCacheSize = (/** @type {string} */ name, /** @type {number} */ size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        // @ts-ignore
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  // @ts-ignore
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(files);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  // @ts-ignore
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch events
self.addEventListener('fetch', evt => {
  // @ts-ignore
  if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
    // @ts-ignore
    evt.respondWith(
      // @ts-ignore
      caches.match(evt.request).then(cacheRes => {
        // @ts-ignore
        return cacheRes || fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCacheName).then(cache => {
            // @ts-ignore
            cache.put(evt.request.url, fetchRes.clone());
            // check cached items size
            limitCacheSize(dynamicCacheName, 15);
            return fetchRes;
          })
        });
      }).catch(() => {
        // @ts-ignore
        if(evt.request.url.indexOf('.html') > -1){
          return caches.match('/pages/fallback.html');
        }
      })
    );
  }
});