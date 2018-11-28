importScripts('/_nuxt/workbox.5c678697.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/21fa9ebb93924f49726f.js",
    "revision": "b2ece6dcff806c55e8a9c34ff50f4d8e"
  },
  {
    "url": "/_nuxt/37104a348d5abd5c55aa.js",
    "revision": "5813f97ccfe56d23898d1e05dbab1e1b"
  },
  {
    "url": "/_nuxt/37a15df1561f23091eb7.js",
    "revision": "1dd2e7ebfe55d4f88853fb598d976d37"
  },
  {
    "url": "/_nuxt/3870f053f274180bc001.js",
    "revision": "ea98d332cc9ce30f7e1265604821760f"
  },
  {
    "url": "/_nuxt/3b267a884fbd36d37226.js",
    "revision": "4c59053a48b256704264f2c48fbd8d8a"
  },
  {
    "url": "/_nuxt/3b8f49b856847f72b7de.js",
    "revision": "30f0288dbbb079e74723c64f95dee13e"
  },
  {
    "url": "/_nuxt/6abfa49cbb329aac7fad.js",
    "revision": "87f723d02f07180ad586724dd5e2522b"
  },
  {
    "url": "/_nuxt/b013a7d0e97ea64aa21c.js",
    "revision": "399f27f2765caa9f29f2efa7e04830fc"
  },
  {
    "url": "/_nuxt/d478d0504a7eb9f7d531.js",
    "revision": "c9a09ed468c1b7da222f58aee8b91b05"
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
