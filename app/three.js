"use client";
import { useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );

    cube.rotation.y = 0.5;
    cube.rotation.x = 0.5;


    scene.add( cube );

    camera.position.z = 3;

    const canvas = document.querySelector('#draw');

    const renderer = new THREE.WebGLRenderer({ canvas:canvas });
    renderer.setSize( window.innerWidth, window.innerHeight );

    function animate() {
        window.requestAnimationFrame( animate );
        renderer.render( scene, camera );
        
        cube.rotation.z += 0.01;
        cube.rotation.y += 0.01;
        cube.scale.z += 0.01;
    }
    animate();
    // renderer.render( scene, camera );
    // Clean up on component unmount
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null; // This component does not render any JSX
};

export default ThreeScene;
