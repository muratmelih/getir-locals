import React, { useEffect } from "react";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import { useAppSelector } from "../../app/hooks";
import { itemsStatus } from "../../reducers/items/itemSlice";
import { companyStatus } from "../../reducers/companies/companySlice";
function Loader(props: any) {
  const itemsLoading = useAppSelector(itemsStatus);
  const companyLoading = useAppSelector(companyStatus);

  return (
    <BlockUi tag="div" blocking={itemsLoading || companyLoading}>
      {props.children}
    </BlockUi>
  );
}

export default Loader;
