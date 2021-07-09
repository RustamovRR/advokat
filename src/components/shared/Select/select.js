import React, { useState } from "react";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { selectInputStyle } from "./selectStyle";
import { StyledArrow } from "../../../globalStyles/Icons";

const SelectInput = (props) => {
  const classes = selectInputStyle();
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
          IconComponent={StyledArrow}
          classes={{ root: classes.selectRoot }}
          className={classes.select}
          disableUnderline={true}
        >
          <MenuItem value={1}>{props.one}</MenuItem>
          <MenuItem value={2}>{props.two}</MenuItem>
          <MenuItem value={3}>{props.three}</MenuItem>
          <MenuItem value={4}>{props.four}</MenuItem>
          <MenuItem value={5}>{props.five}</MenuItem>
          <MenuItem value={6}>{props.six}</MenuItem>
          <MenuItem value={7}>{props.seven}</MenuItem>
          <MenuItem value={8}>{props.eihgt}</MenuItem>
          <MenuItem value={9}>{props.nine}</MenuItem>
          <MenuItem value={10}>{props.ten}</MenuItem>
          <MenuItem value={11}>{props.eleven}</MenuItem>
          <MenuItem value={12}>{props.twelve}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectInput;
