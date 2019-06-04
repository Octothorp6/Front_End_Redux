import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
    justifyContent: "center"
  },
  inline: {
    fontSize: "14px",
    color: "white"
  },
  header: {
    fontSize: "16px",
    color: "#2fce74"
  }
});

const CustomListItem = props => {
  const { classes } = props;
  return (
    <ListItem>
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
};

CustomListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomListItem);
