import styled from "styled-components";
import NumberFormat from "react-number-format";

export const InputSearchBig = styled.div`
  position: relative;
  width: ${(props) => props.width || "328px"};
  margin: ${(props) => props.margin || "0"};
  img {
    position: absolute;
    top: 10px;
    left: 16px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 4px;
  padding: ${(props) => props.padding || "12px 12px 12px 48px"};
  background-color: ${(props) => props.background || "#F1F2F5"};
  border: ${(props) => props.border || "1px solid #E1E5EA"};
`;

export const InputNumber = styled(NumberFormat)`
  border: none;
  outline: none;
  background-color: #f1f2f5;
  padding: 12px 16px;
  width: 240px;
  height: 48px;
  font-size: 16px;
  margin: ${(props) => props.margin || "0"};
`;
