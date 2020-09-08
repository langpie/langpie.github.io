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
    "url": "about/index.html",
    "revision": "866e3ed77c9b20a3409235af4c858d8d"
  },
  {
    "url": "assets/css/0.styles.c0967cea.css",
    "revision": "e2bc864082284355d56afe42af66cbe2"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.db65c536.js",
    "revision": "d4a5ee4724c876a72c29d1c95ea90a8e"
  },
  {
    "url": "assets/js/11.a0d6ec95.js",
    "revision": "adc16df29b8b9fa4c9da94ad86f9991d"
  },
  {
    "url": "assets/js/12.edd42a0b.js",
    "revision": "c6de29145f6fe64748f589525dc7cd50"
  },
  {
    "url": "assets/js/13.fc2c6088.js",
    "revision": "a563c7ec0614a7814ed88f82ee7d4201"
  },
  {
    "url": "assets/js/14.9a6b3b1a.js",
    "revision": "ff996f59b742a8e1bdf2afa09d6ee671"
  },
  {
    "url": "assets/js/15.c52357a2.js",
    "revision": "04d4b54f3a6585d246ce41e11e6220df"
  },
  {
    "url": "assets/js/16.7ee29a4e.js",
    "revision": "bc682b10600611cd24902e2f059dd31a"
  },
  {
    "url": "assets/js/17.1cd83f36.js",
    "revision": "e6676e76e25bd9a0df8c3721ede15ec3"
  },
  {
    "url": "assets/js/18.8c02a2d2.js",
    "revision": "b27dd691516f637c66477a0ad671616e"
  },
  {
    "url": "assets/js/19.5a46f985.js",
    "revision": "0e058cc89b97b9589c9c2764d790a930"
  },
  {
    "url": "assets/js/2.dedfbb1b.js",
    "revision": "049f150dfefa5f36b7fdb31c48c38f84"
  },
  {
    "url": "assets/js/20.0ba8596a.js",
    "revision": "853237ed48b8334aef99c0f934f7cbac"
  },
  {
    "url": "assets/js/21.6b37b962.js",
    "revision": "e788cca10553cab84280ba5b6e9705ee"
  },
  {
    "url": "assets/js/22.d2777d47.js",
    "revision": "6e0c11d7079d3227dfa39d9a0efb69ae"
  },
  {
    "url": "assets/js/23.912e6a7d.js",
    "revision": "cb664186a672917caf05e9cae7f3a082"
  },
  {
    "url": "assets/js/24.2ad61612.js",
    "revision": "5f96116ae2861f87027bc92e68ac58b1"
  },
  {
    "url": "assets/js/25.11ab7c4f.js",
    "revision": "342403986e2939cc23cb857fefc67474"
  },
  {
    "url": "assets/js/26.b6a781a9.js",
    "revision": "dfc3b20d8469db98ff23a2fad30c78b8"
  },
  {
    "url": "assets/js/27.6696496a.js",
    "revision": "76e94f1b735ef1d09e0306b0d5978c8a"
  },
  {
    "url": "assets/js/28.dcc590a8.js",
    "revision": "0415c2a7de35f3ebb33c387d2a0f7147"
  },
  {
    "url": "assets/js/29.96844031.js",
    "revision": "e4318729bb2f97936b2bfa6c3f2627a8"
  },
  {
    "url": "assets/js/3.55fd8fcd.js",
    "revision": "2451b7a4d095c79ad0c4a4f9defced0d"
  },
  {
    "url": "assets/js/4.45463023.js",
    "revision": "d8304f083b26a38007f77d63c418be3a"
  },
  {
    "url": "assets/js/5.4c1c4963.js",
    "revision": "80b31b1721efd522fbe7629d277f20e7"
  },
  {
    "url": "assets/js/6.e3876a03.js",
    "revision": "ccf09f8238a14c2e206278c4ba4d6c95"
  },
  {
    "url": "assets/js/7.a3d7b10c.js",
    "revision": "da112d28f22950ce515183e1c8f4c71b"
  },
  {
    "url": "assets/js/8.696f72e2.js",
    "revision": "1bdf73078c047e50a5d52e6be46c446f"
  },
  {
    "url": "assets/js/9.f898e618.js",
    "revision": "c02d04cb2b4cd08810f5e2e6db0a229a"
  },
  {
    "url": "assets/js/app.bda2eb1e.js",
    "revision": "cdcf0026b3d8a6ba8d3c7ecfbcc16b6a"
  },
  {
    "url": "docs/getting-start/preparation/index.html",
    "revision": "503100c9d11fb3d78095661e097dce4e"
  },
  {
    "url": "docs/getting-start/tools/index.html",
    "revision": "61a6308f52a606c6ce6ccaf81fbc192b"
  },
  {
    "url": "docs/goals/overview/index.html",
    "revision": "55382081cf19021d2fa0e1f7d7605fc8"
  },
  {
    "url": "docs/hardware/drawpcb/index.html",
    "revision": "14073a44a404755afb8fc170560d6ba9"
  },
  {
    "url": "docs/software/auto_aimhead/index.html",
    "revision": "ed98250bacd0b04b00003a893668ab03"
  },
  {
    "url": "docs/software/basic/index.html",
    "revision": "7eb24a74ebb949273bc85e82e3558954"
  },
  {
    "url": "docs/software/getTemperature/index.html",
    "revision": "5f15b854a0ee5518f88da21d35adf21e"
  },
  {
    "url": "docs/software/howToUseMPU6050/index.html",
    "revision": "b67300ae95af81e5a7aa900fe86cb59e"
  },
  {
    "url": "docs/software/installation/index.html",
    "revision": "3715567b876d83e52fc6a871bb0a4e22"
  },
  {
    "url": "docs/software/object_detection/index.html",
    "revision": "b2a81c127677eeca0b87aab956955bcd"
  },
  {
    "url": "docs/software/preConfig/index.html",
    "revision": "fd730b09f0a42a699f8eec80b7398a26"
  },
  {
    "url": "docs/software/TestCamera/index.html",
    "revision": "0dd9dabc47eef8a4082a606b0d7ffc75"
  },
  {
    "url": "docs/software/virtualenv/index.html",
    "revision": "26bc09c68e579384bca115559f3b3668"
  },
  {
    "url": "favicon.png",
    "revision": "7bbabd220457617b140be11e3285521b"
  },
  {
    "url": "icon.png",
    "revision": "dd05b12249b3ceac28907682ee1cd9bd"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "d4d7e74eac078e34a5c51809fcf4d6d7"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "dd6a427b58ca6dfcee9c7ef3e47be2d6"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "baa1eb8bef03c0aeedc322b63e86e0c7"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "29d94a0fc8769356e6c6042b94c0fffa"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "60434fbdba0c8bfe00630b167dd7ea32"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "bc3d5e3c31558a8ce887e2e7e5351afb"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "7e583b923ddf7a2cc60e1eebea175127"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "fc61ff40e4feb4a9669d0d3e23ac7ea0"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "8f8c57b617299b315e2f8b18d97e6462"
  },
  {
    "url": "icons/msapplication-icon.png",
    "revision": "f519d7e481d311755ae3897901647749"
  },
  {
    "url": "index.html",
    "revision": "eb0bbabbd1c220942f4fcacca2c035f7"
  },
  {
    "url": "open_graph_logo.png",
    "revision": "f97a250a016caba373383284ff75fd3c"
  },
  {
    "url": "zh/about/index.html",
    "revision": "5738c53eb0e89896bf9da0a03ab42bc8"
  },
  {
    "url": "zh/docs/getting-start/preparation/index.html",
    "revision": "aa2a93e4f8f16fc175cdf0d8e9e44710"
  },
  {
    "url": "zh/docs/getting-start/tools/index.html",
    "revision": "431b632049edfa0a427258b8de7c179d"
  },
  {
    "url": "zh/docs/goals/overview/index.html",
    "revision": "bf5dee2087d05440ffc465cac93e4c47"
  },
  {
    "url": "zh/docs/hardware/drawpcb/index.html",
    "revision": "da76eebcf3c4a299aa5e231b7d21c02d"
  },
  {
    "url": "zh/docs/software/basic/index.html",
    "revision": "5cdadc51dde9d52805ff529597879bff"
  },
  {
    "url": "zh/index.html",
    "revision": "29d30f5a6d0089894bd42c5b57271fe1"
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
