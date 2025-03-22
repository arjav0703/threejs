"use client";
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ThreeScene = () => {
  useEffect(() => {
    
    const canvas = document.createElement('canvas');
    canvas.id = 'draw';
    document.body.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe:true })
    const Boxgeometry = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(Boxgeometry, material);
    
    const Spheregeometry = new THREE.SphereGeometry(1, 10, 10);
    const sphere = new THREE.Mesh(Spheregeometry, material);
    cube.rotation.y = 0.5;
    cube.rotation.x = 0.5;

    //scene.add(cube);
    scene.add(sphere);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor =0.01;

    function animate() {
      window.requestAnimationFrame(animate);

      controls.update();

      renderer.render(scene, camera);

      // cube.rotation.z += 0.01;
      // cube.rotation.y += 0.01;
      // cube.scale.z += 0.01;
    }
    animate();

    return () => {
      document.body.removeChild(canvas);
    };
  }, []);

};

export default ThreeScene;
