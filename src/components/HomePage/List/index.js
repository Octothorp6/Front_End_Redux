import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline",
    fontSize: "16px",
    color: "white"
  },
  header: {
    fontSize: "18px",
    color: "#2fce74"
  }
});

const listItem = ({ classes, ...props }) => (
  <ListItem>
    <ListItemAvatar>
      <Avatar style={{ borderRadius: 0 }} alt={props.alt} src={props.icon} />
    </ListItemAvatar>
    <ListItemText
      primary={
        <React.Fragment>
          <span className={classes.header}>{props.header}</span>
        </React.Fragment>
      }
      secondary={
        <React.Fragment>
          <span className={classes.inline}>{props.text}</span>
        </React.Fragment>
      }
    />
  </ListItem>
);

listItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(listItem);
