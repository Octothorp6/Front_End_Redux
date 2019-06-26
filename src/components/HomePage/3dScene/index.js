import React from "react";
import { GridItem, GridContainer } from "../../UI/Grid";
import { WithLazy, WithSuspense } from "../../../utils/Helpers"
import "./3dScene.css";

const Scene = WithLazy(() => import('./Scene'));

export default function EnkeepScene() {
  return (
    <div className="Scene">
      <GridContainer>
        <GridItem sm={12} md={12} lg={12}>
          {WithSuspense(Scene)}
        </GridItem>
      </GridContainer>
    </div>
  );
}
