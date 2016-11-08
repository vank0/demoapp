'use strict';

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
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();
    if (event.action === 'yes') {
        console.log('yes');
      } else {
        console.log('no');
      }
});
