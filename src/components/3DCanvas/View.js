import React, { Suspense } from "react";
import { nodeImg } from "../../assets";

// Lazy loading for the 3d Model
const EnkeepThree = React.lazy(() => import("./index"));

export default function Lazy3d() {
  return (
    <React.Fragment>
      <Suspense fallback={<> <img src={nodeImg} alt="node"/> </>}>
        <EnkeepThree />
      </Suspense>
    </React.Fragment>
  );
}
