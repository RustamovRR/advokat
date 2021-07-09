import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 12px;
  padding: 16px 31px 16px 33px;
  letter-spacing: 0.04em;
  display: block;
  color: #4f535e;
  font-weight: 500;
  white-space: nowrap;
  width: 312px;

  &.active {
    border-left: 4px solid #11151e;
    background-color: #f1f2f5;
    transition: background 0.3s;
  }
`;

export const Logo = styled(Link)`
  font-weight: 600;
  font-size: 30px;
  text-transform: uppercase;
  margin: 0 0 0 24px;
`;

export const Li = styled.li``;
