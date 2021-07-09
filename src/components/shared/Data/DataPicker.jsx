import React from "react";
import { StyledDatePicker } from "./StyledDate";
import IconCalendar from "../../../photos/fi_calendar.svg";
import { useContext } from "react";
import { Wrapper } from "../../../context/context";

const DataPicker = () => {
  const { date, onChange } = useContext(Wrapper);

  return (
    <StyledDatePicker
      format="dd.MM.y"
      clearIcon={null}
      calendarIcon={<img src={IconCalendar} alt="calendar" />}
      closeCalendar={false}
      value={date}
      onChange={onChange}
    />
  );
};

export default DataPicker;
