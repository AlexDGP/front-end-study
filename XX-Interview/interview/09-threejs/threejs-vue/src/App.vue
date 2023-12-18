<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";

// 场景Scene
const scene = new THREE.Scene();
// 摄像机PerspectiveCamera
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.y = 5;
camera.position.z = 2;
camera.position.x = 2;
camera.lookAt(0, 0, 0);

// 渲染函数WebGLRenderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 父箱子
const pGeometry = new THREE.BoxGeometry(1, 1, 1);
const pMaterials = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
  new THREE.MeshBasicMaterial({ color: 0xffff00 }),
  new THREE.MeshBasicMaterial({ color: 0x00ffff }),
  new THREE.MeshBasicMaterial({ color: 0xff00ff }),
];
const pCube = new THREE.Mesh(pGeometry, pMaterials);
pCube.position.set(-5, 0, 0);
scene.add(pCube);

// 子箱子
// const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
// console.log(geometry);
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// cube.position.set(5, 0, 0);
// cube.scale.set(10, 10, 10);
// pCube.add(cube);

// 三角
const triangleGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0]);
const indices = new Uint16Array([0, 1, 2, 2, 3, 0]);

triangleGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(vertices, 3),
);
triangleGeometry.setIndex(new THREE.BufferAttribute(indices, 1));
triangleGeometry.addGroup(0, 3, 0);
triangleGeometry.addGroup(3, 3, 1);

const triangleMaterial0 = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
});
const triangleMaterial1 = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  side: THREE.DoubleSide,
});
const triangleCube = new THREE.Mesh(triangleGeometry, [
  triangleMaterial0,
  triangleMaterial1,
]);
scene.add(triangleCube);

// 坐标轴AxesHelper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.autoRotate = true;

// 渲染
function animate() {
  controls.update();
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// 自适应
window.addEventListener("resize", function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// let btn = document.createElement("button");
// btn.innerHTML = "点击全屏";
// btn.style.position = "absolute";
// btn.style.top = "10px";
// btn.style.left = "10px";
// btn.addEventListener("click", function () {
//   document.body.requestFullscreen();
// });
// document.body.appendChild(btn);
//
// let button2 = document.createElement("button");
// button2.innerHTML = "退出全屏";
// button2.style.position = "absolute";
// button2.style.top = "200px";
// button2.style.left = "10px";
// button2.addEventListener("click", function () {
//   document.exitFullscreen();
// });
// document.body.appendChild(button2);

// UI界面GUI
// const gui = new GUI();
// const folder = gui.addFolder("folder");
// let enevntObj = {
//   fullscreen: function () {
//     document.body.requestFullscreen();
//   },
//   exitFullscreen: function () {
//     document.exitFullscreen();
//   },
// };
// // button
// folder.add(enevntObj, "fullscreen").name("全屏");
// folder.add(enevntObj, "exitFullscreen").name("退出全屏");
// // 拖动条
// folder
//   .add(pCube.position, "x")
//   .min(-10)
//   .max(10)
//   .step(0.1)
//   .name("x轴")
//   .onFinishChange(function (val) {
//     console.log(val);
//   });
// // checkbox
// folder.add(pMaterial, "wireframe").name("线框wireframe");
// // 颜色addColor
// folder.addColor(cube.material, "color").name("颜色");
</script>

<template>
  <div id="app"></div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
canvas {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
</style>
