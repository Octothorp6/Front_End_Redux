import React, { useState, useMemo } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Model() {
    const path = "https://raw.githubusercontent.com/Octothorp6/3d-Model/master/EtherNode_Final/Final_2.gltf";
    const [gltf, set] = useState();
    useMemo(() => new GLTFLoader().load(path, set), [path]);
    return gltf ? <primitive object={gltf.scene} /> : null;
}