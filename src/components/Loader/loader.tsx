import React, { useEffect } from "react";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import { useAppSelector } from "../../app/hooks";
import { itemsStatus } from "../../features/items/itemSlice";
function Loader(props: any) {
  const itemsLoading = useAppSelector(itemsStatus);

  return (
    <BlockUi tag="div" blocking={itemsLoading || false}>
      {props.children}
    </BlockUi>
  );
}

export default Loader;
