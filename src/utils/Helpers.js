import React, { Suspense } from "react";
import { CircularProgress } from "@material-ui/core"

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

export default function WithSuspense(Component) {
  const FallBack = <div> <CircularProgress /> </div> ;
  return (
    <Suspense fallback={`${FallBack}`}>
      <Component />
    </Suspense>
  );
};
