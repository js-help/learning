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
    "revision": "93ded889997ef13e46310913b48b323d"
  },
  {
    "url": "assets/css/0.styles.770e0af4.css",
    "revision": "b923061e8e848ddd3e1ba814a6277300"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1f3285cb.js",
    "revision": "069eb40f4eaeb94cd197b8aae96d238b"
  },
  {
    "url": "assets/js/11.1b594468.js",
    "revision": "e809e61403380e4b2608fd066530ba13"
  },
  {
    "url": "assets/js/12.2391e990.js",
    "revision": "652f8d44098b893061b1cd61f14867f4"
  },
  {
    "url": "assets/js/13.2353d62a.js",
    "revision": "a3d76697869955a7750239f14b2c6c1d"
  },
  {
    "url": "assets/js/14.bc6a41b4.js",
    "revision": "9ecaaebedaa47cf2a114f3ddaba3a18b"
  },
  {
    "url": "assets/js/15.da5a488e.js",
    "revision": "02a40b67f5773221c2af59d995efae06"
  },
  {
    "url": "assets/js/16.e520abf9.js",
    "revision": "5173c3b88d7104fadec0f447fc3115dd"
  },
  {
    "url": "assets/js/3.41ccfed1.js",
    "revision": "60f593370302d3b2a3a3b6985ea331d9"
  },
  {
    "url": "assets/js/4.d98ac530.js",
    "revision": "16b190af34694a009b244beffb814ab7"
  },
  {
    "url": "assets/js/5.b57b9070.js",
    "revision": "a0f2d69d8244d8469de7821994f8bc08"
  },
  {
    "url": "assets/js/6.a33e5268.js",
    "revision": "a09cebc0fb48c73b8201e4bed8af286d"
  },
  {
    "url": "assets/js/7.9fee53d0.js",
    "revision": "2e99d461c037eb552a4156cf736e282d"
  },
  {
    "url": "assets/js/8.8d8bb796.js",
    "revision": "7c1f03443a401bdebabd67916e1726db"
  },
  {
    "url": "assets/js/9.23bc8b6e.js",
    "revision": "70bacf5e677b14bc623f1663ff5570ed"
  },
  {
    "url": "assets/js/app.b85f5b3b.js",
    "revision": "8f3992e221b26afa1116a7a4a3c91ef5"
  },
  {
    "url": "assets/js/vendors~flowchart.fc304cca.js",
    "revision": "91cfc8b43821365ad3613e966a3c2fed"
  },
  {
    "url": "hero.jpg",
    "revision": "d82e9130e3c9cee4e047eea140b825bf"
  },
  {
    "url": "index.html",
    "revision": "0ab204745bf5210494d1db3ad79fbd61"
  },
  {
    "url": "note/CSS.html",
    "revision": "32df408d96c258913c175545ebe64d37"
  },
  {
    "url": "note/curriculumVitae.html",
    "revision": "c5b73d4ecd138c6443d00fd6267b330b"
  },
  {
    "url": "note/index.html",
    "revision": "44278d27c45064dce4e3435d23526888"
  },
  {
    "url": "note/InterviewQuestions.html",
    "revision": "cc75fa0cb9549ac609ab914eb167d000"
  },
  {
    "url": "note/JavaScript.html",
    "revision": "a0c85ba01e5cb0c921c0f066766ca9e6"
  },
  {
    "url": "note/Nodejs.html",
    "revision": "485277cb60be969b589a6e8b2d140ca2"
  },
  {
    "url": "VideoCourse.html",
    "revision": "66bc188df821fe7aadd3e11f71f947a3"
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
