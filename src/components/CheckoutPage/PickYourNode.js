import React from "react";
import { Button, Typography } from "@material-ui/core";
import { products } from "./products";
import "./checkoutPages.css";

const PickYourNode = ({ addItemToCart, removeItemFromCart }) => {
  return (
    <React.Fragment>
      <div className="pickYourNode">
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
      </div>
    </React.Fragment>
  );
};

export default PickYourNode;
