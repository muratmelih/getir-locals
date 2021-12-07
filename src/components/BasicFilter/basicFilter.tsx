import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useStyles } from "./style";
import TextField from "@mui/material/TextField";
import { globalStyles } from "../../styles/global";

function BasicFilter(props: any) {
  const classes = useStyles();
  const globalClasses = globalStyles();
  const [data, setData] = useState<string[]>(props.data);
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const handleChange = (data: string) => {
    if (selectedData.includes(data)) {
      setSelectedData(selectedData.filter((a) => a != data));
    } else {
      setSelectedData((prevState) => {
        return [...prevState, data];
      });
    }
  };
  useEffect(() => {
      props.applyFilter(selectedData)
  }, [selectedData]);

  return (
    <div>
      <TextField
        variant="outlined"
        className={globalClasses.fullWidth}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      <div className={`${classes.basicFilterContainer} ${globalClasses.marginTop10}`}>
        {data
          .filter((a) => a.toLocaleUpperCase().includes(filter.toLocaleUpperCase()))
          .map((a) => {
            return (
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedData.includes(a)}
                      onChange={(e) => handleChange(a)}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                    />
                  }
                  label={a}
                />
              </FormGroup>
            );
          })}
      </div>
    </div>
  );
}

export default BasicFilter;
