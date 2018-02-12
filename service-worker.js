importScripts('https://static.shopback.net/tags/service-worker.js?nocache=1');


importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html'
     ]);
   })
 );
});