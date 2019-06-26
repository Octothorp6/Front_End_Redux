import React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const path = "https://raw.githubusercontent.com/Octothorp6/3d-Model/master/EtherNode_Final/Final_2.gltf";

export default function Model() {
    const scene = new THREE.Scene();
    loadGLTF(path).then(res => {
        scene.add(res.scene)
    })
    THREE.Cache.enabled = true;
    
    return <primitive object={scene} />;
}

//=================================================================================
// PROMISE EXPIREMENT 
export const loadGLTF = (url) => {
    return new Promise(resolve => {
        new GLTFLoader().load(url, resolve);
    });
};
