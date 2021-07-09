import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: #000;
  border: 1px solid #4f535e;
  font-size: 16px;
  border-radius: 4px;
  padding: ${(props) => props.padding || "12px 15px"};
  background-color: ${(props) => props.background || "#fff"};
  width: 456px;
  transition: all 0.2s;
  margin-bottom: 16px;
  &:focus {
    outline: none;
  }
`;

const InputStyle = () => {
  return <StyledInput placeholder="Балиқчи" />;
};

export default InputStyle;
