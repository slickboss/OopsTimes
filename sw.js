

self.addEventListener('install', function(event){
    
   
    event.waitUntil(
        caches.open('oopsnews').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
				'css/style.css',
				'css/responsive.css',
        'css/finalbreak.css',
        
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=1134cc1a912042b5bf7c81eb9abbd62d',


        'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=1134cc1a912042b5bf7c81eb9abbd62d',

          'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1134cc1a912042b5bf7c81eb9abbd62d',

        'https://newsapi.org/v1/sources?country=us&apiKey=1134cc1a912042b5bf7c81eb9abbd62d',

				'https://newsapi.org/v1/sources?' +
          'country=us&' +
         'apiKey=1134cc1a912042b5bf7c81eb9abbd62d'
			
            ]);
        })


    );
});



self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});