// import React from "react";
// import { GridItem, GridContainer } from "../../UI/Grid";
// import Scene from "./Scene";
// import "./3dScene.css";

// export default function EnkeepScene() {
//   return (
//     <div className="Scene">
//       <GridContainer>
//         <GridItem sm={12} md={12} lg={12}>
//           <div className="placeHolder" />
//         </GridItem>
//         <GridItem sm={12} md={12} lg={12}>
//           <Scene />
//         </GridItem>
//         <GridItem sm={12} md={12} lg={12}>
//           <div className="placeHolder" />
//         </GridItem>
//       </GridContainer>
//     </div>
//   );
// }



import React from "react";
import {
  AppBar,
  withStyles,
  Button,
  Dialog,
  Toolbar,
  IconButton,
  Slide
} from "@material-ui/core";
import Scene from "./Scene"
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing.unit * 2,
    flex: 1
  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EnkeepScene({ classes }) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        View our 3d Model
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
          </Toolbar>
        </AppBar>
        <Scene />
      </Dialog>
    </div>
  );
}

EnkeepScene.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EnkeepScene);
