import React from "react";
import List from "@material-ui/core/List";
import CustomListItem from "../List/CustomList";
import { classicNodeExplorer } from "../../../assets";
import { GridContainer, GridItem } from "../../UI/Grid";

const EnOs = () => (
  <>
    <GridContainer>
      <GridItem xs={12} sm={12} md={8} lg={8}>
        <img
          src={classicNodeExplorer}
          style={{ maxWidth: "100%", display: "flex" }}
          alt="nodeExplorer"
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={4} lg={4}>
        <List>
          <CustomListItem
            header="Block Explorer"
            text="Search transactions with ease"
          />
          <CustomListItem
            header="Solidity IDE"
            text="Write/Compile/Sign/Deploy in a few easy steps"
          />
          <CustomListItem header="Wallet" text="Manage addresses and tokens" />
          <CustomListItem
            header="Enchat"
            text="P2P encrypted messenger using shh protocol"
          />
        </List>
      </GridItem>
    </GridContainer>
    <h4>Available for Download Soon!</h4>
  </>
);

export default EnOs;
