'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d78f62a00c46bad2852caea68e1de0e4",
".git/config": "91abd2e054ced0ccce876c28b925724d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c48e541b79f77d43a6f36368c8bce0aa",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a247ef689417bf810d4b59ec0fd97057",
".git/logs/refs/heads/gh-pages": "a247ef689417bf810d4b59ec0fd97057",
".git/logs/refs/remotes/origin/gh-pages": "962a921b04b85238419713304a2b3864",
".git/objects/06/37a3e19a088b6facfb0efdd2bebbcd3f8ba063": "fcafffc3b9e76ee62af2c4be2cd7576d",
".git/objects/08/f0ea55c0d389055175a0c6e0f9d74e8261eb4f": "54d433f2d1e12117c41fb5bd58186825",
".git/objects/0c/0a2721a579ee1f00c8536fe1ae66c3e3ef75e1": "771f6ef9b2ea3fb2684d97537c4f2e95",
".git/objects/17/9440186d0abc43170da7a3ed0a9b2703181563": "11bb4192fe5c6b60c15f602fb24ecd38",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/2c/3b189ea4dc5869295ddcc0e60309757c3723ac": "fb42f69ed80bb6e723cde441760fb3fe",
".git/objects/2f/bb856524ac7bf55d3b0ab5818f8677e60d6a89": "3826a3db8ee2911eca2d2d51fca32ea5",
".git/objects/32/807d066d869ed1167de8fcd4e8fbe98d2772b3": "a130a057318a12d9c23799403183d3eb",
".git/objects/32/f872ae9f8d8b5796bc2565da2fa4f1a1d34e40": "886d40e09de4f493219a80771d87873c",
".git/objects/37/dd737d99939c049303c85378dfea85c861475c": "94495533e6281478efecd72f997b9245",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/48/e93bf4b9d506420823a26a0ef55511ed693036": "81ebd0810f02adacb602596753c85c96",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5b/4cd090db80e330c1c19d8901d431a3b9bcc8a5": "a701690a266b6342d2fd00fddffedd6d",
".git/objects/5c/e5434a9452fcfa583c38707a9a282cdf97961a": "8533552eedc2980ee0820aa0dbc77a63",
".git/objects/70/2cf3ef492cc0d4f8a005d876d52b5a2c31b37b": "9d8061bf2f92ea3fe5521e94309943ba",
".git/objects/70/9d4ef3f5239e1162e158b5410a2e393b1da879": "66cd55cd28e0043e4c5b36838afae191",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/bb2de267b545fe65fdfb6ca83e52be0080ba1c": "8df342fe5d0986e7c823bdfbb5e3e743",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/540ba5c2f891ebbfdfb5a5d883e8546775c853": "bfd892a97c0176aaa11cfbc3c95d1582",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/94/48c2aef01f7fb2b183b172d5703cd97bcfaf31": "4f57a89beaa7a2b993b5912b69fc489f",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a3/e501b8acfa3630d3170c4f1815fba02640153d": "21814045803202a76c5f25860524e46a",
".git/objects/a9/8c2587b759939e11a597e24401d911321c8018": "1dffc95e4dcc9859032b81862c76b333",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/cad7c57a504e2aa8d388ddf278fcc67c33f7ef": "692d82d2d96382194dc11141cdfb7529",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/af71cde2b0fe35d4bb4c9172a9fa320370e021": "6d41db5c8904aaee0800009e734a28e8",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e6/24c4ad11792886f0369b135c3741d4a0e5acbf": "31c06a9bff20f4e2ed90157d640a66de",
".git/objects/e7/6984e32471bbc6cad5de288f8eeba2f817a589": "d5d884fe6d251d1c2a0de794139adab7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/41afb1f0e8bea9bc1541ae294491028bde9f49": "eb8608f559613052356b238f72217c1b",
".git/objects/f3/b8ee02742935d6b5fe20a2b37badea90eb00de": "518d4a00f9707a90b977a9e4c7e92391",
".git/objects/f9/b20c8ea4e112c91c8eaf6261c823653cf1b9df": "ad066e4c0c04385d3476dacad7020239",
".git/refs/heads/gh-pages": "cd67f8b4bcb08c9ceb2aad62ed6b9d9c",
".git/refs/remotes/origin/gh-pages": "cd67f8b4bcb08c9ceb2aad62ed6b9d9c",
"assets/AssetManifest.bin": "74bff2ad619f5c147cec6086194a3e5c",
"assets/AssetManifest.bin.json": "101a58a1af1c090d94145bbaa8d7fe9f",
"assets/AssetManifest.json": "b2014086b08258b95f2a5a54858b947e",
"assets/assets/audio/bgm.mp3": "b5072e1ecefa9e098f540e7de2a01fdf",
"assets/assets/audio/correct.mp3": "1e5702328edf5c05d34013a0a0b24566",
"assets/assets/audio/wrong.mp3": "66779c28637f46c53089ccb691333156",
"assets/assets/images/badge.jpg": "f986ba51123ba69eacb918aa2b0367ec",
"assets/assets/images/cover.jpeg": "a09f54c0c4c71e24bd4902227f70d38a",
"assets/assets/images/funny.jpeg": "5d297fb6c4c65b5f0a9ac19bcb328bda",
"assets/assets/images/win.jpeg": "6a9e5c7747925ee3e855271cce7d51d3",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "d0b406aa9d23dc22a2a5e5fcc741c6b7",
"assets/NOTICES": "de8f14973a72e76d39cee40f4a80afcf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "11867573753067ae29e51a279d99b396",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ec72d89a29e8d0a1b92c9f109c047ef3",
"/": "ec72d89a29e8d0a1b92c9f109c047ef3",
"main.dart.js": "21804adcc76f84ca66fbfd85c662d6b0",
"manifest.json": "a09970651d09646edeca2d283a3fe565",
"version.json": "79bb3f3ee45384d0ff60b78ce168d356"};
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
