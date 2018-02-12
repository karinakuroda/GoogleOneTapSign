
self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('airhorner').then(function(cache) {
			console.log('install ok');
		   
			var CACHE_NAME = 'my-account-cache';
			var urlsToCache = [
			  '/',
			  '/index.html'
			];

			self.addEventListener('install', function(event) {
			  // Perform install steps
			  event.waitUntil(
				caches.open(CACHE_NAME)
				  .then(function(cache) {
					console.log('Opened cache');
					return cache.addAll(urlsToCache);
				  })
			  );
			});
	   })
 );
});