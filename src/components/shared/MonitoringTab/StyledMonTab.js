import styled, { keyframes } from "styled-components";

const open = keyframes`
0%{
  transform: scale(0);
}
100%{
    transform: scale(1);
}
`;

export const TabBtn = styled.span`
  cursor: pointer;
  &.tabs {
    background: #f1f2f5;
    border-radius: 4px;
    padding: 12px 24px;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #4f535e;
  }
  &.active-tabs {
    background: #e1e5ea;
    font-weight: 500;
  }
`;

export const PositionSticky = styled.div`
  position: sticky;
  width: 100%;
  top: ${({ top }) => top};
  background-color: #fff;
`;

export const Tabs = styled.div`
  &.item {
    display: none;
    animation: ${open} 0.8s ease-in;
  }
  &.active-content {
    display: block;
    animation: ${open} 0.8s ease-in;
  }
`;
