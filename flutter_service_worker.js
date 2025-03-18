'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "77df172540c7e43684e2508a4598af7c",
".git/description": "b6920d9083c8e76685bcc8db34b8c9bb",
".git/FETCH_HEAD": "ac855812a244638cb3d6129f292583aa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "6e758c95ded6bf52af0216531191bd2c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "63b3946346d73b5cd555f8310fefa9dd",
".git/logs/refs/heads/main": "63b3946346d73b5cd555f8310fefa9dd",
".git/logs/refs/remotes/origin/HEAD": "4f5d1e977d26719b76d4652fdcb08b5c",
".git/logs/refs/remotes/origin/main": "907281ddce2f67421de3395511779a16",
".git/objects/01/6d3d49bd7445842080fb6ca99e9d758c5ccfbc": "f43e7bcfcba87024da4fda5cd26081c6",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/5d18586d74cbf73917697ed0054a5048d3db29": "b1b6dc89ebe90df2b557f21f05197be1",
".git/objects/04/6ef0c7dc98ac51323c5964671fe569a317a4db": "ae686fe048148ad5715bb74a8fa932f3",
".git/objects/05/a7c38974b539906814e8dca03d63ac9b2df909": "620de2a0002815e707d1ccb939fd6be5",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/bf808f671c77e485f2e6ba06eb692f22ed7724": "44c3d3229e625ae12e10438ae80596cd",
".git/objects/08/644bc0976d17cd976c1a6360736732ffe6b70c": "f31cce26247d47a80770b7b7f6749908",
".git/objects/08/b292d6ba122c91ce06a9b85156d7bfe8544f3d": "8b7a6b3175d4af8d4b7ddd88ee30d34e",
".git/objects/09/3c21a59af3293a0f8add48be2e6ba8bf56b02b": "bec738ccbb995c0fea9822b6c3907464",
".git/objects/0c/ccf53d587c9b411c37fe4f9eaf3c820db31b40": "34479f27358cd2b81fdcfd276c00607a",
".git/objects/0d/ba949fadadca049f58cbea62e71d560abd1c0d": "96666418ef902f30d78b4799070b7c98",
".git/objects/0f/779dc3d627db54754ffe67c2783a9a39ad6c27": "b9f73c384a423c630e32e8191497a523",
".git/objects/10/846dbbd9378227788ace85efc95d8a697d71d5": "a326a7e61cefdc1f6622c110f014be76",
".git/objects/17/6a95eed5b5e88af468bd59e0eca2c221654ffb": "af809fe238f9e4b712862545e0762e04",
".git/objects/21/f99c60a7e94a7c72fe4ff88ec5e11c409b9598": "d82b8c9ba8cf267e69122e02450e5868",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/31/029363439a05c0ded7e80dda278b27b9f2236a": "4e8addc1511d7d125637a70d840a50db",
".git/objects/31/7da9b2c0c938892676a7ae8813dd111f6a8a29": "21f3bbe716de015dfe052f46eebf60a2",
".git/objects/36/8d17340da4651c076cc59ab2b0847d98416b06": "b0097987fa81dd077cb6d1788357cad1",
".git/objects/39/facefa0b91886d03fa76325cd4455bf7bbfe0d": "69efbc1524bc387bbbcafb58610da0da",
".git/objects/3b/868fd5a2a7e41e3b4bce80796c42a7f14df460": "54afb43daaf762938724cb2ec386abec",
".git/objects/44/5ee15a9f9b729332d36c584a940b0770f86c68": "de50829d35df9341d324ec21fb3227ea",
".git/objects/53/91d48f5f848d9514ad090463607243a661d928": "a5e4381afb52fb985a411d4249334268",
".git/objects/54/092a3d686432804f6acce318ed53f879d5478c": "22a203ad59b39a93205330ed74af1c2c",
".git/objects/59/40639bc00af129e1316922d7e69c83da189870": "1a530e3050afa3e3d446e6173c98e82c",
".git/objects/5b/dab1f9daaa0224eec50f42fdc9afcae56b83e5": "0027aaa58aadcfef61bc501de09f0c4b",
".git/objects/5d/d4918eecf74fcb5b7200341cbf4f075c345276": "b57e2fca36807227990af705ef67d9da",
".git/objects/5d/d68b8cda454d86518f235e4ce9d4fc51a2a014": "83e36889a9d12121847afa8eb8787a32",
".git/objects/5f/c741d46ab384b235c2a36d13fc55cd37b72cdb": "41b06d7933749062d170b7fcd1564427",
".git/objects/62/f0d32b44e19d855225785759ca930414ca3f6d": "79ac2f474470b763439bb29091b3fccc",
".git/objects/63/3d87354de24edd849ce82cd48260d6209cb2e8": "08539de9ac9cf02f6002d498342c4109",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/c39c8ea13c57eceefa8225562ff98617a1d4cf": "cdb871811a947a2b4839ce1b32a8744b",
".git/objects/69/8f4e27be5c626523c9d17cfeaa75ec84327995": "50a46c356125899ec227344685dba122",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/494aa0aff817096a751a0779cbc73c517325f6": "25b8972e82943eb04e2ef53296b7528f",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/77/3afd2232e19bcd3e25b77cb209dbe871a8ab58": "5798c81bef4060d066bd6c24dfd8ba66",
".git/objects/7a/8c9d2f4616f3b4d31c2b4eb9d9af8f54f23113": "02a4a8d5cdb9eb43677caa1cdd58913b",
".git/objects/7e/85ad80b67d21f39301b9b0c89e42b4c34158ef": "1bfffe38c6b0ebafe562dee7ed48c609",
".git/objects/84/79dd68d70060e4780b79c3e381e7811736aa53": "0297e449c09e06a0b18f79043f78982b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/37d3dd878470ece56ad9eda8fd9de9b0983b58": "d1661c0820db316d832b031c31041ee7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b849eb8069afe68386a6dd7b0c1a6a22ab587d": "4b99c51ed49d30c1dc7230f96d4e8a1f",
".git/objects/8b/f9c66bb145aa3d739fbc06951e1ab3c2e981bd": "7cec059126b3d067a34477c6f26d0280",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/760388ccca3ccd8c198c6bfdbe90d5a656332e": "4ca7f7fc17207fcee16a8d68996020e2",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/3821fc6afe2063455e4c82b074c8c736ab3064": "e1dba7c567d295ea6f45648fe595ae60",
".git/objects/a4/d495602e8ea91441f7829a27219669aac0a152": "c52bb81a6236602705d6bbdf02289fa8",
".git/objects/a5/2f43837e188101f80ac3dca4d4db0559cd3b51": "5f1d5cec0e08c9dff2c6f0cae84af216",
".git/objects/a8/507420842d4b82efe347eee43bd658c24da84d": "1fa5b702cb9040f7870aecbb4ab87276",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/ffc8df2976321987cd3e970add00b02e58cbb8": "5ac0a570f646dc97a0046d76462843e5",
".git/objects/ab/2b384e4d4c21bf9ad2ee29ad73e51454f160a7": "e5516259713f8c594e93c4649f76db19",
".git/objects/ab/d5de1c19dcabd9ed51372da396348267a41648": "d8dfe2c7f967c1d670d624daac56f0ae",
".git/objects/ab/eae19366408c6c635a684057e61ba985a8a0a3": "a3a38db78d15f731830786cd01fa4f1f",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/cc5c554a036b58387db6b5c33522d81f2d9729": "5aaa7cfb09469db11a44067b02367ead",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/d76fd55c52abf96f15fbdc4feea3f537b22ba3": "c853e5d2d9098316b7f6f224e35c0455",
".git/objects/ba/e3e6c4116139cb0c71d7a03a7687b4b5b5e353": "9e86b0c6c8a4efacaaf760549a3e3aa3",
".git/objects/bb/1221b207f22b0a93a93673d1f8b857ac416515": "a9ad0f566e446e7a9d25238219de3b56",
".git/objects/c1/62c777901e95fcad9c4baa31b948a26eeafa76": "513670c7588a059d3a0f94c2a105985e",
".git/objects/c3/377adc5bc64d55a6eb98d178fae9e1b688cb75": "80547d0cb41897feddb73b35076c2c14",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/f15165875f480b63c95b74a7b2736388b1f934": "f68a219dcd17d8e17d1c1a1331632245",
".git/objects/c5/639c2862d524fa1cdbd4edc767542b23b5993d": "21846492f7da9b916d10cf481c5ebb3e",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/ca/7b222196d21a67a12b575f8dbddc3723a0f5d7": "9352c8076d139b2dac8d19784d327d90",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d1/41d17780e0170bb7d7a14c2cffeb27570ebec2": "b895f51694d42dc0f6bed41f37ad89cc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/47eed5c2f8b655e8a13f9bb3c47fddaf0531b8": "09a38b35606d6e4b7c9549bd1a75070c",
".git/objects/dd/95af3507912a06a1787456adbd6f46002ff385": "2cb54bcc124d58ea81e3c2e5c8ce32fb",
".git/objects/dd/b6d729ef53e0484465e18a774f0e17bba3f30c": "374e4234cb62dd8663492cf3991952a9",
".git/objects/df/24a5e514aa7ede12381b41754265ebcfa43994": "50accc2fd4e97f9c1c08dd33a11b8052",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e3/f7b6cbbe8eb5e2bf208a8872520bd96d8fda91": "d270cd40a0177de4051bbda367be2db7",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/5703c69c400b6b695500dfda5fc6b573990350": "533d511d8cfd7ec778f49ef23cd18a5d",
".git/objects/f1/9b1d0f8c3cefcf578eea5a4419dec61ae61a73": "44b25e229464e6c91bb7f800cb044b5b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/da48107861659013d1b4d5df0c454578bb341c": "88ecc70762a7ae268db40cb95b619da5",
".git/objects/f4/089cd18e7fc72ce03d0d720421e990b962fad5": "1dc6b4b8a538a40fa620588453fe5833",
".git/objects/f4/6fae9908491d874df6c609bcf87d23132aeb3f": "21a3c34186279123bdd584c798987d98",
".git/refs/heads/main": "39756eec8041af8bf3752a624f8d100b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "39756eec8041af8bf3752a624f8d100b",
"assets/AssetManifest.bin": "01d7b5acd20d6e8f9accba144af7f474",
"assets/AssetManifest.bin.json": "c49e59b790dfd1f2c41e632d475ec293",
"assets/AssetManifest.json": "567e3bcde5c5367557af1084dbd0f02c",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/adaptive_foreground_icon.png": "ec145603b0fc6c175338b7403da033fd",
"assets/assets/images/Animation_-_1729133288397.gif": "6b985313514f9e28c0ebe925dda14220",
"assets/assets/images/app_launcher_icon.png": "ec145603b0fc6c175338b7403da033fd",
"assets/assets/images/error_image.png": "ec145603b0fc6c175338b7403da033fd",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/LOGO_WM_APPLIANCE_NOVA_casa_alta_reso.png": "ec145603b0fc6c175338b7403da033fd",
"assets/assets/images/wmlogoHouse.png": "25a09d3c00e5a2c62a3abfe5a7444afb",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "ba80942b06699cefeca7e479d74dc636",
"assets/NOTICES": "868ca108126ca2447aebc5069fb89f8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "15c743b5dccf86e37b7f55428375c570",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8633d6cdbd8ed5c6ffdbcbf164db24bb",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/copilot.svg": "b412a5f02e8cef01cdb684b03834cc03",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/flitsmeister.svg": "44ba265e6077dd5bf98668dc2b8baec1",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/kakao.svg": "1c7c75914d64033825ffc0ff2bdbbb58",
"assets/packages/map_launcher/assets/icons/mappls.svg": "1a75722e15a1700115955325fe34502b",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/mapyCz.svg": "f5a198b01f222b1201e826495661008c",
"assets/packages/map_launcher/assets/icons/naver.svg": "ef3ef5881d4a2beb187dfc87e23b6133",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/sygicTruck.svg": "242728853b652fa765de8fba7ecd250f",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tmap.svg": "50c98b143eb16f802a756294ed04b200",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/tomtomgofleet.svg": "5b12dcb09ec0a67934e6586da67a0149",
"assets/packages/map_launcher/assets/icons/truckmeister.svg": "416d2d7d2be53cd772bc59b910082a5b",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5ef3083b85d13a9975207c09e377ffdb",
"icons/app_launcher_icon.png": "ec145603b0fc6c175338b7403da033fd",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e33331ca87577114d271023266ea04c2",
"/": "e33331ca87577114d271023266ea04c2",
"main.dart.js": "161ab4fc62dc9ab9caeb1d43c5156292",
"manifest.json": "ac0b558dd6940169e779724afa5dd88b",
"README.md": "7f4f13c6eae1ddb0aff9af8f57f120c3",
"version.json": "6d5528926da17ebf1aaeb0205082a8ed",
"wmlogoHouse.png": "25a09d3c00e5a2c62a3abfe5a7444afb"};
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
