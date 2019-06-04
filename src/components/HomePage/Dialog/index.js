import React from "react";
import PropTypes from "prop-types";
import { Button, Dialog, withMobileDialog } from "@material-ui/core";
import WizardForm from "../checkout2";

function ResponsiveDialog(props) {
  const { fullScreen } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#2FCE74", color: "white" }}
        onClick={handleClickOpen}
      >
        Order Now!
      </Button>
      <Dialog
        style={{ overflowX: "hidden" }}
        fullScreen={fullScreen}
        open={open}
        scroll={"paper"}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      > 
        <WizardForm />
        {/* <Checkout handleClose={handleClose} /> */}
      </Dialog>
    </div>
  );
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(ResponsiveDialog);
