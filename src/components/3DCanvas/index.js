import React, { useRef, useMemo, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, extend, useThree, useRender } from "react-three-fiber";
import "./styles.css";

const path =
  "https://raw.githubusercontent.com/Octothorp6/3d-Model/master/EtherNode_Final/Final_2.gltf";

extend({ OrbitControls });

function Model({ url }) {
  const [gltf, set] = useState();
  useMemo(() => new GLTFLoader().load(url, set), [url]);
  return gltf ? <primitive object={gltf.scene} /> : null;
}

function Controls(props) {
  const { canvas, camera } = useThree();
  const controls = useRef();
  camera.position.set(20,20,20);
  useRender(() => controls.current && controls.current.update());
  
  return (
    <orbitControls
      ref={controls}
      args={[camera, canvas.parentNode]}
      {...props}
    />
  );
}

function Lights(props) {

}



export default function EnkeepThree() {
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
        <Model url={path} />
      </Canvas>
    </>
  );
}
