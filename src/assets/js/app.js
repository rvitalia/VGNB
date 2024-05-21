import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

window.addEventListener('DOMContentLoaded', () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    // Освещение
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
    
    // Создание DRACOLoader
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('path/to/draco_decoder/'); // Укажите путь к декодеру Draco
    
    // Создание GLTFLoader и передача DRACOLoader
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    
    // Загрузка модели GLTF
    loader.load('assets/images/222.glb', function (gltf) {
        const model = gltf.scene;
        scene.add(model);
        
        // Поместить модель внутрь секции vgnb
        const vgnbSection = document.querySelector('.vgnb__model');
        vgnbSection.appendChild(renderer.domElement);
        vgnbSection.appendChild(model);
    });
});

