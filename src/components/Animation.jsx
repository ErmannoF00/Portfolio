import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class ThreeJSBrainAnimation extends Component {
  componentDidMount() {
    let scene, renderer, camera, model;
    const clock = new THREE.Clock();

    const MODEL_PATH = "https://cdn.glitch.global/abd8d192-1278-4a3a-9e70-e0ef49b239cc/brain.glb?v=1688911527101";
    const backgroundColor = 0x0a192f;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(0.35 * window.innerWidth, 0.35 * window.innerHeight);
    renderer.shadowMap.enabled = true;

    const container = document.getElementById("brain-model");
    container.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 40);

    const loader = new GLTFLoader();
    loader.load(
      MODEL_PATH,
      (gltf) => {
        model = gltf.scene;
        model.scale.set(10, 10, 10);
        model.position.y = -5;

        model.traverse((node) => {
          if (node.isMesh) {
            node.castShadow = true;
            node.receiveShadow = true;
          }
        });

        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading brain model:", error);
      }
    );

    // Lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(-10, 20, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const floorGeometry = new THREE.PlaneGeometry(5000, 5000);
    const floorMaterial = new THREE.MeshPhongMaterial({
      color: backgroundColor,
      shininess: 0
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -11;
    floor.receiveShadow = true;
    scene.add(floor);

    // Animate
    function animate() {
      requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    }

    animate();
  }

  render() {
    return <div id="brain-model" style={{ width: "100%", height: "100%" }} />;
  }
}

export default ThreeJSBrainAnimation;
