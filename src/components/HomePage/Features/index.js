import React from "react";
import { etcLogo, test, ethereumLogo } from "../../../assets";
import "./Features.css";
import GridItem from "../../UI/Grid/GridItem";
import GridContainer from "../../UI/Grid/GridContainer";
import { Row } from "react-grid-system";
import List from "@material-ui/core/List";
import ListItem from "../List";

const Features = () => (
  <section className="home-features">
    <h2>Supported Blockchains/Testnets</h2>
    <Row>
      <GridContainer style={{ textAlign: "center" }}>
        <GridItem xs={12} md={6} lg={6}>
          <div className="blockChains">
            <img
              src={etcLogo}
              alt="feature nodes"
              style={{ maxWidth: "5em" }}
            />
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
    </Row>
  </section>
);

export default Features;
