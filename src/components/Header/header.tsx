import React from "react";
import Chip from "@mui/material/Chip";
import { useStyles } from "./style";
import { globalStyles } from "../../styles/global";

function Header(props: any) {
  const classes = useStyles();
  const globalClassses = globalStyles();
  return <div className={classes.header}></div>;
}

export default Header;
