import React from "react";
import { GridItem, GridContainer } from "../../UI/Grid";
import Scene from "./Scene";
import "./3dScene.css";

export default function EnkeepScene() {
  return (
    <div className="Scene">
      <GridContainer>
        <br />
        <br />
        <GridItem sm={12} md={12} lg={12}>
          <Scene />
        </GridItem>
      </GridContainer>
    </div>
  );
}
