import { Button } from "@material-ui/core"

const elem = document.getElementById("enkeep");

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
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
    /* WEAK A** IE/Edge */
    elem.msRequestFullscreen();
  } else {
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
    /* WEAK A** IE/Edge */
    document.msExitFullscreen();
  }
}


export const ExitFullScreen = props => {
    return (
        <Button onClick={closeFullscreen} {...props}/>
    )
}

export const FullScreen = props => {
    return (
        <Button onClick={openFullscreen} {...props} />
    )
}