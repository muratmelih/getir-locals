import React from "react";
import Chip from "@mui/material/Chip";
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
      <div> {props.item.manufacturer}</div>
      <div> {props.item.itemType}</div>
      <div> {props.item.price} $</div>
      <div className={classes.chipContainer}>
        {props.item.tags.map((a:string) => {
          return  <Chip className={classes.chip} label={a} />
        })}
       
      </div>
    </div>
  );
}

export default Product;
