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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.0/workbox-sw.js");

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
    "revision": "54e47fa700c890102822bc5f5ef22e4d"
  },
  {
    "url": "about.html",
    "revision": "177a49eb6c9cc2b8e592a72483208f12"
  },
  {
    "url": "assets/data/mmr_ieso.json",
    "revision": "6548874a6382fa6b7dc6f3d22bef91b6"
  },
  {
    "url": "assets/images/2016-01-13-lancet-blog-ieso.jpg",
    "revision": "d58c2f3d40410a0978c1f8567c67d935"
  },
  {
    "url": "assets/images/2016-03-30-annual-meeting-audience.jpg",
    "revision": "02f34a61b6d04fc530b477e1824fe416"
  },
  {
    "url": "assets/images/2016-03-30-annual-meeting-panel.jpg",
    "revision": "0d67824bf06a6e320da2b8f5a08c523e"
  },
  {
    "url": "assets/images/2016-10-25-stories-from-ethiopia-rupture-uterus-surgery.jpg",
    "revision": "c99b32f8ab5aec67c1340074ea1e7734"
  },
  {
    "url": "assets/images/2016-10-25-stories-from-ethiopia-trauma-laparotomy.jpg",
    "revision": "181fd815901782538b1900c2851da828"
  },
  {
    "url": "assets/images/2017-10-27-annual-conference-report-1.jpg",
    "revision": "c7d36fe569ff6dc395659fd624215b56"
  },
  {
    "url": "assets/images/2017-10-27-annual-conference-report-2.jpg",
    "revision": "c7e2bb63cbb75db7726a260fb6957f12"
  },
  {
    "url": "assets/images/2017-10-27-annual-conference-report-3.jpg",
    "revision": "37b6f268861c76fabee129b19be1e432"
  },
  {
    "url": "assets/images/2017-10-27-annual-conference-report-4.jpg",
    "revision": "ab85d92206912c16a493669e87adffaf"
  },
  {
    "url": "assets/images/2017-10-28-ajm-saving-lives-non-doctor-surgeon.png",
    "revision": "16e1835a891e713a375b8af4d7c064e6"
  },
  {
    "url": "assets/images/2017-10-29-neonatal-resus-training-report-1.jpg",
    "revision": "c2f3fb935e2e1f2092b684a8ad83eb02"
  },
  {
    "url": "assets/images/2017-10-29-neonatal-resus-training-report-2.jpg",
    "revision": "389c461f50df9c1c6b137be8066a7dab"
  },
  {
    "url": "assets/images/2017-10-29-neonatal-resus-training-report-3.jpg",
    "revision": "76300f900a1f7faf9e224a0f4e9c1684"
  },
  {
    "url": "assets/images/2018-10-11-southern-region-annual-meeting-report-1.jpg",
    "revision": "7efc8ee62cefdbea305353786c6373eb"
  },
  {
    "url": "assets/images/2018-10-11-southern-region-annual-meeting-report-2.jpg",
    "revision": "4556a50803a075c25c0b02cf80ad80d4"
  },
  {
    "url": "assets/images/2018-10-11-southern-region-annual-meeting-report-3.jpg",
    "revision": "6d3d66c7572984b344119e88549be1b0"
  },
  {
    "url": "assets/images/2019-02-05-melese-at-esog-conference.jpg",
    "revision": "aeed842c1bed29a250d3103afa168756"
  },
  {
    "url": "assets/images/2019-03-04-case-ovarian-torsion-intraop.jpg",
    "revision": "5f26724f07f0027cc37f1731495101cd"
  },
  {
    "url": "assets/images/2019-03-04-case-ovarian-torsion-postop.jpg",
    "revision": "01da67ee95f17b3ee10b9186d6cf4b69"
  },
  {
    "url": "assets/images/2019-03-04-case-ovarian-torsion-specimen.jpg",
    "revision": "70402af4786226db9700ca6355d1deb5"
  },
  {
    "url": "assets/images/2019-03-04-ieso-operating-square200.jpg",
    "revision": "f760c25a09b5dfbdd17348e5357bef4c"
  },
  {
    "url": "assets/images/2019-03-04-ieso-surgical-team.jpg",
    "revision": "b66fd37f0e8433c42a9b23edfd3a7ad3"
  },
  {
    "url": "assets/images/aberra-gobezie.jpg",
    "revision": "dbc27b04ff07a70b10bfb284616a6f2c"
  },
  {
    "url": "assets/images/banner1-mobile.jpg",
    "revision": "1ae71bc4437c12dc9ed7cacfe51b55cd"
  },
  {
    "url": "assets/images/banner1.jpg",
    "revision": "c0217e38c69869a7ea551ce90ddda5d0"
  },
  {
    "url": "assets/images/biku-ghosh.jpg",
    "revision": "81d307cea43f8a6a638e93915040abda"
  },
  {
    "url": "assets/images/chart-mmr-ieso.png",
    "revision": "1a4839937183ae68f9f961577701f455"
  },
  {
    "url": "assets/images/default-image.jpg",
    "revision": "74142c2509712efb83bc28eb64871fbe"
  },
  {
    "url": "assets/images/ejhs-cover.jpg",
    "revision": "c50ddfebf5b2842e9487508f3311e2f7"
  },
  {
    "url": "blog.html",
    "revision": "e5be8300099c571396d7dabfbf60e880"
  },
  {
    "url": "blog/2009/05/history-of-ieso-msc.html",
    "revision": "302e3f5e17c89d8c748e1b90bd951005"
  },
  {
    "url": "blog/2016/01/lancet-praises-ieso.html",
    "revision": "0f2f2119db433dbc1e3b91e247e63810"
  },
  {
    "url": "blog/2016/03/annual-meeting.html",
    "revision": "2c1601d5eb46bbf0ebe5595080886756"
  },
  {
    "url": "blog/2016/07/eso-performance-assessment-report.html",
    "revision": "267b011821e64c30af303d03da4d7311"
  },
  {
    "url": "blog/2016/09/ieso-performance-report.html",
    "revision": "80f91ac7aa60ff426cdfd1bc09be83c9"
  },
  {
    "url": "blog/2016/10/surgical-stories-from-ethiopia.html",
    "revision": "f44cbf57dc2996c5bfc40d8ace2bb302"
  },
  {
    "url": "blog/2016/12/annual-meeting-invitation.html",
    "revision": "8fae099a160fb2fd4710c2b62142fde3"
  },
  {
    "url": "blog/2017/10/ajm-saving-live-non-doctor-surgeon.html",
    "revision": "64697a78d0e2b5cec840063973ddf0bb"
  },
  {
    "url": "blog/2017/10/annual-conference-report.html",
    "revision": "0aa4525504a3387349dd1e1c4f1d2330"
  },
  {
    "url": "blog/2017/10/neonatal-resus-training-report.html",
    "revision": "f9ce82cf4794a893c624b2f4d6230a3f"
  },
  {
    "url": "blog/2018/10/southern-region-annual-meeting-report.html",
    "revision": "1bd8697a795bcd3464b7bbe2f960c17e"
  },
  {
    "url": "blog/2019/02/case-report-ovarian-torsion.html",
    "revision": "827b4d1fa0ee1a3cf7aed4d4ecb92e3b"
  },
  {
    "url": "blog/2019/02/paesoe-at-esog-annual-conference.html",
    "revision": "a4beacbc96c98dfe65cca15104cbdb50"
  },
  {
    "url": "contact.html",
    "revision": "10f06e4f153df9932ea654d7901b5c7f"
  },
  {
    "url": "css/main.css",
    "revision": "900ad78fa9ad2c526a16b300ab473af6"
  },
  {
    "url": "index.html",
    "revision": "27dc7efc4823569bfb1380d1f958a83c"
  },
  {
    "url": "js/rellax.min.js",
    "revision": "3977c28959b9abb8499e04c2df0339cc"
  },
  {
    "url": "library.html",
    "revision": "6e940feddd1576258af7cfbbc5ec74f8"
  },
  {
    "url": "manifest.json",
    "revision": "fe86b1ec3a6b450b6efeeca84f25b773"
  },
  {
    "url": "redirects.json",
    "revision": "99914b932bd37a50b983c5e7c90ae93b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/data\.+.json$/, new workbox.strategies.CacheFirst({ "cacheName":"paesoe-data-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 50, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.backgroundSync.Plugin("paesoeDataQueue", { maxRetentionTime: 1440 })] }), 'GET');
workbox.routing.registerRoute(/.(?:png|jpg|jpeg|webp|gif|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"paesoe-image-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 50, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.backgroundSync.Plugin("paesoeImageQueue", { maxRetentionTime: 1440 })] }), 'GET');

workbox.googleAnalytics.initialize({
	cacheName: 'paesoe-ga-cache',
	parameterOverrides: {
		cd1: 0
	},
	hitFilter: (params) => {
      const queueTimeInSeconds = Math.round(params.get('qt') / 1000);
      params.set('cm1', queueTimeInSeconds);
    }
});
