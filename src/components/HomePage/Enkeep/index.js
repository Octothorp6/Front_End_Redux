import React from "react";
import GridContainer from "../../UI/Grid/GridContainer";
import GridItem from "../../UI/Grid/GridItem";
import LinkButton from "../../UI/Buttons";
import CustomListItem from "../List/CustomList";
import { nodeImg } from "../../../assets";
import { List } from "@material-ui/core";
import "./enkeep.css";

const Enkeep = () => {
  return (
    <React.Fragment>
      <h4>Shipping TBD.</h4>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={8}>
          <img src={nodeImg} alt="nodeImg" style={{ maxWidth: "100%" }} />
          <LinkButton to="/checkout">Order Now!</LinkButton>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <List>
            <div className="enkeepList">
              <CustomListItem header="Storage" text="M.2 NVME SSD" />
              <CustomListItem header="Operating System" text="EnOS Linux Based Distro" />
              <CustomListItem header="Memory" text="4GB Dual Channel LPDDR4" />
              <CustomListItem header="Processor" text="RK3399 64 Bit A72/A53" />

            </div>
            <br />
          </List>
        </GridItem>
      </GridContainer>
    </React.Fragment>
  );
};

export default Enkeep;
