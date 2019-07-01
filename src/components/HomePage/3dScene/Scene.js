import React, { useRef, useEffect } from "react";
import { loadGLTF } from "../../../utils/Helpers";
import { useThree, Canvas, extend, useRender } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

extend({ OrbitControls });
const path =
  "https://raw.githubusercontent.com/Octothorp6/3d-Model/master/EtherNode_Final/Final_2.gltf";

function Controls(props) {
  const { canvas, camera, gl, scene } = useThree();
  const controls = useRef();

  useEffect(() => {
      loadGLTF(path).then(GLTF => {
        scene.add(GLTF.scene);
      })
  }, [scene]);

  scene.background = new THREE.Color('white')
  camera.position.set(10, 10, 10);
  gl.setPixelRatio(window.devicePixelRatio);

  useRender(() => controls.current && controls.current.update(), false);

  return (
    <orbitControls
      ref={controls}
      args={[camera, canvas.parentNode]}
      {...props}
    />
  );
}

export default function Scene() {
  const { scene } = useThree();

  return (
    <>
      <Canvas>
        <Controls
          enableDamping
          enablePan={false}
          dampingFactor={0.1}
          rotateSpeed={0.1}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.8} position={[300, 300, 400]} />
        <spotLight intensity={0.9} position={[300, 400, 400]} />
        <primitive attach="map" object={scene} />
      </Canvas>
    </>
  );
}
