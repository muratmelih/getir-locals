import React from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { isPropertySignature } from "typescript";

function GridItem(props: any) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom:"15px"
  }));
  return <Item>{props.children}</Item>;
}

export default GridItem;