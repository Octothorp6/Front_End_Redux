import React from "react";
import {
  githubLogo,
  discordLogo,
  linkedInLogo,
  twitterLogo
} from "../../../../assets";
import { GridContainer, GridItem } from "../../../UI/Grid";
import { BottomNavigation, withStyles, BottomNavigationAction } from "@material-ui/core";
import IconBtn from "../../Buttons/IconButton";
import PropTypes from "prop-types";

//functional component for the footer
const Footer = ({ classes }) => (
  <div className={classes.layout}>
    <BottomNavigation>
      <div className={classes.buttons}>
        <GridContainer>
          <GridItem xs={2} sm={2} lg={2}>
            <IconBtn to="/login">Login</IconBtn>
          </GridItem>
          <GridItem xs={2} sm={2} lg={2}>
            <IconBtn to="https://forum.ethernode.io/">Forum</IconBtn>
          </GridItem>
          <GridItem xs={2} sm={2} lg={2}>
            <IconBtn to="https://github.com/ethernodeio">
              <img
                src={githubLogo}
                alt="github"
                style={{ maxWidth: "1.8rem" }}
              />
            </IconBtn>
          </GridItem>
          <GridItem xs={2} sm={2} lg={2}>
            <IconBtn to="https://twitter.com/Ethernode_io">
              <img
                src={twitterLogo}
                alt="twitter"
                style={{ maxWidth: "1.8rem" }}
              />
            </IconBtn>
          </GridItem>
          <GridItem xs={2} sm={2} lg={2}>
            <IconBtn to="https://www.linkedin.com/company/ethernode">
              <img
                src={linkedInLogo}
                alt="linkedIn"
                style={{ maxWidth: "1.8rem" }}
              />
            </IconBtn>
          </GridItem>
          <GridItem xs={2} sm={2} lg={2}>
            <IconBtn to="https://discord.com">
              <img
                src={discordLogo}
                alt="discord"
                style={{ maxWidth: "1.8rem" }}
              />
            </IconBtn>
          </GridItem>
        </GridContainer>
      </div>
    </BottomNavigation>
  </div>
);

const styles = theme => ({
  layout: {
    bottom: "0",
    margin: "auto",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  buttons: {
    marginTop: theme.spacing.unit,
    minWidth: "100%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      minWidth: "100",
      paddingRight: "1.5em"
    }
  }
});

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
