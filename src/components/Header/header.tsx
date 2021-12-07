import React from "react";
import Chip from "@mui/material/Chip";
import { useStyles } from "./style";
import { globalStyles } from "../../styles/global";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CardComponent from "../../components/Card/card";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {  selectCard } from "../../reducers/cards/cardSlice";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

function Header(props: any) {
  const classes = useStyles();
  const cardList = useAppSelector(selectCard);
  const globalClassses = globalStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <div className={classes.header}>
      
<Button
        id="card-btn"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={classes.cardButton}
      >
        <LocalMallIcon/>  $ {cardList.reduce((a, b) => a + (b.quantity * b.price || 0), 0)}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'card-btn',
        }}
      >
        <CardComponent/>
      </Menu>
      
  </div>;
}

export default Header;
