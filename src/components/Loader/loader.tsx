import React, { useEffect } from "react";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import { useAppSelector } from "../../app/hooks";
import { itemsStatus } from "../../reducers/items/itemSlice";
import { companyStatus } from "../../reducers/companies/companySlice";
import { loadingStatus } from "../../reducers/loading/loadingSlice";
function Loader(props: any) {
  const itemsLoading = useAppSelector(itemsStatus);
  const companyLoading = useAppSelector(companyStatus);
  const isGlobalLoading = useAppSelector(loadingStatus);

  return (
    <BlockUi tag="div" blocking={itemsLoading || companyLoading ||isGlobalLoading}>
      {props.children}
    </BlockUi>
  );
}

export default Loader;
