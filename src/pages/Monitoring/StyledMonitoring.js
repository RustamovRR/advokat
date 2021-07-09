import styled from "styled-components";

export const ItemRedSmall = styled.div`
  width: 16px;
  height: 48px;
  margin: 4px;
  border-radius: 8px;
  background-color: #eb5757;
`;

export const ItemGraySmall = styled(ItemRedSmall)`
  background-color: #f1f2f5;
`;

export const ItemGreenBig = styled(ItemGraySmall)`
  background-color: #27ae60;
  height: 120px;
`;

export const ItemGrayBig = styled(ItemGreenBig)`
  background-color: #f1f2f5;
`;

export const ItemGrayExtraSmall = styled(ItemGrayBig)`
  height: 16px;
  background-color: #f1f2f5;
`;

export const ItemBlackExtraSmall = styled(ItemGrayExtraSmall)`
  background-color: #11151e;
`;

export const ItemGrayMedium = styled(ItemGrayExtraSmall)`
  height: 72px;
  background-color: #f1f2f5;
`;
export const ItemYellowMedium = styled(ItemGrayMedium)`
  height: 72px;
  background-color: #f2c94c;
`;

export const MonitoringTextBox = styled.div`
  width: 264px;
  margin-left: 32px;
  span:first-child {
    color: #4f535e;
    opacity: 0.5;
  }
  span:last-child {
    color: #4f535e;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;
