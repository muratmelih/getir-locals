import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import { useStyles } from "./style";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  getAllCompanies,
  selectCompanies,
} from "../../reducers/companies/companySlice";
import { Manufacturer } from "../../types/manufacturer";
import { sortData, SortType } from "../../types/sortType";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Card from "@mui/material/Card";

function ProductFilter(props: any) {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const companies = useAppSelector(selectCompanies);
  const [company, setCompany] = useState<Manufacturer | null>(null);
  const [tag, setTag] = useState<string>("");
  const [type, setType] = useState<any>(null);
  const [sortType, setSortType] = useState<number | null>(1);

  const types = [{ name: "shirt" }, { name: "mug" }];

  useEffect(() => {
    dispatch(getAllCompanies());
  }, []);

  useEffect(() => {
    props.applyFilter(company?.slug, tag, sortType);
  }, [company, tag, type, sortType]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div>Sort</div>

        <Card sx={{ minWidth: "100%" }}>
          <div className={classes.margin10}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                value={sortType}
                name="sort-radio-group"
                onChange={(e: any, v) => {
                  setSortType(Number(e.target.value));
                }}
              >
                {sortData.map((a) => {
                  return (
                    <FormControlLabel
                      value={a.id}
                      control={<Radio />}
                      label={a.name}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <div>Brands</div>

        <Card sx={{ minWidth: "100%" }}>
          <div className={classes.margin10}>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                value={sortType}
                name="sort-radio-group"
                onChange={(e: any, v) => {
                  setSortType(Number(e.target.value));
                }}
              >
                {sortData.map((a) => {
                  return (
                    <FormControlLabel
                      value={a.id}
                      control={<Radio />}
                      label={a.name}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.margin10}>
          <Autocomplete
            className={classes.fullWidth}
            id="type-filter"
            options={types}
            value={type}
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
              setType(v);
            }}
          />
        </div>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
}

export default ProductFilter;
