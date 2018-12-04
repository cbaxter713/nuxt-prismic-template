importScripts('/_nuxt/workbox.5c678697.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/40191e66eae0de914e7a.js",
    "revision": "761fe654a540eb27796c2b978785514f"
  },
  {
    "url": "/_nuxt/7a3ff86b659c8577bbc8.js",
    "revision": "7952bb2e55340d613de7440c13e0921e"
  },
  {
    "url": "/_nuxt/a3fdf9a21f8c3838c6f2.js",
    "revision": "0485dc0258206e8029bf23f149dc697f"
  },
  {
    "url": "/_nuxt/bb0f18609f4fcc2d6101.js",
    "revision": "53f80da76be68bab8becac77c969fa67"
  },
  {
    "url": "/_nuxt/bc70b34fe1b5ebea8299.js",
    "revision": "87d8725476b3e950314903a2d5eaa52e"
  },
  {
    "url": "/_nuxt/d58047dee91d66c76895.js",
    "revision": "effcbe7ab5692e55664ce8f49325abd6"
  },
  {
    "url": "/_nuxt/e113576f7f84738d6f34.js",
    "revision": "91a1d7b7042ce0d744810826bb35412d"
  },
  {
    "url": "/_nuxt/ff0418f9e469c33afca3.js",
    "revision": "63e1643f3926a10a6d5f0bd14a653742"
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
