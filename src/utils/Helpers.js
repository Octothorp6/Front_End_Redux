import React, { Suspense } from "react";

export const asyncComponent = Component => {
  return props => (
    <React.Fragment>
      <Component {...props} />
    </React.Fragment>
  );
};

const FallBack = <div> <h1 style={{color:"blue"}}> HIIIIIII </h1> </div> ;

export default function WithSuspense(Component) {
  return (
    <Suspense fallback={e => <FallBack />}>
      <Component />
    </Suspense>
  );
};
