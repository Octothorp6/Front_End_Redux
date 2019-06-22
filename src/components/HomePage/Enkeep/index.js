import React from "react";
import GridContainer from "../../UI/Grid/GridContainer";
import GridItem from "../../UI/Grid/GridItem";
import LinkButton from "../../UI/Buttons";
import { nodeImg } from "../../../assets";
import CustomListItem from "../List/CustomList";
import { List } from "@material-ui/core";
import "./enkeep.css";

const Enkeep = () => {
  return (
    <React.Fragment>
      <h4>Shipping Early July 2019.</h4>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={8}>
          <img src={nodeImg} alt="nodeImg" style={{ maxWidth: "100%" }} />
            <LinkButton
              to="/checkout"
            >
              Order Now!
            </LinkButton>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <List>
            <div className="enkeepList">
              <CustomListItem
                header="Operating System"
                text="ENOS Linux 5 Kernel"
              />
              <CustomListItem header="Processor" text="RK3399 64 Bit A72/A53" />
              <CustomListItem header="Memory" text="4GB Dual Channel LPDDR4" />
              <CustomListItem header="Storage" text="Samsung 970 EVO m.2 SSD" />
            </div>
            <br />
          </List>
        </GridItem>
      </GridContainer>
    </React.Fragment>
  );
};

export default Enkeep;
