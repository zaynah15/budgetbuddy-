// Spendora Service Worker v4
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// FCM init — ready for when you set up Cloud Functions
try {
  firebase.initializeApp({
    apiKey: "AIzaSyAyIwTNZB0mYWYPViDiHhYQsrc-DTyWmrk",
    authDomain: "budgetbuddy-4168c.firebaseapp.com",
    projectId: "budgetbuddy-4168c",
    storageBucket: "budgetbuddy-4168c.firebasestorage.app",
    messagingSenderId: "943210794388",
    appId: "1:943210794388:web:88940dc98f36240ec7d381",
  });
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(
      payload.notification?.title || 'Spendora 💸',
      {
        body: payload.notification?.body || 'Time to log your expenses!',
        icon: './logo.png',
        badge: './logo.png',
        vibrate: [200, 100, 200],
        tag: 'spending-reminder',
        data: { url: 'https://zaynah15.github.io/budgetbuddy/' },
      }
    );
  });
} catch(e) {}

const CACHE_NAME = 'spendora-v4';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
      .catch(err => console.error('[SW] Install failed:', err))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;
  if (
    event.request.url.includes('firestore.googleapis.com') ||
    event.request.url.includes('firebase.googleapis.com') ||
    event.request.url.includes('identitytoolkit')
  ) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type === 'opaque') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') return caches.match('./index.html');
      });
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = event.notification.data?.url || 'https://zaynah15.github.io/budgetbuddy/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      for (const client of clientList) {
        if (client.url.includes('budgetbuddy') && 'focus' in client) {
          client.postMessage({ type: 'OPEN_QUICK_LOG' });
          return client.focus();
        }
      }
      return clients.openWindow(url);
    })
  );
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'Spendora 💸', {
      body: data.body || 'Time to log your expenses!',
      icon: './logo.png',
      badge: './logo.png',
      vibrate: [200, 100, 200],
      tag: 'spending-reminder',
      requireInteraction: false,
      data: { url: 'https://zaynah15.github.io/budgetbuddy/' },
    })
  );
});
