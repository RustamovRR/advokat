import styled from "styled-components";
import DatePicker from "react-date-picker";

export const StyledDatePicker = styled(DatePicker)`
  height: 48px;
  .react-date-picker__calendar {
    margin-top: 8px;
    min-height: 280px;
    width: 272px;
    box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.1);
  }
  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next-button,
  .react-calendar__navigation__prev-button {
    font-size: 35px;
  }
  .react-calendar__navigation {
    height: 55px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .react-calendar__navigation .react-calendar__navigation__label__labelText {
    font-size: 16px;
  }
  &.react-date-picker * {
    border-radius: 4px;
    align-items: center;
    outline: none;
  }
  .react-date-picker__inputGroup {
    padding: 0 0 0 16px;
  }
  .react-date-picker__button:enabled {
    padding: 0 10px 0 0;
  }
  .react-calendar__tile {
    font-size: 16px;
    padding: 8px;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 10px 18px;
    margin-bottom: 20px;
  }
  .react-calendar__tile--now {
    background-color: #526dc8;
    color: #fff;
  }
  .react-calendar__tile--active {
    background-color: #10279e;
    color: #fff;
  }
  .react-date-picker__wrapper {
    background-color: #f1f2f5;
    width: ${(props) => props.width || "152px"};
  }
`;
