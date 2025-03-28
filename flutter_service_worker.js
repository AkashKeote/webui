'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "449c3ca283a8ef2f93f8e608db63446d",
"assets/AssetManifest.bin.json": "647abae4e5d5340294b6fdd0a25e8f02",
"assets/AssetManifest.json": "d4a3e9d830f87c89707635cfd8514646",
"assets/assets/fonts/Airbnb%2520Cereal-fontiko/Airbnb%2520Cereal-fontiko/AirbnbCereal_W_Lt.otf": "19c0f3d9508f250d3678b71b272b7210",
"assets/assets/fonts/helvetica-neue-5/HelveticaNeueBlack.otf": "47fb372c5e2d5861921e6f4bad10d1f2",
"assets/assets/fonts/helvetica-neue-5/HelveticaNeueBold.otf": "b3ac1bd5e427f84b07373609c6e63d4a",
"assets/assets/fonts/helvetica-neue-5/HelveticaNeueHeavy.otf": "14ca62482b6a5ab8b4a6a1435cfe77e9",
"assets/assets/fonts/helvetica-neue-5/HelveticaNeueLight.otf": "bfbaeacd0e20bdc3d9bb57e417b5e693",
"assets/assets/fonts/helvetica-neue-5/HelveticaNeueMedium.otf": "3de700a4650f63d566ee3e19cf1d1511",
"assets/assets/fonts/helvetica-neue-5/HelveticaNeueThin.otf": "ca80734bc298d4cd768cfabaa667f66c",
"assets/assets/fonts/meteora-demo/Meteora%2520-%2520DEMO.ttf": "f52bc107e681d1ddb6c4bbecb8714b52",
"assets/assets/images/1.png": "4198024e6d60d6cb71caced0853fefdf",
"assets/assets/images/11.png": "4e2ec6259cfc27a1abfc168ba96bbec7",
"assets/assets/images/12.png": "4bc8c783f2279778f6b669c753b5fbbb",
"assets/assets/images/13.png": "26787fd36449da2a7c2365b2040c0f04",
"assets/assets/images/14.png": "073329e384809b635ba0fb09798575c7",
"assets/assets/images/15.png": "293ed33194521108cf941e4a3f153f99",
"assets/assets/images/16.png": "a0c7520b7c9ada4445dda620d9e43d30",
"assets/assets/images/17.png": "4e676578d0a338c56abcc0e1fa78bfa1",
"assets/assets/images/18.png": "1708a010f4bfcac0be24e598fa01b992",
"assets/assets/images/19.png": "e42a586535e0a77e4bb94cc09b1c9871",
"assets/assets/images/2.png": "44a67476c58ce19db28d79aface04fa3",
"assets/assets/images/20.png": "c1c923329a0702b8ea76678494e7fbf9",
"assets/assets/images/21.png": "d8d1352c48908f2dc66b9edeb40e1ddd",
"assets/assets/images/22.png": "d20ebf0a6b9808a12a2d30c451d0a29e",
"assets/assets/images/3.png": "68ec028079ae35eaf8bb34fe03ee01b1",
"assets/assets/images/4.png": "4737210f42a11834629fa07dc849e8df",
"assets/assets/images/5.png": "b9ca32c310402ac62f031d7a020ebd06",
"assets/assets/images/6.png": "532b24d105d60df2b8d1a76942cb71aa",
"assets/assets/images/7.png": "4409df4b00294db4c754a91cd66c2389",
"assets/assets/images/8.png": "47954dd99832a5083363f9ccf0da1aad",
"assets/assets/images/bg1.png": "b13cfff71f1f2c14b288632f38bb698a",
"assets/assets/images/dark1.png": "75c2de162ede16775b0a8a7c54439e8f",
"assets/assets/images/DM3.1.png": "bb8890a6b86bd6dd1ea532cf7f0addc8",
"assets/assets/images/DM3.png": "b7349a12829b293dbb483b27d3a41835",
"assets/assets/images/Dm3ak1.png": "1f1361a5dd35e3abed63da82cba2bad4",
"assets/assets/images/DM3ak2.png": "13efacd7ec6aa61c4e003fbbe3535513",
"assets/assets/images/DM41.png": "b7349a12829b293dbb483b27d3a41835",
"assets/assets/images/DM42.png": "1f1361a5dd35e3abed63da82cba2bad4",
"assets/assets/images/DM43.png": "13efacd7ec6aa61c4e003fbbe3535513",
"assets/assets/images/DM44.png": "d14a1fdbf9f9b9dee2aa2c6d3083745b",
"assets/assets/images/DM45.png": "736d2ac5755b923906b332cdedae2bf6",
"assets/assets/images/DM46.png": "ee001c3ff89d9b8d6407b086fc45930c",
"assets/assets/images/DM47.png": "8915563aef81ed39e6920cbe25a19b95",
"assets/assets/images/DM48.png": "ad45f730917a9eb9c792a502ffeaef04",
"assets/assets/images/DM5.png": "b43d1a7619244c56da1ce42cbb8aefaf",
"assets/assets/images/fb.png": "962a31874d7f73d00ca2d764a41cde53",
"assets/assets/images/Frame.png": "623500b5b930f303bb66aa73c2b82456",
"assets/assets/images/google.png": "e145199e6a66c9625e9ee977c4bb0fa8",
"assets/assets/images/Group.png": "83a86baa9ce8d9b37a5ac7ba83aa5a86",
"assets/assets/images/logo.png": "d7baeb40329cafafda521775b8866c64",
"assets/assets/images/splash%2520(1).png": "58d48a709b28dbea063f9732dd4654af",
"assets/FontManifest.json": "0ee86089d503cc84703f870aea7aa844",
"assets/fonts/MaterialIcons-Regular.otf": "cac4baab0cfc7b4fab2e983d0621168c",
"assets/NOTICES": "40d4bcf56e722b17cfb822a5cdfcc02c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "543317dc43b0c23e6e90b2aaec928797",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f1c6eda84ffa40742aa9f76fb73d16df",
"/": "f1c6eda84ffa40742aa9f76fb73d16df",
"main.dart.js": "c75ad4ea0279f3d73c8c61d2c61da3aa",
"manifest.json": "ebf312e0ddf2070ac11082fba2ac8920",
"version.json": "e0f01185025df5ae543f19dca72325db"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
