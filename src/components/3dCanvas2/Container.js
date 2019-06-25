import React, { useState } from "react";
import { Dialog, Button, IconButton, Slide, Toolbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Scene from "./Scene";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="large"
        onClick={handleClickOpen}
        style={{ backgroundColor: "#2FCE74", color: "white" }}
      >
        3D Model
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar>
          <IconButton edge="start" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Scene />
      </Dialog>
    </React.Fragment>
  );
}
