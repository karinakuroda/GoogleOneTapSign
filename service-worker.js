var CACHE_NAME = 'my-account-cache';
var urlsToCache = [
  '/',
  '/index.html'
];
			
self.addEventListener('install', function(e) {
	// Perform install steps
	e.waitUntil(
	caches.open(CACHE_NAME)
	  .then(function(cache) {
		console.log('Opened cache');
		return cache.addAll(urlsToCache);
	  })
	);
});