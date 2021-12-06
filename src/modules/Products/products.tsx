import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import GridItem from "../../components/GridItem/gridItem";
import { useStyles } from "./style";
import ProductFilter from "../../components/ProductFilter/productFilter";
import Product from "../../components/Product/product";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getPagedAsync, selectItems } from "../../features/items/itemSlice";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { ProductFilterType } from "../../types/productFilter";

function Products() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const pageSizeList = [4, 8, 16];
  const [pageSize, setPageSize] = useState<number>(16);
  const [page, setPage] = useState<number>(1);
  const items = useAppSelector(selectItems);
  const [filters, setFilters] = useState<ProductFilterType>({});

  useEffect(() => {
    dispatch(getPagedAsync({ index: page, pageSize: pageSize, ...filters }));
  }, [page, pageSize, filters]);

  const applyFilters = (
    company?: string,
    tag?: string,
    itemType?: string,
    sortId?: number
  ) => {
    setFilters({ company, tag, itemType, sortId });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.textCenter}>
          <h1>Ürünler</h1>
        </Grid>
        <Grid item xs={12} className={classes.textCenter}>
          <ProductFilter page={page}  applyFilter={applyFilters}></ProductFilter>
        </Grid>
        <Grid item xs={12}>
          <GridItem>sırala</GridItem>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={0}>
            <Grid item xs={10} sm={3}>
              <Stack spacing={2} className={`${classes.margin10}`}>
                <Pagination
                  count={Math.ceil(items.count / pageSize)}
                  page={page}
                  onChange={(e, v) => {
                    setPage(v);
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={2} sm={6}>
              <FormControl>
                <InputLabel id="row-select-lbl">Satır Sayısı</InputLabel>
                <Select
                  className={classes.width100}
                  labelId="row-select-lbl"
                  id="row-select"
                  value={pageSize}
                  label="Satır Sayısı"
                  onChange={(e, v) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {pageSizeList.map((a) => {
                    return <MenuItem value={a}>{a}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        {items.data.map((item, i) => {
          return (
            <Grid key={i} item xs={12} sm={4} md={3}>
              <Product key={i} item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Products;
