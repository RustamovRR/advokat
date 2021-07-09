import React, { useState } from "react";
import { DataPicker } from "../../components/shared";
import { Flex } from "../../globalStyles/wrappers";
import Cancel from "../../photos/cancel.png";
import { StyledArrow } from "../../globalStyles/Icons";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { WrapTitle, InputTitle } from "../../globalStyles/title";
import { selectInputStyle } from "../../components/shared/Select/selectStyle";
import Button from "../../globalStyles/buttons";

import { Opacity } from "../../globalStyles/wrappers";

const RequestPage = () => {
  const classes = selectInputStyle();
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Opacity>
      <WrapTitle>Сўров юбориш</WrapTitle>
      <Flex justify="space-between" margin="24px 0 0 ">
        <InputTitle>
          <p>Орган</p>
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
              <MenuItem value={1}>Орган турини танланг</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>

        <InputTitle>
          <p>Жараён босқичи</p>
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
              <MenuItem value={1}>Жараён босқичи танланг</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>

        <InputTitle>
          <p>Иш жараёни тили</p>
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
              <MenuItem value={1}>Ўзбекча</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>
      </Flex>

      <Flex justify="space-between" margin="32px 0 0 ">
        <InputTitle>
          <p>Ижро этиш санаси</p>
          {/* <CalendarTable /> */}
          <DataPicker />
        </InputTitle>
        <InputTitle>
          <p>Ижро этиш вақти</p>
          {/* <ClockInput /> */}
        </InputTitle>
        <InputTitle>
          <p>Ҳудуд номи (вилоят)</p>
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
              <MenuItem value={1}>Ҳудудни танланг</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>
        <InputTitle>
          <p>Туман</p>
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
              <MenuItem value={1}>Туманни танланг</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>
      </Flex>

      <Flex margin="30px 0 0 ">
        <Button padding="12px 24px">Сўров юбориш</Button>
        <Button padding="12px 24px" background="#fff" color="#000">
          <Flex align="center">
            <img src={Cancel} alt="x" /> Тозалаш
          </Flex>
        </Button>
      </Flex>

      <DataPicker />
    </Opacity>
  );
};

export default RequestPage;
