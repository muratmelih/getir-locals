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
import { globalStyles } from "../../styles/global";
import BasicFilter from "../BasicFilter/basicFilter";
import { selectTags } from "../../reducers/items/itemSlice";

function ProductFilter(props: any) {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const globalClasses = globalStyles();
  const companies = useAppSelector(selectCompanies);
  const tags = useAppSelector(selectTags);
  const [company, setCompany] = useState<string[]>([]);
  const [tag, setTag] = useState<string[]>([]);
  const [type, setType] = useState<any>(null);
  const [sortType, setSortType] = useState<number | null>(1);


  useEffect(() => {
    dispatch(getAllCompanies());
  }, []);

  useEffect(() => {
    props.applyFilter(company, tag, sortType);
  }, [company, tag, type, sortType]);

  const applyCompanyFilter=(data:string[])=>{
    setCompany(data);
  }
  const applyTagFilter=(data:string[])=>{
    setTag(data);
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div>Sort</div>

        <Card sx={{ minWidth: "100%" }} className={globalClasses.marginTop10}>
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

        <Card sx={{ minWidth: "100%" }} className={globalClasses.marginTop10}>
          <div className={classes.margin10}>
            <BasicFilter data={companies} applyFilter={applyCompanyFilter} />
          </div>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <div>Tags</div>

        <Card sx={{ minWidth: "100%" }} className={globalClasses.marginTop10}>
          <div className={classes.margin10}>
            <BasicFilter data={tags}  applyFilter={applyTagFilter}/>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductFilter;
