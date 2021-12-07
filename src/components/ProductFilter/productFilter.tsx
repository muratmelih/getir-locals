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
} from "../../features/companies/companySlice";
import { Manufacturer } from "../../types/manufacturer";
import { sortData, SortType } from "../../types/sortType";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function ProductFilter(props: any) {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const companies = useAppSelector(selectCompanies);
  const [company, setCompany] = useState<Manufacturer | null>(null);
  const [tag, setTag] = useState<string>("");
  const [type, setType] = useState<any>(null);
  const [sortType, setSortType] = useState<number | null>(null);

  const types = [{ name: "shirt" }, { name: "mug" }];
  

  useEffect(() => {
    dispatch(getAllCompanies());
  }, []);

  useEffect(() => {
    props.applyFilter(company?.slug, tag, type?.name,sortType);
  }, [company, tag, type,sortType]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <div className={classes.margin10}>
          <Autocomplete
            className={classes.fullWidth}
            disablePortal
            id="brand-filter"
            options={companies}
            sx={{ width: 300 }}
            value={company}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Marka" />}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.name}
              </Box>
            )}
            onChange={(e, v) => {
              setCompany(v);
            }}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
        <div className={classes.margin10}>
          <TextField
            id="tag-filter"
            label="Tag"
            variant="outlined"
            value={tag}
            className={classes.fullWidth}
            onChange={(e) => {
              setTag(e.target.value);
            }}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={3}>
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
      <Grid item xs={12} sm={3}>
        <div className={classes.margin10}>
          <FormControl className={classes.fullWidth}>
            <InputLabel id="row-select-lbl">Sırala</InputLabel>
            <Select
              labelId="row-select-lbl"
              id="row-select"
              value={sortType}
              label="Sırala"
              onChange={(e: any, v) => {
                console.log("sort",e,v);
                setSortType(e.target.value);
              }}
            >
              {sortData.map((a) => {
                return <MenuItem value={a.id}>{a.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProductFilter;
