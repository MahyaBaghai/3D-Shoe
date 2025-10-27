import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { HDRLoader } from "three/examples/jsm/loaders/HDRLoader.js";
import GUI from "lil-gui";

// صحنه
const sc = new THREE.Scene();

// GUI
const gui = new GUI({ title: "shoe controls" });

// HDR environment
new HDRLoader().load("/env/2k.hdr", (env) => {
  env.mapping = THREE.EquirectangularReflectionMapping;
  env.colorSpace = THREE.SRGBColorSpace;
  sc.environment = env;
});

// مدل
let model = null;
const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/"); // چون در static/draco هست
gltfLoader.setDRACOLoader(dracoLoader);

gltfLoader.load("/models/gltf/shoej.gltf", (gltf) => {
  model = gltf.scene;
  console.log(model);
  model.scale.set(0.5, 0.5, 0.5);
  model.position.y = -0.5;
  sc.add(model);

  model.children[0].material.color.set("#40A999"); //دوخت دور نزدیک به کفی کفش
  model.children[1].material.color.set("#40A999"); //جای بند پشت کفش مربعی
  model.children[2].material.color.set("#fff"); //لژ کفش
  model.children[3].material.color.set("#fff"); //تیک روی کفش
  model.children[4].material.color.set("#40A999"); // بدنه دور کفش
  model.children[5].material.color.set("#40A999"); //یه تیکه از بغل تا روی کفش
  model.children[18].material.color.set("#40A999");
  model.children[6].material.color.set("#40A999"); // نوای بالای کفش
  model.children[7].material.color.set("#fff"); //یه تیکه از روی کفش کنار بندها
  model.children[19].material.color.set("#fff");
  model.children[8].material.color.set("#40A999"); //مارک هک شده و دور مچ
  model.children[11].material.color.set("#fff"); // بدنه داخل کفش
  model.children[15].material.color.set("#40A999"); //داخلی کفش که دیده نمیشه فقط یک سایه روی کفی میندازه
  model.children[17].material.color.set("#40A999"); //مارک روی کفش بالای بندها
  model.children[20].material.color.set("#000"); //کفی داخل کفش
  model.children[21].material.color.set("#40A999"); //کفی بیرونی
  model.children[9].material.color.set("#40A999");

  let btn1 = document.querySelector(".btn--green");
  btn1.addEventListener("click", () => {
    document.body.style.background = "#c6f5ee";
    model.children[0].material.color.set("#40A999");
    model.children[1].material.color.set("#40A999");
    model.children[2].material.color.set("#fff");
    model.children[3].material.color.set("#fff");
    model.children[4].material.color.set("#40A999");
    model.children[5].material.color.set("#40A999");
    model.children[18].material.color.set("#40A999");
    model.children[6].material.color.set("#40A999");
    model.children[7].material.color.set("#fff");
    model.children[19].material.color.set("#fff");
    model.children[8].material.color.set("#40A999");
    model.children[11].material.color.set("#fff");
    model.children[15].material.color.set("#40A999");
    model.children[17].material.color.set("#40A999");
    model.children[20].material.color.set("#000");
    model.children[21].material.color.set("#40A999");
    model.children[9].material.color.set("#40A999");
  });

  let btn2 = document.querySelector(".btn--purple");
  btn2.addEventListener("click", () => {
    document.body.style.background = "#dcbeff";
    model.children[0].material.color.set("#6800e2");
    model.children[1].material.color.set("#6800e2");
    model.children[2].material.color.set("#fff");
    model.children[3].material.color.set("#fff");
    model.children[4].material.color.set("#6800e2");
    model.children[5].material.color.set("#6800e2");
    model.children[18].material.color.set("#6800e2");
    model.children[6].material.color.set("#6800e2");
    model.children[7].material.color.set("#fff");
    model.children[19].material.color.set("#fff");
    model.children[8].material.color.set("#6800e2");
    model.children[11].material.color.set("#fff");
    model.children[15].material.color.set("#6800e2");
    model.children[17].material.color.set("#6800e2");
    model.children[20].material.color.set("#000");
    model.children[21].material.color.set("#6800e2");
    model.children[9].material.color.set("#6800e2");
  });

  let btn3 = document.querySelector(".btn--red");
  btn3.addEventListener("click", () => {
    document.body.style.background = "#ffcfd5";
    model.children[0].material.color.set("#880d1e");
    model.children[1].material.color.set("#880d1e");
    model.children[2].material.color.set("#fff");
    model.children[3].material.color.set("#fff");
    model.children[4].material.color.set("#880d1e");
    model.children[5].material.color.set("#880d1e");
    model.children[18].material.color.set("#880d1e");
    model.children[6].material.color.set("#880d1e");
    model.children[7].material.color.set("#fff");
    model.children[19].material.color.set("#fff");
    model.children[8].material.color.set("#880d1e");
    model.children[11].material.color.set("#fff");
    model.children[15].material.color.set("#880d1e");
    model.children[17].material.color.set("#880d1e");
    model.children[20].material.color.set("#000");
    model.children[21].material.color.set("#880d1e");
    model.children[9].material.color.set("#880d1e");
  });

  let btn4 = document.querySelector(".btn--blue");
  btn4.addEventListener("click", () => {
    document.body.style.background = "#899df8";
    model.children[0].material.color.set("#072AC8"); 
    model.children[1].material.color.set("#072AC8"); 
    model.children[2].material.color.set("#fff"); 
    model.children[3].material.color.set("#fff"); 
    model.children[4].material.color.set("#072AC8"); 
    model.children[5].material.color.set("#072AC8"); 
    model.children[18].material.color.set("#072AC8");
    model.children[6].material.color.set("#072AC8"); 
    model.children[7].material.color.set("#fff"); 
    model.children[19].material.color.set("#fff");
    model.children[8].material.color.set("#072AC8"); 
    model.children[11].material.color.set("#fff"); 
    model.children[15].material.color.set("#072AC8");
    model.children[17].material.color.set("#072AC8"); 
    model.children[20].material.color.set("#000"); 
    model.children[21].material.color.set("#072AC8"); 
    model.children[9].material.color.set("#072AC8");
  });

  let btn5 = document.querySelector(".btn--orange");
  btn5.addEventListener("click", () => {
    document.body.style.background = "#f0c096";
    model.children[0].material.color.set("#a54e02"); 
    model.children[1].material.color.set("#a54e02"); 
    model.children[2].material.color.set("#fff"); 
    model.children[3].material.color.set("#fff"); 
    model.children[4].material.color.set("#a54e02"); 
    model.children[5].material.color.set("#a54e02"); 
    model.children[18].material.color.set("#a54e02");
    model.children[6].material.color.set("#a54e02"); 
    model.children[7].material.color.set("#fff"); 
    model.children[19].material.color.set("#fff");
    model.children[8].material.color.set("#a54e02"); 
    model.children[11].material.color.set("#fff"); 
    model.children[15].material.color.set("#a54e02");
    model.children[17].material.color.set("#a54e02"); 
    model.children[20].material.color.set("#000"); 
    model.children[21].material.color.set("#a54e02"); 
    model.children[9].material.color.set("#a54e02");
  });
});

// نور
const aml = new THREE.AmbientLight("#ffffff", 1);
sc.add(aml);

const direct = new THREE.DirectionalLight("#ffffff", 2);
direct.position.set(1, 1, 1);
sc.add(direct);

// دوربین
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.set(0, 0.3, 3);
sc.add(camera);

// رندرر
const canvas = document.querySelector(".web");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(size.width, size.height);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 2;

// کنترل‌ها
const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.minDistance = 2;
orbit.maxDistance = 3.5;

// GUI controls
gui.close();
gui.add(renderer, "toneMapping", {
  no: THREE.NoToneMapping,
  linear: THREE.LinearToneMapping,
  reinhard: THREE.ReinhardToneMapping,
  ACES: THREE.ACESFilmicToneMapping,
  cineon: THREE.CineonToneMapping,
});
gui.add(renderer, "toneMappingExposure", 0, 4, 1).name("Exposure");
gui.add(aml, "intensity", 0, 1, 0.1).name("aml light");
gui.add(direct, "intensity", 0, 1, 0.1).name("directional light");

// Resize
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

// Animation loop
const clock = new THREE.Clock();
const animation = () => {
  orbit.update();
  renderer.render(sc, camera);
  window.requestAnimationFrame(animation);
};
animation();
