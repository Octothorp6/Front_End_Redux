import React from "react";
import { darkHeader } from "../../../../assets";
import { GridContainer, GridItem } from "../../../UI/Grid";
import "./Header.css";

//functional component for the header
const Header = () => (
  <div className="menu-header">
    <GridContainer>
      <GridItem sm={12} md={12} lg={12}>
        <div className="header">
          <img src={darkHeader} alt="EtherNode Logo" className="logo" />
        </div>
      </GridItem>
      <GridItem sm={12} md={12} lg={12}>
        <div className="home-hero">
          <span className="welcomeText">Blockchain</span>&nbsp; &nbsp;
          <span className="middleText">Network Connectivity</span>&nbsp; &nbsp;
          <span className="welcomeText">Made Easy</span>
        </div>
      </GridItem>
    </GridContainer>
  </div>
);

export default Header;
