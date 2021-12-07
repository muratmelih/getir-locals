import React, { useEffect } from "react";
import { selectCard, getAllCard } from "../../reducers/cards/cardSlice";
import { globalStyles, classList } from "../../styles/global";
import { useStyles } from "./style";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import MuiCard from "@mui/material/Card";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { update, deleteItem } from "../../reducers/cards/card.api";
import { CardType } from "../../types/card";
import { showLoading, hideLoading } from "../../reducers/loading/loadingSlice";

function Card(props: any) {
  const dispatch = useAppDispatch();
  const cardList = useAppSelector(selectCard);
  const classes = useStyles();
  const globalClasses = globalStyles();

  const updateCard = (item: CardType, addition: number) => {
    dispatch(showLoading());
    var found = cardList.find((a) => a.slug == item.slug);
    if (found) {
      let postData: CardType = {
        ...found,
        quantity: found.quantity + addition,
      };
      if (found.quantity + addition == 0) {
        deleteItem(postData).then((a) => {
          if (a.data.success) {
            dispatch(hideLoading());
            dispatch(getAllCard());
          }
        });
      } else {
        update(postData).then((a) => {
          if (a.data.success) {
            dispatch(hideLoading());
            dispatch(getAllCard());
          }
        });
      }
    }
  };

  return (
    <div className={classList([globalClasses.margin10, classes.borderBlue])}>
      <MuiCard sx={{ minWidth: "100%" }}>
        <div
          className={classList([
            globalClasses.margin20,
            classes.itemsContainer,
          ])}
        >
          {cardList.map((a) => {
            return (
              <div
                className={classList([classes.cardItem, classes.borderBottom])}
              >
                <div className={classes.infoContainer}>
                  <div>{a.name}</div>
                  <div
                    className={classList([
                      globalClasses.marginTop10,
                      globalClasses.textBlue,
                    ])}
                  >
                    $ {a.price * a.quantity}
                  </div>
                </div>
                <div
                  className={classList([
                    classes.actionsContainer,
                    globalClasses.textCenter,
                  ])}
                >
                  <FormControl
                    variant="standard"
                    className={classList([
                      classes.cardActionForm,
                      globalClasses.textCenter,
                    ])}
                  >
                    <Input
                      value={a.quantity}
                      className={classList([
                        globalClasses.textCenter,
                        classes.cardInput,
                      ])}
                      startAdornment={
                        <InputAdornment position="start">
                          <span
                            className={classList([
                              classes.addornment,
                              globalClasses.textBlue,
                            ])}
                            onClick={(e) => {
                              updateCard(a, -1);
                            }}
                          >
                            -
                          </span>
                        </InputAdornment>
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <span
                            className={classList([
                              classes.addornment,
                              globalClasses.textBlue,
                            ])}
                            onClick={(e) => {
                              updateCard(a, +1);
                            }}
                          >
                            +
                          </span>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
              </div>
            );
          })}
          <div
            className={classList([
              classes.priceBox,
              globalClasses.textCenter,
              globalClasses.marginTop10,
              globalClasses.textBlue,
            ])}
          >
            $ {cardList.reduce((a, b) => a + (b.quantity * b.price || 0), 0)}
          </div>
        </div>
      </MuiCard>
    </div>
  );
}

export default Card;
