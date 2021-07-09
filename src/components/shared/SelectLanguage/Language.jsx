import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStyles } from "./StyledLanguage";
import { LanguageIcon } from "../../../globalStyles/Icons";

export default function Language(props) {
  const classes = useStyles();
  const [age, setAge] = useState(1);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={age}
        onChange={handleChange}
        disableUnderline={true}
        IconComponent={LanguageIcon}
        classes={{ root: classes.selectRoot }}
        className={classes.selectEmpty}
      >
        <MenuItem className={classes.selectValue} value={1}>
          Узбекча
        </MenuItem>
        <MenuItem className={classes.selectValue} value={2}>
          Руссча
        </MenuItem>
        <MenuItem className={classes.selectValue} value={3}>
          Инглизча
        </MenuItem>
      </Select>
    </FormControl>
  );
}
