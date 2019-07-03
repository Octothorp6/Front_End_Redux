import React, { useState, forwardRef } from "react";
import {
  AppBar,
  withStyles,
  Button,
  Dialog,
  Toolbar,
  IconButton,
  Slide
} from "@material-ui/core";
import Scene from "./Scene";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EnkeepScene({ classes }) {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button
        variant="outlined"
        size="large"
        style={{ backgroundColor: "#2FCE74", color: "white" }}
        onClick={handleClickOpen}
      >
        View 3d Model
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            EnKeep
          </Toolbar>
        </AppBar>
        <Scene />
      </Dialog>
    </div>
  );
}

const styles = theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "#2FCE74"
  },
  title: {
    marginLeft: theme.spacing.unit * 2,
    flex: 1
  }
});

EnkeepScene.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EnkeepScene);
