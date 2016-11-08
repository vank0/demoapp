navigator.serviceWorker.register('demoapp/script/sw.js');
Notification.requestPermission(function(result) {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification('Notification with ServiceWorker');
    });
  }
});
