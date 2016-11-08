'use strict';
// 
// var CACHE_NAME = 'my-site-cache-v1';
// var urlsToCache = [
//     '',
//     'style/styles.css',
//     'script/script.js'
// ];
//
// self.addEventListener('install', function(event) {
//     event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache);
//       })
//   );
// });


self.addEventListener('push', function(event) {
    console.log('Received a push message', event);

    var title = 'Yay a message.';
    var body = 'We have received a push message.';
    var icon = 'img/manifest/icon-192x192.png';
    var tag = 'simple-push-demo-notification-tag';

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    console.log(event);
    event.notification.close();
    if (event.action === 'yes') {
        console.log('yes');
      } else {
        console.log('no');
      }
});
