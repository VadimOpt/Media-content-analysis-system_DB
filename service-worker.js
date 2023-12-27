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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "472bd52ec98cf4dd7d7d7e3f164f801f"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.7c021192.css",
    "revision": "02119bbddd45eebbd15ed4a055dd9a1e"
  },
  {
    "url": "assets/img/changeRole.650aca7b.png",
    "revision": "650aca7b04a067d2de85556930b032ac"
  },
  {
    "url": "assets/img/createUser.dfcdc0e5.png",
    "revision": "dfcdc0e5bd851492cd97a1ff32d5ac07"
  },
  {
    "url": "assets/img/deleteUser.7917f7a4.png",
    "revision": "7917f7a4d69db604bd9e4b6ae1a42b3e"
  },
  {
    "url": "assets/img/error.5dea4e6b.png",
    "revision": "5dea4e6b0f2ecb070acdd5bc67765e9c"
  },
  {
    "url": "assets/img/getUserById.d60be837.png",
    "revision": "d60be837b9c07e958bcbe05d3d74e979"
  },
  {
    "url": "assets/img/getUsers.bd859534.png",
    "revision": "bd8595349aebf19bd80088ab379f060e"
  },
  {
    "url": "assets/img/relational_schema.06c8bb4c.jpg",
    "revision": "06c8bb4c67301f964ac3ade6cd210bf6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c54ca976.js",
    "revision": "201e11bcc00a68ce62e902f710155229"
  },
  {
    "url": "assets/js/10.1f8e435c.js",
    "revision": "e065eca5ea686ec9f05f4e15eeee584a"
  },
  {
    "url": "assets/js/13.49ec8f3d.js",
    "revision": "0f0d801fb2bc1ab5f53132d891c1062a"
  },
  {
    "url": "assets/js/14.a990469c.js",
    "revision": "45777450b85a76658cde80305f571b48"
  },
  {
    "url": "assets/js/15.fdbdca3a.js",
    "revision": "67115c10eaec154093cb282048bd4123"
  },
  {
    "url": "assets/js/16.2d058451.js",
    "revision": "f4d4e74a353bac1eacc8a2cab2728edd"
  },
  {
    "url": "assets/js/17.f9ef6581.js",
    "revision": "141faa78ec76669c393963397cb7f407"
  },
  {
    "url": "assets/js/18.e9764451.js",
    "revision": "26ecbd497c584c0f35b4f6c8221fd86d"
  },
  {
    "url": "assets/js/19.144aa9f3.js",
    "revision": "9e60978f51b6a272287ea7698ec95a4c"
  },
  {
    "url": "assets/js/2.64832b14.js",
    "revision": "923d3c01c8e665b1ca8e66d13eb7474a"
  },
  {
    "url": "assets/js/20.824c164a.js",
    "revision": "fa14f4d8c52f87ed7b2c269f9ab2cb10"
  },
  {
    "url": "assets/js/21.734c43da.js",
    "revision": "480adfd63a1786e1f9884eaf548f714d"
  },
  {
    "url": "assets/js/22.2393f69a.js",
    "revision": "f36aaf35fb799e91da30cae5a0e808a8"
  },
  {
    "url": "assets/js/23.366f581e.js",
    "revision": "c88a901a31499a9eaf3c30be8235065b"
  },
  {
    "url": "assets/js/24.1d5758b5.js",
    "revision": "6c323b1cde5a479d65ee5ffb27663663"
  },
  {
    "url": "assets/js/25.718ac426.js",
    "revision": "d991b2f33832e46ad0e8cb036b7aa81d"
  },
  {
    "url": "assets/js/26.16cb992f.js",
    "revision": "33d158f99c35bac05be3b57893792c98"
  },
  {
    "url": "assets/js/27.d8475d26.js",
    "revision": "3d9406c62d77deef595f9734280e8e89"
  },
  {
    "url": "assets/js/28.f879fb2e.js",
    "revision": "2e53b2daae36d621384a2424babdf65d"
  },
  {
    "url": "assets/js/29.c7731492.js",
    "revision": "7e681bd62e1e37f2373a0ef264eb4a0f"
  },
  {
    "url": "assets/js/3.60bba995.js",
    "revision": "be0de2729fe4acf2c646df30d9a8e65e"
  },
  {
    "url": "assets/js/30.2cdd3003.js",
    "revision": "50a564219a71cb8e90e6c80e674c947e"
  },
  {
    "url": "assets/js/31.529e9731.js",
    "revision": "8973e5d9c618a0da48aef00914d0fc55"
  },
  {
    "url": "assets/js/32.942cd175.js",
    "revision": "5e381d5676d97b68d97fc7f2ff4f2f81"
  },
  {
    "url": "assets/js/33.aea22939.js",
    "revision": "4345cd0682bcaac63ec476155518c885"
  },
  {
    "url": "assets/js/34.ab31fd50.js",
    "revision": "ae946a31032f3e6a01ac9cdb4475cca6"
  },
  {
    "url": "assets/js/35.76fd9de1.js",
    "revision": "b6d21218fb1b60cf4c792e0478d97c30"
  },
  {
    "url": "assets/js/36.cb4b7edf.js",
    "revision": "d6cb0d2c3dc24ae6c11e6f1d6f7f79de"
  },
  {
    "url": "assets/js/37.a0a25aa1.js",
    "revision": "47e07634c31bd26bb1dd33520e521830"
  },
  {
    "url": "assets/js/38.70401eb7.js",
    "revision": "ada4ab15c1a0826e34c5bad72c36aa65"
  },
  {
    "url": "assets/js/39.e6aa9465.js",
    "revision": "b557347dae886972716cdc8b4b45230e"
  },
  {
    "url": "assets/js/4.4c4472f5.js",
    "revision": "48e6efff84dfc9633bfeb464fb7aaf1a"
  },
  {
    "url": "assets/js/41.3fe40e51.js",
    "revision": "d33b8fe489e7938b5294cab96d1a7faf"
  },
  {
    "url": "assets/js/5.fa775c3e.js",
    "revision": "91c9abe11eda00a87af1a4408b1c8409"
  },
  {
    "url": "assets/js/6.d26b4d2c.js",
    "revision": "d5d778a29b099b4480c33547ac3651a3"
  },
  {
    "url": "assets/js/7.99d80768.js",
    "revision": "70a552088b98d19277c3b95880123258"
  },
  {
    "url": "assets/js/8.e39ef453.js",
    "revision": "a53498e9ae2cf834bc30d2c44c3c0be4"
  },
  {
    "url": "assets/js/9.1a9c7768.js",
    "revision": "b344120c5d163a728ce559cce35eac92"
  },
  {
    "url": "assets/js/app.8351296a.js",
    "revision": "4bd4f95232be6a007fdb68dcbbbcae07"
  },
  {
    "url": "assets/js/vendors~docsearch.2d737b4b.js",
    "revision": "294b247c6ab62b4e7e84055aafee5eb6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "7f0f9497074feb1c5aadd4b56baee78e"
  },
  {
    "url": "design/index.html",
    "revision": "9df36e39b66b2eba6a548f6de148ce20"
  },
  {
    "url": "index.html",
    "revision": "60e8a5e8b4fc4083525113e9b319c1a6"
  },
  {
    "url": "intro/index.html",
    "revision": "04c34f3ba81cdce548414182d6ce1aa0"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "88e20bf0d929d188dc304afbbe43af95"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e51dcfe6ff6fdb278b41c48217647c1c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "bb21b2929608dfc1e3fcdd5331e6e735"
  },
  {
    "url": "software/index.html",
    "revision": "61be27a30223f5d8bfd56c61bb282f56"
  },
  {
    "url": "test/index.html",
    "revision": "204e4f9fa61ebc1a5e067db71c316591"
  },
  {
    "url": "use cases/index.html",
    "revision": "be0e0358f86b805d0bccdaf891c84f3b"
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
