Notification.requestPermission(function(result) {
  if (result === 'granted') {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification("Ново харесване в Shell", {
        body: "Вече сте на 5то място!",
        icon: '../demoapp/img/manifest/icon-192x192.png',
        tag: 'Shell Corrosion Busters',
        image: '../demoapp/img/image.jpg'
      });
    });
  }
});
