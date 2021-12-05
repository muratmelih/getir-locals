import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { useStyles } from "./style";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getAsync,
  selectCompanies,
} from "../../features/companies/companySlice";

function ProductFilter() {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const companies = useAppSelector(selectCompanies);
  
  const types = [{ name: "shirt" }, { name: "mug" }];
  useEffect(() => {
    dispatch(getAsync());
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <div className={classes.margin10}>
          <Autocomplete
            className={classes.fullWidth}
            disablePortal
            id="brand-filter"
            options={companies}
            sx={{ width: 300 }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Marka" />}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.name}
              </Box>
            )}
            onChange={(e, v) => {
              console.log(e, v);
            }}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className={classes.margin10}>
          <TextField
            id="tag-filter"
            label="Tag"
            variant="outlined"
            className={classes.fullWidth}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        <div className={classes.margin10}>
          <Autocomplete
            className={classes.fullWidth}
            id="type-filter"
            options={types}
            sx={{ width: 300 }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} label="Ürün Tipi" />
            )}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.name}
              </Box>
            )}
            onChange={(e, v) => {
              console.log(e, v);
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default ProductFilter;
