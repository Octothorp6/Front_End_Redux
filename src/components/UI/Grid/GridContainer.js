import React from "react";
import PropTypes from "prop-types";
import { withStyles, Grid } from "@material-ui/core";

function GridContainer({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

const style = {
  grid: {
    marginRight: "0px",
    marginLeft: "0px"
  }
};

GridContainer.defaultProps = {
  className: ""
};

GridContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(style)(GridContainer);
