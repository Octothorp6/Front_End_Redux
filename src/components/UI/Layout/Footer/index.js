import React from "react";
import {
  githubLogo,
  discordLogo,
  linkedInLogo,
  twitterLogo
} from "../../../../assets";
import { GridContainer, GridItem } from "../../../UI/Grid";
import { BottomNavigation, IconButton } from "@material-ui/core";
import "./Footer.css";

//functional component for the footer
const Footer = () => (
  <div className="footer">
    <BottomNavigation>
      <GridContainer>
        <GridItem xs={2} sm={2} lg={2}>
          <IconButton href="/login">Login</IconButton>
        </GridItem>
        <GridItem xs={2} sm={2} lg={2}>
          <IconButton href="https://forum.ethernode.io/">Forum</IconButton>
        </GridItem>
        <GridItem xs={2} sm={2} lg={2}>
          <IconButton>
            <img src={githubLogo} alt="github" style={{ maxWidth: "1.8rem" }} />
          </IconButton>
        </GridItem>
        <GridItem xs={2} sm={2} lg={2}>
          <IconButton>
            <img
              src={twitterLogo}
              alt="github"
              style={{ maxWidth: "1.8rem" }}
            />
          </IconButton>
        </GridItem>
        <GridItem xs={2} sm={2} lg={2}>
          <IconButton>
            <img
              src={linkedInLogo}
              alt="github"
              style={{ maxWidth: "1.8rem" }}
            />
          </IconButton>
        </GridItem>
        <GridItem xs={2} sm={2} lg={2}>
          <IconButton>
            <img
              src={discordLogo}
              alt="github"
              style={{ maxWidth: "1.8rem" }}
            />
          </IconButton>
        </GridItem>
      </GridContainer>
    </BottomNavigation>
  </div>
);
export default Footer;
