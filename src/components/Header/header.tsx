import React from "react";
import Chip from "@mui/material/Chip";
import { useStyles } from "./style";

function Header(props: any) {
  const classes = useStyles();
  return <div className={classes.header}></div>;
}

export default Header;
