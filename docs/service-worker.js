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
    "revision": "d457b37721b2cfba3ceaeda027c2fc9e"
  },
  {
    "url": "assets/css/0.styles.f84bc4a7.css",
    "revision": "27f6789c80a4516bdf7f30da6d948015"
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
    "url": "assets/js/11.a2aaa0ec.js",
    "revision": "dfa90554ac8d8733fa539dd01b873261"
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
    "url": "assets/js/14.30b09788.js",
    "revision": "09e58a099a4cb08f035467fd98da00af"
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
    "url": "assets/js/6.0c41c94d.js",
    "revision": "7824b9db4b85729bd4d5fe8a1508dafc"
  },
  {
    "url": "assets/js/7.f09a3d82.js",
    "revision": "d05448b626bb3ebcb2cb4ddd298b1e6a"
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
    "url": "assets/js/app.f2e02c31.js",
    "revision": "b7ac18a646ba3ffed0937bce4c21727b"
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
    "revision": "7c3006b0d1fd1a4a3c3135ee27142316"
  },
  {
    "url": "note/CSS.html",
    "revision": "7ace4311582fec9358c50695cad45123"
  },
  {
    "url": "note/curriculumVitae.html",
    "revision": "7290e433914d62ed4b11b49016f28c30"
  },
  {
    "url": "note/index.html",
    "revision": "f0bad6f23ac2f675d0767d69048c6e2e"
  },
  {
    "url": "note/InterviewQuestions.html",
    "revision": "101c874b619d6de88f9078d7a2c7316b"
  },
  {
    "url": "note/JavaScript.html",
    "revision": "a23c74a586a453f047a8e8226ac056b6"
  },
  {
    "url": "note/Nodejs.html",
    "revision": "f4ea30797d54f8ccc1d0a64ccf4acc36"
  },
  {
    "url": "VideoCourse.html",
    "revision": "b90b6023e1f1781d38583b95f4544d0a"
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
