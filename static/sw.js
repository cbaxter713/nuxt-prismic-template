importScripts('/_nuxt/workbox.5c678697.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1177cb336b35f2ea134d.js",
    "revision": "10bb75716b2fa6cfe63b7445a3b69f4c"
  },
  {
    "url": "/_nuxt/252fcd876bb294956d82.js",
    "revision": "474c061a79ed021f1e332d69cddc8cc4"
  },
  {
    "url": "/_nuxt/31c8e36669fc868b60e4.js",
    "revision": "0ed8d7eb963db9fdbe2c24af3a774641"
  },
  {
    "url": "/_nuxt/4cc2807741af518f5930.js",
    "revision": "947d2f75fd846d496b97baabbebbb7dc"
  },
  {
    "url": "/_nuxt/a910adbe7874664bee75.js",
    "revision": "9e223bb242949e6bab0228881808c8b9"
  },
  {
    "url": "/_nuxt/c7b659b1252a8397b300.js",
    "revision": "b82eded6f3f330e482b6d0fab2f7a179"
  },
  {
    "url": "/_nuxt/eb9d430e4c12cf636187.js",
    "revision": "4a40f278b8bb5bd77f26027cbf2e5d76"
  },
  {
    "url": "/_nuxt/fb2450d716c1010bddb8.js",
    "revision": "9b367db45dafa196572ed6ade8a6a6d3"
  },
  {
    "url": "/_nuxt/fc758371dd1cdac0bbe4.js",
    "revision": "c748de4d436a66199d876f7e3977836a"
  }
], {
  "cacheId": "nuxt-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
