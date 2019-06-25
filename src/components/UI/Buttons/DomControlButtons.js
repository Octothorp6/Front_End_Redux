import React, { useRef } from "react";
import { Button, IconButton, Icon } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

let elem = useRef();

// DOM FUNCTIONS
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
}

//==========================================================================
//BUTTONS
export const EnterFullScreen = () => (
    <Button ref={elem} onClick={() => openFullscreen}>
      Open 3d Model
    </Button>
);

export const ExitFullScreen = () => (
  <IconButton edge="start" ref={elem} onClick={() => closeFullscreen}>
    <CloseIcon />
  </IconButton>
)

