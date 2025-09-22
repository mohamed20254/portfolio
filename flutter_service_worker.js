'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7b138ef4504dd03e902e9073790b42fe",
"assets/AssetManifest.bin.json": "c098bf15c0e31fb221d64bdae871fab8",
"assets/AssetManifest.json": "e9dd694cbe761f4ebdbd50620a149afd",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/hive.webp": "624394b36ed392450f7853cbd87299ae",
"assets/assets/icons/icons8-android-studio.webp": "9e3e2a5ffccdeede2e03ff4c07440a4f",
"assets/assets/icons/vscode.webp": "fc24508d3e8a6668c96e0096f28c5938",
"assets/assets/images/burger/0.webp": "2d4304d6631069c3ecb2ffbff4856b10",
"assets/assets/images/burger/1.webp": "146679a7e078e679dbbb162fdc4258db",
"assets/assets/images/burger/2.webp": "70b0d223d9580b72d66d7c4c5ea125be",
"assets/assets/images/burger/pase.webp": "77afeea81379cc33806844f01f9f4cb8",
"assets/assets/images/cars/0.webp": "70ebd2d768c0c62dea809ac5028cd640",
"assets/assets/images/cars/1.webp": "5b059b5f6638621da6fb399f7fca25c6",
"assets/assets/images/cars/10.webp": "14e42d98d5db3f4bffc6aeff0a27e88e",
"assets/assets/images/cars/11.webp": "4793b60933f566926a23b6f0f64c57b5",
"assets/assets/images/cars/12.webp": "60f22083e663a468f23bf2366f3f5290",
"assets/assets/images/cars/13.webp": "a335e0b17dcccc7fb5f42048b875f8a7",
"assets/assets/images/cars/14.webp": "873cbb2e99821d527b7f6669f5dfff93",
"assets/assets/images/cars/15.webp": "6c93dd4c6bdcab86a505c2f6926a584a",
"assets/assets/images/cars/16.webp": "0faa0e4f0bc24a371c22361223a5a8fa",
"assets/assets/images/cars/2.webp": "8aa5ec342653687257b32bd202e087bc",
"assets/assets/images/cars/3.webp": "db77f882782627ed70517657c5452f52",
"assets/assets/images/cars/4.webp": "cd1344b19d68af70e221c7a1831099eb",
"assets/assets/images/cars/5.webp": "fa23c2d60ee9efbc15e1c0a7c006fd09",
"assets/assets/images/cars/6.webp": "98c00e64d5c462ae79836c6fb8b974a5",
"assets/assets/images/cars/7.webp": "12ee39fc233cf4c4bd78008467e2b035",
"assets/assets/images/cars/8.webp": "734d0e24056ed6fced0f97e831042336",
"assets/assets/images/cars/9.webp": "daff0c4087a281eea9970132fda5ec78",
"assets/assets/images/cars/pase.webp": "47a78e72d0f8af044f32fd2cf53ab890",
"assets/assets/images/cinema/0.webp": "d36a355ba32e458d816e80c9a8a84d71",
"assets/assets/images/cinema/1.webp": "c13f20180bfe2a47be989ff3f4d20980",
"assets/assets/images/cinema/2.webp": "36c00fcd62c10acd3d8e0b581588afe6",
"assets/assets/images/cinema/pase.webp": "2b3912b2a6fbb8a7a1a79c5494eeed80",
"assets/assets/images/Developer.json": "b6a331a54f98cd1745bd6a91a2541a48",
"assets/assets/images/ecommerc/ecomerc.webp": "e0686c3520cf63152df049b591fe5ecb",
"assets/assets/images/ecommerc/ecomerc1.webp": "55d1c6403665e0d4e71d5a7d226adb31",
"assets/assets/images/ecommerc/ecomerc10.webp": "c34315bbca53a1c577dda5fd200b78d9",
"assets/assets/images/ecommerc/ecomerc11.webp": "06548b5c2ae5a991376c7cfde06ab701",
"assets/assets/images/ecommerc/ecomerc12.webp": "61859b43ff2e63db4841f96fbd233f27",
"assets/assets/images/ecommerc/ecomerc2.webp": "241e438faa51e575c9333ffc5af93596",
"assets/assets/images/ecommerc/ecomerc3.webp": "8d736180c9d36762ed2f1a466248bef6",
"assets/assets/images/ecommerc/ecomerc4.webp": "9d401612edf4320d9a1b2eac6516b2ed",
"assets/assets/images/ecommerc/ecomerc5.webp": "d778576c366d0eb89fc5887b3468fff4",
"assets/assets/images/ecommerc/ecomerc6.webp": "4f2b238be324f9a4eced13543812465d",
"assets/assets/images/ecommerc/ecomerc7.webp": "d18ee3ab318d86bc2e728154cc2ff7d0",
"assets/assets/images/ecommerc/ecomerc8.webp": "5de1d90515beda7f0968c0a52f6db6af",
"assets/assets/images/ecommerc/ecomerc9.webp": "c1a10218fd0afa7430fd80bb2c93b76f",
"assets/assets/images/image.webp": "7412579e0543dec394eeeb290640633c",
"assets/assets/images/mohamed1.png": "fe5eb5c7062b59696cacc80d872a9d61",
"assets/assets/images/mohamed2.webp": "c051bbe691a2d845d6bac8dc302c1e1f",
"assets/assets/images/preview.webp": "f07135c515b560fb63d9e360e9ad511f",
"assets/assets/images/recipe/0.webp": "3d82a78e429ace4c52b5bfcdd482bd90",
"assets/assets/images/recipe/1.webp": "bcd5eef46cb52fd9db2e2940d9bc669a",
"assets/assets/images/recipe/2.webp": "90e27c9f9b689afbdbebf1973f8c4bde",
"assets/assets/images/recipe/3.webp": "99716a5145a904796657d34a09c1ecb6",
"assets/assets/images/recipe/pase.webp": "6db5014530589e681abe659e0ebca040",
"assets/assets/images/travel/0.webp": "b4a6f16ea5dfe2987d32a07963cd2b95",
"assets/assets/images/travel/1.webp": "374426c460d882b0332e94363ef92717",
"assets/assets/images/travel/2.webp": "726feb26effcf44451628c5e75cba6ab",
"assets/assets/images/travel/3.webp": "bdb225eceabc2e7787fe86dded6baa3e",
"assets/assets/images/travel/pase.webp": "f285f3e1d6fca757232e45e1b88b8908",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "cc6a8c4218542b967423fb8091de1664",
"assets/NOTICES": "7b2c1da34221dbaee2201d1f4cc0cee4",
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
"flutter_bootstrap.js": "e3942c7b6f66a7898d96bac520f024d1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cccf5756e129a62f0dcdc1d131438f0b",
"/": "cccf5756e129a62f0dcdc1d131438f0b",
"main.dart.js": "02f29ae9b3f7ce2df8116dc52dfddb55",
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
