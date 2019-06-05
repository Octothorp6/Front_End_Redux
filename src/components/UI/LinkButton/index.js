import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router"
import {Button} from "@material-ui/core";

const LinkButton = props => {
    const { history, location, match, staticContext, to, onClick, size, ...rest}  = props 
    return (
        <Button {...rest}
          size="large"
          variant="contained"
          style={{ backgroundColor: "#2FCE74", color: "white" }}
          onClick={(event => {
              onclick && onClick(event) 
              history.push(to)
          })}
        />
    )
}

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withRouter(LinkButton);