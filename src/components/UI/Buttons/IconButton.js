import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const IconButton = props => {
    const { to, size, ...rest}  = props 
    return (
        <Button {...rest}
          variant="flat"
          size={size}
          onClick={() => {
            window.location.href = to
          }}
        />
    )
}

IconButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default IconButton;