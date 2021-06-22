/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5ce2d21ed7af21b36ccd2c37a6dd133a"
  },
  {
    "url": "assets/css/0.styles.ad546295.css",
    "revision": "dea49c75d1364e2c7014a34ee81d9ae1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a7bd56d9.js",
    "revision": "b07ba74fac23ca175e4c3ea8dad6324a"
  },
  {
    "url": "assets/js/2.2468f8e6.js",
    "revision": "e769e8781d784b74a0ae93cd3e89933f"
  },
  {
    "url": "assets/js/3.b8ac1aa6.js",
    "revision": "c262ddd6ac5d4ce46aae53b54eb475c3"
  },
  {
    "url": "assets/js/4.5a683c9c.js",
    "revision": "2124aa333e2654b3f2e4eb5d4baac43c"
  },
  {
    "url": "assets/js/5.bd3a9679.js",
    "revision": "af564882323e8abde759f96e1b91987b"
  },
  {
    "url": "assets/js/6.472eef36.js",
    "revision": "82a125fefbf2dd3522be4227f99c42a5"
  },
  {
    "url": "assets/js/7.5063683c.js",
    "revision": "5c223e7ab563ace587e8deb13bfba178"
  },
  {
    "url": "assets/js/8.65b1f870.js",
    "revision": "b882c385cac70363ff8144ae4ecd1dda"
  },
  {
    "url": "assets/js/9.c3fcff9c.js",
    "revision": "7c3cf158454be3442a74975355985f30"
  },
  {
    "url": "assets/js/app.cd972abc.js",
    "revision": "7eec09ad9e9881824516ac9fd7e8778e"
  },
  {
    "url": "guide/index.html",
    "revision": "fa915a759dfd5f06c5982bf3b04cdb00"
  },
  {
    "url": "index.html",
    "revision": "50929b034227c1ac8b33077bd440222b"
  },
  {
    "url": "logo.jpg",
    "revision": "632b9cd895db0e0d6cb5f272e474e80c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
