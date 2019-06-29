import React from "react";
import { mapImg } from "../../../assets";
import { GridContainer, GridItem } from "../../UI/Grid";
import "./Map.css";

const HomeMap = () => (
  <div className="home-map">
    <br />
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} lg={12}>
        <div>
          <h2>A Globally Distributed Network of Peers.</h2>
          <h5 style={{ color: "black" }}>
            Join this free and secure distributed public network of Ethereums
            today, it even has blockchains!
          </h5>
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} lg={12}>
        <div className="home-map-image">
          <img src={mapImg} alt="Global node hosting blockchain map" />
          <div className="ring-container">
            <div className="ringring" />
            <div className="circle" />
          </div>
          <div className="ring-container2">
            <div className="ringring" />
            <div className="circle" />
          </div>
          <div className="ring-container3">
            <div className="ringring" />
            <div className="circle" />
          </div>
        </div>
      </GridItem>
    </GridContainer>
    <br />
  </div>
);

export default HomeMap;
