// Minimal service worker so the app can be installed. It does not cache anything:
// every load goes to the network, so you never see stale thoughts.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))
self.addEventListener('fetch', () => {})
