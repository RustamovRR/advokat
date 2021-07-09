import React, { useState } from "react";
import { Opacity, Flex } from "../../globalStyles/wrappers";
import { WrapTitle, InputTitle } from "../../globalStyles/title";
import StyledButton from "../../globalStyles/buttons";
import { DataPicker } from "../../components/shared";
import Cancel from "../../photos/cancel.png";
import Search from "../../photos/search.png";
import { StyledArrow } from "../../globalStyles/Icons";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { selectInputStyle } from "../../components/shared/Select/selectStyle";
import { InputSearchBig, Input } from "../../globalStyles/inputsSearch.js";

const HistoryPage = () => {
  const classes = selectInputStyle();

  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Opacity>
      <WrapTitle>ИСТОРИЯ</WrapTitle>

      <Flex style={{ marginTop: "68px" }}>
        <InputTitle padding="0 12px 0 0">
          <p>Бўлим</p>
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
              <MenuItem value={1}>Бўлимни танланг</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>
        <InputTitle padding="0 12px 0 12px">
          <p>Бошлаш санаси</p>
          <DataPicker />
        </InputTitle>
        <InputTitle padding="0 12px 0 12px">
          <p>Тугатиш санаси</p>
          <DataPicker />
        </InputTitle>
        <InputTitle padding="0 12px 0 12px">
          <StyledButton
            padding="12px 24px 12px 0"
            background="#fff"
            color="#000"
          >
            <Flex align="center" margin="25px 0 0">
              <img src={Cancel} alt="x" /> Тозалаш
            </Flex>
          </StyledButton>
        </InputTitle>
      </Flex>
      <InputSearchBig width="328px" margin="32px 0 0 ">
        <img src={Search} alt="Search" />
        <Input type="text" placeholder="Излаш" />
      </InputSearchBig>
    </Opacity>
  );
};

export default HistoryPage;
