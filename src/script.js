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
new HDRLoader().load("/3D-Shoe/env/2k.hdr", (env) => {
  env.mapping = THREE.EquirectangularReflectionMapping;
  env.colorSpace = THREE.SRGBColorSpace;
  sc.environment = env;
});

// مدل
let model = null;
const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/3D-Shoe/draco/"); // چون در static/draco هست
gltfLoader.setDRACOLoader(dracoLoader);

gltfLoader.load("/3D-Shoe/models/glb/shoej.glb", (gltf) => {
  model = gltf.scene;
  console.log(model);
  model.scale.set(0.5, 0.5, 0.5);
  model.position.y = -0.5;
  sc.add(model);

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

  let btn1 = document.querySelector(".btn--green");
  btn1.addEventListener("click", () => {
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
