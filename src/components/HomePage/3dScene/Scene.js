import React, { Fragment, useRef, useEffect, useState } from "react";
import { loadGLTF } from "../../../utils/Helpers";
import { useThree, Canvas, extend, useRender } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CircularProgress, Typography } from "@material-ui/core";
import { GridItem, GridContainer } from "../../UI/Grid";

extend({ OrbitControls });
const path =
  "https://raw.githubusercontent.com/Octothorp6/3d-Model/master/EtherNode_Final/Final_2.gltf";

function Controls(props) {
  const { canvas, camera, gl } = useThree();
  const controls = useRef();

  camera.position.set(20, 20, 20);
  gl.setPixelRatio(window.devicePixelRatio);
  gl.setSize(window.innerWidth, window.innerHeight);

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
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    loadGLTF(path)
      .then(GLTF => {
        scene.add(GLTF.scene);
      })
      .then(() =>
        setTimeout(() => {
          setLoaded(true);
        }, 1000)
      );
  }, [scene]);

  return isLoaded ? (
    <Fragment>
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
    </Fragment>
  ) : (
    <Fragment>
      <GridContainer justify="center">
        <div className="loading" style={{ marginTop: "10rem" }}>
          <GridItem xs={12} sm={12} lg={12}>
            <Typography variant="title" style={{ color: "black" }}>
              Loading 3d Model...
            </Typography>
            <CircularProgress size={200} style={{ color: "#2FCE74" }} />
          </GridItem>
        </div>
      </GridContainer>
    </Fragment>
  );
}
