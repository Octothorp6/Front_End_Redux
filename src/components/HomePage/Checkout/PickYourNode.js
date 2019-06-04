import React from "react";
import { Button, Typography } from "@material-ui/core";
import { addItemToCart, removeItemFromCart } from "../../../store/actions";
import { connect } from "react-redux";
import { products } from "./products.js";

const PickYourNode = ({ addItemToCart, removeItemFromCart }) => {
  return (
    <React.Fragment>
      {products.map((item, index) => {
        return (
          <div key={index}>
            <Typography variant="subheading">
              {item.itemDesc} &nbsp; ${item.itemCost}
            </Typography>
            <Button
              id={item.itemId}
              variant="contained"
              color="primary"
              onClick={() => addItemToCart(item)}
            >
              Add Item
            </Button>
            &nbsp;
            <Button
              id={item.itemId}
              variant="contained"
              color="primary"
              onClick={() => removeItemFromCart(item.itemId)}
            >
              Remove
            </Button>
          </div>
        );
      })}
    </React.Fragment>
  );
}

const mapDispatchToProps = {
  addItemToCart,
  removeItemFromCart
};

export default connect(mapDispatchToProps)(PickYourNode);
