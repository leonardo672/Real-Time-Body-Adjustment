import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create the Three.js scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up the renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

// Lighting setup
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight.position.set(2, 2, 5).normalize();
scene.add(directionalLight);

// const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
// scene.add(ambientLight);

//     const spotLight = new THREE.SpotLight(0xffffff, 0.8);
//     spotLight.position.set(0, 5, 10);
//     spotLight.castShadow = true;
//     scene.add(spotLight);

// OrbitControls for camera movement
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;

// GLTFLoader to load the model
const loader = new GLTFLoader();
let model;
const controlsDiv = document.getElementById('controls');
const coordinatesDisplay = document.getElementById('coordinatesDisplay');

loader.load(
    'F20.glb', // Path to your model
    function (gltf) {
        model = gltf.scene;
        scene.add(model);

        // Set the model's position to the center
        model.position.set(0, 0, 0);

        model.traverse(function (node) {
            // Check if the node has morphTargetInfluences
            if (node.morphTargetInfluences) {
                const morphDict = node.morphTargetDictionary;
                const morphInfluences = node.morphTargetInfluences;

                Object.keys(morphDict).forEach(function (key) {
                    const index = morphDict[key];

                    // Create a slider for each shape key
                    const label = document.createElement('label');
                    label.textContent = key;
                    const input = document.createElement('input');
                    input.type = 'range';
                    input.min = 0;
                    input.max = 1;
                    input.step = 0.01;
                    input.value = morphInfluences[index];

                    // Update the shape key influence when slider changes
                    input.addEventListener('input', function () {
                        morphInfluences[index] = parseFloat(this.value);
                    });

                    controlsDiv.appendChild(label);
                    controlsDiv.appendChild(input);
                });
            }
        });
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error('An error occurred loading the model:', error);
    }
);

// Handle window resizing
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Position controls
const positionX = document.getElementById('positionX');
const positionY = document.getElementById('positionY');
const positionZ = document.getElementById('positionZ');

positionX.addEventListener('input', () => {
    if (model) model.position.x = parseFloat(positionX.value);
});

positionY.addEventListener('input', () => {
    if (model) model.position.y = parseFloat(positionY.value);
});

positionZ.addEventListener('input', () => {
    if (model) model.position.z = parseFloat(positionZ.value);
});

// Scale controls
const scaleWidth = document.getElementById('scaleWidth');
const scaleHeight = document.getElementById('scaleHeight');

scaleWidth.addEventListener('input', () => {
    if (model) model.scale.x = parseFloat(scaleWidth.value);
});

scaleHeight.addEventListener('input', () => {
    if (model) model.scale.y = parseFloat(scaleHeight.value);
});

function updateCoordinates() {
    if (model) {
        coordinatesDisplay.innerText = `X: ${model.position.x.toFixed(2)}, Y: ${model.position.y.toFixed(2)}, Z: ${model.position.z.toFixed(2)}`;
    }
}

document.getElementById('positionX').addEventListener('input', (e) => {
    if (model) model.position.x = parseFloat(e.target.value);
    updateCoordinates();
});
document.getElementById('positionY').addEventListener('input', (e) => {
    if (model) model.position.y = parseFloat(e.target.value);
    updateCoordinates();
});
document.getElementById('positionZ').addEventListener('input', (e) => {
    if (model) model.position.z = parseFloat(e.target.value);
    updateCoordinates();
});


// Animation loop to render the scene
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Start the animation loop
animate();