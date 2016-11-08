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
    if (event.action === 'yes') {
        window.open("http://shell.com");
    } else if (event.action === 'no') {
        window.open("http://maps.google.com");
    }
    event.notification.close();
});
