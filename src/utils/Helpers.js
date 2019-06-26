import React, { lazy, Suspense } from "react";
import { CircularProgress } from "@material-ui/core"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//ALL HELPER FUNCTIONS WILL BE PREPENDED WITH THE KEYWORD "WITH" 
//TO FOLLOW REACT CONVENTION

// LAZY LOADING COMPONENT HELPER FUNCTIONS
export const WithAsyncComponent = Component => {
  return props => (
    <React.Fragment>
      <Component {...props} />
    </React.Fragment>
  );
};

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