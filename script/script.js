console.log('permission granted!');
Notification.requestPermission(function(result) {
    if (result === 'granted') {
        console.log('permission granted!');
        navigator.serviceWorker.ready.then(function(registration) {
            console.log('ServiceWorker registration successful with scope:', registration.scope);
            registration.showNotification("Ново харесване в Shell", {
                body: "Вече сте на 5то място!",
                icon: '../demoapp/img/manifest/icon-192x192.png',
                vibration: [125, 75, 125, 275, 200, 275, 125, 75, 125, 275, 200, 600, 200, 600],
                tag: 'Shell Corrosion Busters',
                image: '../demoapp/img/image.jpg',
                actions: [{
                    "action": "yes",
                    "title": "Към сайта"
                }, {
                    "action": "no",
                    "title": "Към бензиностанцията"
                }]
            });
        });
    }
});
