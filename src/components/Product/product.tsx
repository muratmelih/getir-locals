import React from "react";
import Chip from "@mui/material/Chip";
import { useStyles } from "./style";
import { globalStyles } from "../../styles/global";

function Product(props: any) {
  const classes = useStyles();
  const globalClasses = globalStyles();
  return (
    <div className={classes.itemContainer}>
      <div className={classes.imageContainer}>
        <img
          src={`/images/sample/${props.item.itemType}.jpg`}
          className={classes.itemImage}
        ></img>
      </div>
      <div className={globalClasses.textBlue}>
        <strong>{props.item.price} $</strong>
      </div>
      <div className={classes.itemName}>
        <strong>{props.item.name}</strong>
      </div>
      <div className={classes.chipContainer}>
        {props.item.tags.map((a: string) => {
          return <Chip className={classes.chip} label={a} />;
        })}
      </div>
    </div>
  );
}

export default Product;
