import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useStyles } from "./style";
import ProductFilter from "../../components/ProductFilter/productFilter";
import Product from "../../components/Product/product";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getPagedAsync,
  selectItems,
  selectItemTypes,
} from "../../reducers/items/itemSlice";
import { ProductFilterType } from "../../types/productFilter";
import Header from "../../components/Header/header";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";

function Products() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const items = useAppSelector(selectItems);
  const types = useAppSelector(selectItemTypes);
  const [pageSize, setPageSize] = useState<number>(16);
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<ProductFilterType>({});
  const [itemType, setItemType] = useState<string>();

  useEffect(() => {
    if (!itemType) setItemType(types[0]);
  }, [types]);

  useEffect(() => {
    setFilters((prevState) => {
      return {...prevState,itemType:itemType}
    });
  }, [itemType]);
  useEffect(() => {
    dispatch(
      getPagedAsync({
        index: page,
        pageSize: pageSize,
        ...filters,
      })
    );
  }, [page, pageSize, filters]);

  const applyFilters = (company?: string, tag?: string, sortId?: number) => {
    setFilters({ company, tag, itemType, sortId });
  };
  return (
    <>
      <Header />
      <div className={classes.productsContainer}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <ProductFilter
                page={page}
                applyFilter={applyFilters}
              ></ProductFilter>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container spacing={0}>
                <div className={classes.bigText}>Products</div>
                <Grid item xs={12} className={classes.margin10}>
                  <Stack
                    direction="row"
                    spacing={1}
                    className={classes.margin10}
                  >
                    {types.map((a) => {
                      return (
                        <Chip
                          label={a}
                          size="small"
                          variant="outlined"
                          onClick={(e) => setItemType(a)}
                          clickable
                        />
                      );
                    })}
                  </Stack>
                </Grid>
                <Card sx={{ minWidth: "100%" }}>
                  <Grid container spacing={0}>
                    {items.data.map((item, i) => {
                      return (
                        <Grid key={i} item xs={12} sm={4} md={3}>
                          <Product key={i} item={item} />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Card>

                <Grid item xs={12}>
                  <Stack spacing={2} className={classes.paginatorContainer}>
                    <Pagination
                      count={Math.ceil(items.count / pageSize)}
                      page={page}
                      onChange={(e, v) => {
                        setPage(v);
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.textCenter}></Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Products;
