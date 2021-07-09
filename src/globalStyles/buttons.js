import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 15px;
  border-radius: 4px;
  height: 48px;
  padding: ${(props) => props.padding || "12px 54px"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.background || "#11151E"};
  color: ${(props) => props.color || "#fff"};
  transition: all 0.2s;
  &:hover {
    opacity: 0.9;
  }
  /* ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || "white"};
      background: ${(props) => props.background || "white"};
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || "white"};
      border: 1px solid ${(props) => props.color || "white"};
      background: transparent;
    `} */
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;

export const BtnLink = styled(Link)`
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 15px;
  border-radius: 4px;
  padding: ${(props) => props.padding || "12px 54px"};
  background-color: ${(props) => props.background || "#11151E"};
  transition: all 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;
