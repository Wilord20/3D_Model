import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
const loader = new GLTFLoader();
let shiba;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0xffffff)); // Hex for white color

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Make camera moves smoother

loader.load(
    './shiba.glb', // Replace with the path to your Shiba model
    function (gltf) {
        shiba = gltf.scene;
        scene.add(shiba);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  controls.update(); // Update controls with damping
  renderer.render(scene, camera);
}

animate();