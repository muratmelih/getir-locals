import React from "react";
import Chip from "@mui/material/Chip";
import { useStyles } from "./style";
import { globalStyles } from "../../styles/global";
import { Product } from "../../types/product";

import { update, add } from "../../reducers/cards/card.api";
import { selectCard, getAllCard } from "../../reducers/cards/cardSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { CardType } from "../../types/card";
import {showLoading,hideLoading} from "../../reducers/loading/loadingSlice"; 

function ProductComponent(props: any) {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const globalClasses = globalStyles();
  const cardList = useAppSelector(selectCard);

  const addToCard = (data: Product) => {
    dispatch(showLoading());
    var found = cardList.find((a) => a.name == data.name);
    if (found) {
      let postData: CardType = { ...found, quantity: (found.quantity + 1) };
      update(postData).then((a) => {
        if (a.data.success) {
          dispatch(hideLoading());
          dispatch(getAllCard());
        }
      });
    } else {
      let postData: CardType = {
        name: data.name,
        slug: data.slug,
        quantity: 1,
        price: data.price,
      };
      add(postData).then((a) => {
        if (a.data.success) {
          dispatch(hideLoading());
          dispatch(getAllCard());
        }
      });
    }
  };
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
      <button
        type="button"
        className={classes.addCardButton}
        onClick={(e) => {
          addToCard(props.item);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default ProductComponent;
