import React from "react";
import {
  githubLogo,
  ethernodeBlack,
  redditLogo,
  discordLogo,
  linkedInLogo,
  twitterLogo
} from "../../../../../assets";
import GridContainer from "../../../UI/Grid/GridContainer";
import GridItem from "../../../UI/Grid/GridItem";
import "./Footer.css";

//functional component for the footer
const Footer = () => (
  <div className="footer">
    <GridContainer>
      <GridItem xs={4} sm={6} md={4} lg={3}>
        <img
          src={ethernodeBlack}
          alt="LogoBlack"
          className="footer-logo"
          title="Ethernode"
        />
      </GridItem>
      <GridItem xs={4} sm={6} md={4} lg={6}>
        <nav>
          <ul>
            <li>
              <a href="https://forum.ethernode.io">Forum</a>
            </li>
          </ul>
        </nav>
      </GridItem>
      <GridItem xs={12} sm={12} md={4} lg={3}>
        <div className="footer-links">
          <a href="https://github.com/ethernodeio">
            <img src={githubLogo} alt="Github Logo" className="social-icon" />
          </a>
          <a href="https://twitter.com/Ethernode_io">
            <img src={twitterLogo} alt="Twitter Logo" className="social-icon" />
          </a>
          <a href="https://www.reddit.com/r/Ethernode">
            <img src={redditLogo} alt="Reddit Logo" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/company/ethernode">
            <img
              src={linkedInLogo}
              alt="LinkedIn Logo"
              className="social-icon"
            />
          </a>
          <a href="https://discord.gg/hXkUpV5">
            {" "}
            <img src={discordLogo} alt="Discord Logo" className="social-icon" />
          </a>
        </div>
      </GridItem>
    </GridContainer>
  </div>
);

export default Footer;
