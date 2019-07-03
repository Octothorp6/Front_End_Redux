import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@material-ui/core"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// HELPER FUNCTIONS 
// LAZY LOADING COMPONENT HELPER FUNCTIONS
export const WithLazy = factory => {
  const Component = lazy(factory)
  return Component;
}

export const WithSuspense = Component => {
  const FallBack = <div> <CircularProgress /> </div> ;
  return (
    <Suspense fallback={`${FallBack}`}>
      <Component />
    </Suspense>
  );
};

//THREEJS HELPER FUNCTIONS
export const loadGLTF = url => {
  return new Promise(resolve => {
    new GLTFLoader().load(url, resolve);
  });
};


export const loadTexture = url => {
  return new Promise(resolve => {
    new THREE.TextureLoader().load(url, resolve);
  })
};