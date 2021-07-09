import styled from "styled-components";

export const WrapTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #11151e;
  margin: ${({ margin }) => margin};
`;
export const PTitle = styled.h3`
  font-size: 24px;
  color: ${(props) => props.color || "#4f535e"};
  margin: ${(props) => props.margin || "#4f535e"};
`;

export const SelText = styled.h3`
  font-size: 16px;
  color: #4f535e;
  cursor: pointer;
`;
export const InputTitle = styled.div`
  padding: ${(props) => props.padding || "0"};
  p {
    font-size: 14px;
    color: #4f535e;
    margin-bottom: 8px;
  }
`;
