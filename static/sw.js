importScripts('/_nuxt/workbox.5c678697.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1eec24b68283b4661071.js",
    "revision": "514f7e3449dfce46b80a6b64d04c4291"
  },
  {
    "url": "/_nuxt/2c9831b9070330dac837.js",
    "revision": "eabd85860f9d2ab02ce41f7c179fbb9d"
  },
  {
    "url": "/_nuxt/370c4d9d919ec1c2e279.js",
    "revision": "57c8ed8349dd07d2cf2318b0bd93a15b"
  },
  {
    "url": "/_nuxt/3f433dd7554069a48765.js",
    "revision": "205eefdcfb0bebb632dbdf549434af9a"
  },
  {
    "url": "/_nuxt/505762fac4fc60474361.js",
    "revision": "f692e6d07736dc9801283717fe7ead8d"
  },
  {
    "url": "/_nuxt/69deadaad3e7055d49d7.js",
    "revision": "59563f134b855fb13db6089cd93d8fc8"
  },
  {
    "url": "/_nuxt/9d8750959c23312b1d2a.js",
    "revision": "1078042f35d11857c385b6ba459ac6d8"
  },
  {
    "url": "/_nuxt/a9469536c1eebdd25278.js",
    "revision": "aa2720af3723be1bf2ebe6bf94427f4f"
  },
  {
    "url": "/_nuxt/b67572d02e5ff6bdc04b.js",
    "revision": "1e5ee854be838dfa8816689d501232a9"
  },
  {
    "url": "/_nuxt/d40ce58e4f6df671f65e.js",
    "revision": "bc79c36ad7457747e173f7d6c7da7705"
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
