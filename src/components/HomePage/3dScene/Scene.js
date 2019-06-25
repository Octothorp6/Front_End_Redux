import React, { lazy, useRef } from "react";
import * as THREE from "three";
import { useThree, Canvas, extend, useRender } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import WithSuspense from "../../../utils/Helpers";

// const Model = lazy(() => {
//   return Promise.all([
//     import("./3DModel"),
//     new Promise(resolve => setTimeout(resolve, 300))
//   ]).then(([moduleExports]) => moduleExports);
// });

const Model = lazy(() => import("./3DModel"));

extend({ OrbitControls });

function Controls(props) {
  const { canvas, camera, gl, scene } = useThree();
  camera.position.set(20, 20, 20);
  gl.setPixelRatio(window.devicePixelRatio);
  scene.background = new THREE.Color( 'white' )
  const controls = useRef();
  useRender(() => controls.current && controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, canvas.parentNode]}
      {...props}
    />
  );
}

export default function Scene() {
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
        {WithSuspense(Model)}
      </Canvas>
    </>
  );
}
