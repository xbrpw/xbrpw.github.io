self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pwa-assets').then(cache => 
      {
        return cache.addAll([        
          './index.html',
          './w3.css',      
          './jquery.min.js',
          './Capsule-Corp.svg',
          './Ejercito-de-Cooler.svg',
          './Ejercito-Saiyan.svg',
          './Fuerza-Freezer.svg',
          './ganaste.png',
          './goku-peque-4-estrellas.png',
          './goku-peque-4-estrellas.svg',
          './image.webp',
          './favicon.svg',
          './kame.svg',
          './majin-buu.svg',
          './moro.svg',
          './Patrulla-Galáctica.svg',
          './Patrulla-Ginyu.svg',
          './Preparatoria-Estrella-Naranja.svg',
          './Wis-Paciencia.svg',
          './Zamasu.svg'   
        ])
      })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});


