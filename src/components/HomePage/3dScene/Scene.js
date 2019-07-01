import React, { useRef, useEffect } from "react";
import { loadGLTF, loadTexture } from "../../../utils/Helpers";
import { useThree, Canvas, extend, useRender } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

function Controls(props) {
  const { canvas, camera, gl, scene } = useThree();
  const controls = useRef();
  const path = process.env.REACT_APP_3DMODEL_URL;
  const texture = process.env.REACT_APP_TEXTURE_URL;

  useEffect(() => {
    Promise.all([
      loadTexture(texture).then(TXTE => {
        scene.background = TXTE;
      }),
      loadGLTF(path).then(GLTF => {
        scene.add(GLTF.scene);
      })
    ]);
  }, [scene, path, texture]);

  camera.position.set(20, 20, 20);
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
