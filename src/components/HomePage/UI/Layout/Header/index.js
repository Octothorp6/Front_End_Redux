import React from "react";
import { darkHeader } from "../../../../../assets";
import GridContainer from "../../../UI/Grid/GridContainer";
import GridItem from "../../../UI/Grid/GridItem";
import "./Header.css";

//functional component for the header
const Header = () => (
  <div className="menu-header">
    <GridContainer>
      <GridItem lg={12}>
        <div className="header">
          <img src={darkHeader} alt="EtherNode Logo" className="logo" />
        </div>
      </GridItem>
    </GridContainer>
  </div>
);

export default Header;
