import React, { useState } from "react";
import { GrRefresh } from "react-icons/gr";
import { Register } from "../../components/shared";
import { Overflow } from "../../components/shared/Register/StyledRegister";
import { BtnLink } from "../../globalStyles/buttons";
import { Flex, Opacity } from "../../globalStyles/wrappers";
import { WrapTitle, InputTitle } from "../../globalStyles/title";
import Search from "../../photos/search.png"; // 7-8 searchInput
import { InputSearchBig, Input } from "../../globalStyles/inputsSearch.js";
import { StyledArrow } from "../../globalStyles/Icons";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { selectInputStyle } from "../../components/shared/Select/selectStyle";

const RegisterStrPage = () => {
  const classes = selectInputStyle();
  const [value, setValue] = useState(1);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Opacity>
      <WrapTitle margin=" 0 0 32px 0">Aдвокатлар реестри тузилмаси </WrapTitle>
      <Flex justify="space-between" margin="24px 0 0 ">
        <InputTitle>
          <p>Вилоят</p>
          <FormControl
            className={classes.formControl}
            style={{ width: "312px", margin: "8px 0 0" }}
          >
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
              <MenuItem value={1}>Toshkent</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>
        <InputTitle>
          <p>Туман</p>
          <FormControl
            className={classes.formControl}
            style={{ width: "312px", margin: "8px 0 0" }}
          >
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
              <MenuItem value={1}>Norin</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>
        <InputTitle>
          <p>Тузилма бўлими</p>
          <FormControl
            className={classes.formControl}
            style={{ width: "312px", margin: "8px 0 0" }}
          >
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
              <MenuItem value={1}>Тўхтатилган</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>
      </Flex>
      <Flex margin="48px 0 32px" justify="space-between">
        <InputSearchBig width="328px">
          <img src={Search} alt="Search" />
          <Input type="text" placeholder="Излаш" background="#fff" />
        </InputSearchBig>
        <Flex>
          <Flex align="center" margin="0 26px 0 0">
            <GrRefresh fontSize="22px" />
          </Flex>
          <BtnLink to="/create">Яратиш</BtnLink>
        </Flex>
      </Flex>

      <Overflow margin="32px 0 0">
        <Flex wrap="wrap" justify="space-between">
          <Register
            title="Фирма адвокатлар идораси"
            address="Фарғона вилояти,  Риштон тумани"
            numberOne="+998 90 627 48 59 "
            numberTwo=" 627485945"
          />
          <Register
            title="Фирма адвокатлар идораси"
            address="Фарғона вилояти,  Риштон тумани"
            numberOne="+998 90 627 48 59 "
            numberTwo=" 627485945"
          />
          <Register
            title="Фирма адвокатлар идораси"
            address="Фарғона вилояти,  Риштон тумани"
            numberOne="+998 90 627 48 59 "
            numberTwo=" 627485945"
          />
          <Register
            title="Фирма адвокатлар идораси"
            address="Фарғона вилояти,  Риштон тумани"
            numberOne="+998 90 627 48 59 "
            numberTwo=" 627485945"
          />
          <Register
            title="Фирма адвокатлар идораси"
            address="Фарғона вилояти,  Риштон тумани"
            numberOne="+998 90 627 48 59 "
            numberTwo=" 627485945"
          />
          <Register
            title="Фирма адвокатлар идораси"
            address="Фарғона вилояти,  Риштон тумани"
            numberOne="+998 90 627 48 59 "
            numberTwo=" 627485945"
          />
        </Flex>
      </Overflow>
    </Opacity>
  );
};

export default RegisterStrPage;
