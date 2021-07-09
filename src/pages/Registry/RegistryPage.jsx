import React, { useContext, useState } from "react";
import { Flex, Opacity } from "../../globalStyles/wrappers";

import { GrRefresh } from "react-icons/gr";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { WrapTitle, InputTitle } from "../../globalStyles/title";
import { Person } from "../../components/shared";
import { InputSearchBig, Input } from "../../globalStyles/inputsSearch.js";
import { selectInputStyle } from "../../components/shared/Select/selectStyle";
import { StyledArrow } from "../../globalStyles/Icons";
import Search from "../../photos/search.png";
import ManSmall from "../../photos/mansmall.png";
import Button from "../../globalStyles/buttons";
import { Wrapper } from "../../context/context";

const RegistryPage = () => {
  const { handleChangeModal } = useContext(Wrapper);
  const classes = selectInputStyle();
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Opacity>
      <WrapTitle>Aдвокатлар реестри тузилмаси </WrapTitle>
      <Flex justify="space-between" margin="24px 0 0 ">
        <InputTitle>
          <p>Вилоят</p>
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
              <MenuItem value={1}>Samarqand</MenuItem>
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
              <MenuItem value={1}>Norin</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>

        <InputTitle>
          <p>Лицензия ҳолати</p>
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
              <MenuItem value={1}>Тўхтатилган</MenuItem>
            </Select>
          </FormControl>
        </InputTitle>
      </Flex>

      <Flex margin="48px 0 0" justify="space-between">
        <InputSearchBig width="328px">
          <img src={Search} alt="Search" />
          <Input type="text" placeholder="Излаш" background="#fff" />
        </InputSearchBig>
        <Flex>
          <Flex align="center" margin="0 26px 0 0">
            <GrRefresh fontSize="22px" />
          </Flex>
          <Button onClick={handleChangeModal}>Яратиш</Button>
        </Flex>
      </Flex>

      <div style={{ marginTop: "28px", height: "464px", overflow: "auto" }}>
        <Person
          pic={ManSmall}
          name="Муҳаммадқодиров Муҳамммад Муҳаммадалиевич"
          workplace="“AФИНA НУФУЗ” адвокатлик фирмаси"
          territory="Самарқанд вилояти Яккасарой тумани"
          status="Тўхтатилган"
        />
        <Person
          pic={ManSmall}
          name="Муҳаммадқодиров Муҳамммад Муҳаммадалиевич"
          workplace="“AФИНA НУФУЗ” адвокатлик фирмаси"
          territory="Самарқанд вилояти Яккасарой тумани"
          status="Тўхтатилган"
        />
        <Person
          pic={ManSmall}
          name="Муҳаммадқодиров Муҳамммад Муҳаммадалиевич"
          workplace="“AФИНA НУФУЗ” адвокатлик фирмаси"
          territory="Самарқанд вилояти Яккасарой тумани"
          status="Тўхтатилган"
        />
        <Person
          pic={ManSmall}
          name="Муҳаммадқодиров Муҳамммад Муҳаммадалиевич"
          workplace="“AФИНA НУФУЗ” адвокатлик фирмаси"
          territory="Самарқанд вилояти Яккасарой тумани"
          status="Тўхтатилган"
        />
        <Person
          pic={ManSmall}
          name="Муҳаммадқодиров Муҳамммад Муҳаммадалиевич"
          workplace="“AФИНA НУФУЗ” адвокатлик фирмаси"
          territory="Самарқанд вилояти Яккасарой тумани"
          status="Тўхтатилган"
        />
        <Person
          pic={ManSmall}
          name="Муҳаммадқодиров Муҳамммад Муҳаммадалиевич"
          workplace="“AФИНA НУФУЗ” адвокатлик фирмаси"
          territory="Самарқанд вилояти Яккасарой тумани"
          status="Тўхтатилган"
        />
        <Person
          pic={ManSmall}
          name="Муҳаммадқодиров Муҳамммад Муҳаммадалиевич"
          workplace="“AФИНA НУФУЗ” адвокатлик фирмаси"
          territory="Самарқанд вилояти Яккасарой тумани"
          status="Тўхтатилган"
        />
      </div>
    </Opacity>
  );
};

export default RegistryPage;
