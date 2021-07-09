import React from "react";
import styled, { css, keyframes } from "styled-components";

const fade = keyframes`
from {
opacity: 0;
}
to{
  opacity: 1;
}
`;

export const Opacity = styled.main`
  animation: ${fade} 0.5s ease;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
  width: 100%;
  padding: 30px 0;
  margin-bottom: 20px;
  position: sticky;
  top: 0px;
  z-index: 100;
  background-color: white;
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  gap: ${({ gap }) => gap || "0"};
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};

const StyledContainer = styled.div`
  ${(props) =>
    props.fluid &&
    css`
      max-width: 1440px;
      margin: 0 auto;
    `}
  ${(props) =>
    props.left &&
    css`
      height: 100vh;
      position: sticky;
      top: 0;
      border-right: 1px solid #e1e5ea;
    `}
  ${(props) =>
    props.rigth &&
    css`
      width: 100%;
    `}
`;

export const Container = (props) => {
  return <StyledContainer {...props} />;
};

const StyledSpacing = styled.div`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  min-height: ${({ height }) => height};
`;

export const Spacing = (props) => {
  return <StyledSpacing {...props} />;
};

const ModalBc = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  z-index: 9000;
`;

export const ModalBack = (props) => {
  return <ModalBc {...props} />;
};
