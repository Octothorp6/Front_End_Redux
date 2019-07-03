import React from "react";
import { etcLogo, test, ethereumLogo } from "../../../assets";
import { GridItem, GridContainer } from "../../UI/Grid";
import List from "@material-ui/core/List";
import ListItem from "../List";
import "./Features.css";

const Features = () => (
  <section className="home-features">
    <h2>Supported Blockchains/Testnets</h2>
    <GridContainer style={{ textAlign: "center", display: "flex" }}>
      <GridItem xs={12} md={6} lg={6}>
        <div className="blockChains">
          <img src={etcLogo} alt="feature nodes" style={{ maxWidth: "5em" }} />
          <h3>Ethereum Classic</h3>
          <GridItem xs={12} md={12} lg={12}>
            <div className="testNets">
              <List>
                <ListItem
                  header={`Kotti`}
                  alt="kotti"
                  icon={test}
                  text={`POA testnet for ETC.`}
                />
                <ListItem
                  header={`Morden`}
                  alt="morden"
                  icon={test}
                  text={`POW testnet for ETC.`}
                />
              </List>
            </div>
          </GridItem>
        </div>
      </GridItem>
      <GridItem xs={12} md={6} lg={6}>
        <div className="blockChains">
          <img
            src={ethereumLogo}
            alt="hardware img"
            style={{ maxWidth: "5em" }}
          />
          <h3>Ethereum</h3>
          <div className="testNets">
            <List>
              <ListItem
                header={`Goerli`}
                alt="kotti"
                icon={test}
                text={`POA testnet for ETH.`}
              />
              <ListItem
                header={`Ropsten`}
                alt="morden"
                icon={test}
                text={`POW testnet for ETH.`}
              />
            </List>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  </section>
);

export default Features;
