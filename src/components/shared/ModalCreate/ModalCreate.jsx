import React, { useState } from "react";
import { Wrapper } from "../../../context/context";
import { Flex } from "../../../globalStyles/wrappers";
import { ModalBody, ModalSpacing } from "./StyledModal";
import { useForm } from "react-hook-form";
import DataPicker from "../Data/DataPicker";
import { useContext } from "react";
import {
  InputSearchBig,
  Input,
  InputNumber,
} from "../../../globalStyles/inputsSearch";
import { StyledArrow } from "../../../globalStyles/Icons";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { selectInputStyle } from "../Select/selectStyle";
import { PTitle } from "../../../globalStyles/title";
import Button from "../../../globalStyles/buttons";
import Add from "../../../photos/add.png";

const ModalCreate = () => {
  const classes = selectInputStyle();
  const [value, setValue] = useState(1);
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const { modal, date } = useContext(Wrapper);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data, date);

  if (modal) {
    return (
      <ModalBody>
        <ModalSpacing>
          <PTitle color="#000">Яратиш</PTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex margin="16px 0 0">
              <Flex direction="column" padding="0 12px 0 0">
                <label>Исм:</label>
                <InputSearchBig width="240px" margin="8px 0 0">
                  <Input
                    type="text"
                    style={{ padding: "12px 16px" }}
                    {...register("firstName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>
              <Flex direction="column" padding="0 12px">
                <label>Фамиля:</label>
                <InputSearchBig width="240px" margin="8px 0 0">
                  <Input
                    type="text"
                    style={{ padding: "12px 16px" }}
                    {...register("secondName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>
              <Flex direction="column" padding="0 12px">
                <label>Отасининг исми:</label>
                <InputSearchBig width="240px" margin="8px 0 0">
                  <Input
                    type="text"
                    style={{ padding: "12px 16px" }}
                    {...register("lastName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>
              <Flex direction="column" padding="0 12px">
                <label>Тугилган санаси:</label>
                <DataPicker width="240px" />
              </Flex>
            </Flex>
            {errors.exampleRequired && <span>This field is required</span>}

            <Flex margin="24px 0 0">
              <Flex direction="column" padding="0 12px 0 0">
                <label>Манзил:</label>
                <FormControl
                  className={classes.formControl}
                  style={{ width: "240px", margin: "8px 0 0" }}
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
                    <MenuItem value={1}>Танланг</MenuItem>
                  </Select>
                </FormControl>
              </Flex>
              <Flex direction="column" padding="0 12px">
                <label>Телефон рақам:</label>
                <InputNumber
                  format="+998 ## ### ## ##"
                  allowEmptyFormatting
                  mask="-"
                  margin="8px 0 0"
                />
              </Flex>
              <Flex direction="column" padding="0 12px">
                <label>Email:</label>
                <InputSearchBig width="240px" margin="8px 0 0">
                  <Input
                    type="email"
                    placeholder="Email"
                    style={{ padding: "12px 16px" }}
                    {...register("lastName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>
            </Flex>

            <Flex margin="24px 0 0">
              <Flex direction="column" padding="0 12px 0 0">
                <label>Паспорт рақами:</label>
                <InputSearchBig width="240px" margin="8px 0 0">
                  <Input
                    type="text"
                    style={{ padding: "12px 16px" }}
                    {...register("firstName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>
              <Flex direction="column" padding="0 12px">
                <label>СТИР</label>
                <InputSearchBig width="240px" margin="8px 0 0">
                  <Input
                    type="text"
                    style={{ padding: "12px 16px" }}
                    {...register("secondName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>
            </Flex>
          </form>

          <PTitle color="#000" margin="32px 0 16px 0">
            Фаолияти
          </PTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex margin="24px 0 0">
              <Flex direction="column" padding="0 12px 0 0">
                <label>Идора номи(уз)</label>
                <InputSearchBig width="504px" margin="8px 0 0">
                  <Input
                    type="text"
                    style={{ padding: "12px 16px" }}
                    {...register("firstName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>
              <Flex direction="column" padding="0 12px">
                <label>Идора номи(ру)</label>
                <InputSearchBig width="504px" margin="8px 0 0">
                  <Input
                    type="text"
                    style={{ padding: "12px 16px" }}
                    {...register("secondName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>
            </Flex>

            <Flex margin="24px 0 0">
              <Flex direction="column" padding="0 12px 0 0">
                <label>Вилоят</label>
                <FormControl
                  className={classes.formControl}
                  style={{ width: "240px", margin: "8px 0 0" }}
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
                    <MenuItem value={1}>Танланг</MenuItem>
                  </Select>
                </FormControl>
              </Flex>

              <Flex direction="column" padding="0 12px ">
                <label>Туман</label>
                <FormControl
                  className={classes.formControl}
                  style={{ width: "240px", margin: "8px 0 0" }}
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
                    <MenuItem value={1}>Танланг</MenuItem>
                  </Select>
                </FormControl>
              </Flex>

              <Flex direction="column" padding="0 12px">
                <label>Бошлаш санаси</label>
                <DataPicker width="240px" />
              </Flex>

              <Flex direction="column" padding="0 12px">
                <label>Амал қилиш муддати</label>
                <DataPicker width="240px" />
              </Flex>
            </Flex>

            <Flex margin="24px 0 0">
              <Flex direction="column" padding="0 12px 0 0">
                <label>Мақоми</label>
                <FormControl
                  className={classes.formControl}
                  style={{ width: "240px", margin: "8px 0 0" }}
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
                    <MenuItem value={1}>Танланг</MenuItem>
                  </Select>
                </FormControl>
              </Flex>

              <Flex direction="column" padding="0 12px">
                <label>Телефон рақам:</label>
                <InputNumber
                  format="+998 ## ### ## ##"
                  allowEmptyFormatting
                  mask="-"
                  margin="8px 0 0"
                />
              </Flex>
              <Flex direction="column" padding="0 12px">
                <label>Умумий тажрибаси</label>
                <InputSearchBig width="240px" margin="8px 0 0">
                  <Input
                    type="text"
                    style={{ padding: "12px 16px" }}
                    {...register("secondName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>
            </Flex>
          </form>

          <Flex align="center" margin="16px 0 0">
            <img src={Add} alt="add" />
            <p style={{ marginLeft: "8px" }}>Иш жойи қошиш </p>
          </Flex>

          <PTitle color="#000" margin="36px 0 0">
            Лицензия тогрисида малумот
          </PTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex margin="16px 0 0">
              <Flex direction="column" padding="0 12px 0 0">
                <label>Ким томонидан берилган</label>
                <InputSearchBig width="504px" margin="8px 0 0">
                  <Input
                    type="text"
                    style={{ padding: "12px 16px" }}
                    {...register("secondName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>

              <Flex direction="column" padding="0 12px">
                <label>Berilgan sanasi</label>
                <DataPicker width="240px" />
              </Flex>
              <Flex direction="column" padding="0 12px">
                <label>Амал қилиш муддати</label>
                <DataPicker width="240px" />
              </Flex>
            </Flex>
            <Flex margin="24px 0 0">
              <Flex direction="column" padding="0 12px 0 0">
                <label>Сериа рақами</label>
                <InputSearchBig width="240px" margin="8px 0 0">
                  <Input
                    type="text"
                    style={{ padding: "12px 16px" }}
                    {...register("secondName", { required: true })}
                  />
                </InputSearchBig>
              </Flex>
            </Flex>
          </form>
          <Flex justify="flex-end" margin="48px 0 0 " padding="0 0 48px 0">
            <Button background="#4F535E" padding="12px 26px">
              Бекор қилиш
            </Button>
            <Button margin="0 0 0 25px" padding="12px 45px">
              Сақлаш
            </Button>
          </Flex>
        </ModalSpacing>
      </ModalBody>
    );
  }

  return null;
};

export default ModalCreate;
