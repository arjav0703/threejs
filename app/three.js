"use client";
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ThreeScene = () => {
  useEffect(() => {
    
    const canvas = document.createElement('canvas');
    canvas.id = 'draw';
    document.body.appendChild(canvas);

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true});
    const cube = new THREE.Mesh(geometry, material);

    cube.rotation.y = 0.5;
    cube.rotation.x = 0.5;

    scene.add(cube);

    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor =0.1;

    function animate() {
      window.requestAnimationFrame(animate);

      controls.update();

      renderer.render(scene, camera);

      // Uncomment to animate the cube
      // cube.rotation.z += 0.01;
      // cube.rotation.y += 0.01;
      // cube.scale.z += 0.01;
    }
    animate();

    // Clean up on component unmount
    return () => {
      document.body.removeChild(canvas);
    };
  }, []);

  return null; // This component does not render any JSX
};

export default ThreeScene;
