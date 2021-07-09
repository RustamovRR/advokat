import styled from "styled-components";

export const StyledRegister = styled.div`
  border: 1px solid #e1e5ea;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  width: 49%;
  margin-bottom: 24px;
  h3 {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
  P {
    margin-bottom: 13px;
  }
`;

export const Number = styled.span`
  font-size: 16px;
  line-height: 15px;
  &:last-child {
    padding-left: 8px;
  }
  &:first-child {
    border-right: 2px solid #2d2d2d;
    padding-right: 8px;
  }
`;

export const ArrowBc = styled.span`
  position: absolute;
  right: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: #e1e5ea;
`;

export const Overflow = styled.div`
  height: 464px;
  overflow-y: auto;
  margin: ${(props) => props.margin || "0"};
`;
