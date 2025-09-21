'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0fc26dd9c26ac36aaf4a6854b3e7eaf3",
"assets/AssetManifest.bin.json": "11255f26a76fe6ce6e6d29b978652086",
"assets/AssetManifest.json": "e543336d9e0621aa196b83d8d6d3c6ed",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/hive.png": "14425842f90784c3d583369d24b384b5",
"assets/assets/icons/icons8-android-studio.png": "331a2c7d426c92106a6bdf6ba84ffeaf",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/icons/vscode.png": "5c91374f96edbe074a8f554a1f02df85",
"assets/assets/images/burger/0.jpg": "6c95c46903f9170703d518533ea1ca4d",
"assets/assets/images/burger/1.jpg": "22db354fefb4410f29325694f0fb7266",
"assets/assets/images/burger/2.jpg": "493b01230ecc6b34bad401b765200ba2",
"assets/assets/images/burger/pase.png": "80f6b14f2e844f9580eeff0fd1a9b8a8",
"assets/assets/images/cars/0.jpg": "a78d4771649d285a07dc33103fdcf974",
"assets/assets/images/cars/1.jpg": "e2745be8f942bfcd6b8d7bca3d994bec",
"assets/assets/images/cars/10.jpg": "f191b7608667765b73da3075915e9c92",
"assets/assets/images/cars/11.jpg": "8743a1a263576880c9e4ea44a542f077",
"assets/assets/images/cars/12.jpg": "b21a32862b1a1c42fb6d6a3bbd25682a",
"assets/assets/images/cars/13.jpg": "505d0093b5c0c2fea000e6808e8cc41d",
"assets/assets/images/cars/14.jpg": "1952e8b7f187d86613a116f6c9d4cd3f",
"assets/assets/images/cars/15.jpg": "af8b251deac5b82c80f4eb6b44d8b952",
"assets/assets/images/cars/16.jpg": "b0bfb6f2b42dd879fb3aec62c0bafeb8",
"assets/assets/images/cars/2.jpg": "f3b2f073755d90e39bbe95e3cfbb5a1d",
"assets/assets/images/cars/3.jpg": "88d47f95437e7e6d815d9a1962f1083b",
"assets/assets/images/cars/4.jpg": "3a8aa58c0f0c1ec6887b474b28e287cb",
"assets/assets/images/cars/5.jpg": "0b6c5a6f37928c6a036a94fa9511898b",
"assets/assets/images/cars/6.jpg": "a477656cdfe72575cf478cc9b26bcd7c",
"assets/assets/images/cars/7.jpg": "27e0b63b4ab1ce9c56d604cf821331f1",
"assets/assets/images/cars/8.jpg": "ae513feaab682ab9f6b59abed232a59b",
"assets/assets/images/cars/9.jpg": "a2f2e37cedf4146732d8a81c6c174586",
"assets/assets/images/cars/pase.png": "1b1997b0b15ef0064f4da1be0e9b8a0c",
"assets/assets/images/cinema/0.jpg": "8cefb38200df909e6b1f19a574e508eb",
"assets/assets/images/cinema/1.jpg": "e740481b0cb3bf76325a86004b5fcf5b",
"assets/assets/images/cinema/2.png": "5435f254ae7f2523ba6aa4e9dc2a11c6",
"assets/assets/images/cinema/pase.png": "1ed6573faafce00420c67b479f2db06c",
"assets/assets/images/Developer.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/assets/images/ecommerc/ecomerc.png": "29a065044e98c79502149691d537bfbf",
"assets/assets/images/ecommerc/ecomerc1.jpg": "6df617f045637f8071e3ce7f17cfae51",
"assets/assets/images/ecommerc/ecomerc10.jpg": "07f3b00a1c79e4166d71f7fdafb2e6d4",
"assets/assets/images/ecommerc/ecomerc11.jpg": "63aa8ecec8662cf84f3ab1cbeda49b69",
"assets/assets/images/ecommerc/ecomerc12.jpg": "b90b5705a36de7c3e211f569787d3020",
"assets/assets/images/ecommerc/ecomerc2.jpg": "60ffab899d40867e8566b5fa4bfa94a2",
"assets/assets/images/ecommerc/ecomerc3.jpg": "0c6e10abdfbb51252358b62649c8a57b",
"assets/assets/images/ecommerc/ecomerc4.jpg": "c6072139f39e00f4fdd49a7f22031f27",
"assets/assets/images/ecommerc/ecomerc5.jpg": "1a997f7b9e16980172b4328eb5388d17",
"assets/assets/images/ecommerc/ecomerc6.jpg": "f8a19d42b4bbd37f0bfa45bebb31bb8a",
"assets/assets/images/ecommerc/ecomerc7.jpg": "fcc9e4e029938f401208238f5ea679dc",
"assets/assets/images/ecommerc/ecomerc8.jpg": "a617979a5d549b2942f372db0eee3563",
"assets/assets/images/ecommerc/ecomerc9.jpg": "6b37420e17918bcf10adebb28f577286",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/images/mohamed1.png": "fe5eb5c7062b59696cacc80d872a9d61",
"assets/assets/images/mohamed2.png": "6205b4de7ccaaef0cb50b6c5389f0f36",
"assets/assets/images/preview.png": "c51535c8a5d2eb9ca6e3a3e8605a7e72",
"assets/assets/images/recipe/0.jpg": "01f5cc87b9905b2b27e7612e2cd51115",
"assets/assets/images/recipe/1.jpg": "1f7055d974dc6fb4b72591e982aa9a71",
"assets/assets/images/recipe/2.jpg": "d0f051cf4ccf1404a672d54238780b96",
"assets/assets/images/recipe/3.jpg": "414672477174de2c804ecebef8b144a3",
"assets/assets/images/recipe/pase.png": "cc19b983a2036adf15947fab56da696f",
"assets/assets/images/travel/0.jpg": "7c3ddb47bf8106460ff950d60a0fb20c",
"assets/assets/images/travel/1.jpg": "64bdc1a6b8469b879cdfd5fa0e436ae9",
"assets/assets/images/travel/2.jpg": "56fca243491333f6cc4da696d7939673",
"assets/assets/images/travel/3.jpg": "fb5933da3bf8ff4abe08d39ca6363c73",
"assets/assets/images/travel/pase.png": "3d2083db84fef8ad7bb3d10c76d9c3d9",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "cc6a8c4218542b967423fb8091de1664",
"assets/NOTICES": "d0e1caeebf313a0d62b93388a98aeb68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "53e7da9759b95377d2f67e8e06d4d43a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "f893d418cb134084a4ffd2568a3b77c2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cccf5756e129a62f0dcdc1d131438f0b",
"/": "cccf5756e129a62f0dcdc1d131438f0b",
"main.dart.js": "4e0dfd7969e06c19bcffdb5e79b567dc",
"manifest.json": "9009757f41c6e14486c806578c0fd928",
"version.json": "f1cb46a5f5c2bbc83ac467aa3524637c"};
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
