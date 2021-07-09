import React from "react";
import styled from "styled-components";
import { IoMdNotificationsOutline } from "react-icons/io";

const StyledIcon = styled(IoMdNotificationsOutline)`
  font-size: 30px;
`;

export const IconNotif = (props) => {
  return <StyledIcon {...props} />;
};

export const Nav = styled.nav`
  width: 100%;
`;

export const IconBox = styled.span`
  position: relative;
  cursor: pointer;
`;
export const Notification = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: 500;
  top: 0;
  right: 0;
  background-color: red;
  width: 13px;
  height: 13px;
  color: white;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;
