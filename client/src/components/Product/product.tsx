import React from "react";
import { useStyles } from "./style";

function Product(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.itemContainer}>
      <div>
        <img
          src={`/images/sample/${props.item.itemType}.jpg`}
          className={classes.itemImage}
        ></img>
      </div>
      <div className={classes.itemName}> {props.item.name}</div>
      <div className={classes.itemDescription}> {props.item.description}</div>
      <div> {props.item.itemType}</div>
      <div> {props.item.price} $</div>
    </div>
  );
}

export default Product;
