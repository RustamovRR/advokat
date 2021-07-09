import React from "react";
import { StyledRegister, Number, ArrowBc } from "./StyledRegister";
import { FiArrowDownRight } from "react-icons/fi";
import { Flex } from "../../../globalStyles/wrappers";

const Register = ({ title, address, numberOne, numberTwo }) => {
  return (
    <StyledRegister>
      <h3>{title}</h3>
      <p>{address}</p>
      <Flex justify="space-between" aling="center">
        <Flex aling="center">
          <Number>{numberOne}</Number>
          <Number>№{numberTwo}</Number>
        </Flex>
      </Flex>
      <ArrowBc>
        <FiArrowDownRight size="22" />
      </ArrowBc>
    </StyledRegister>
  );
};

export default Register;
