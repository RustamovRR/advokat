import React from "react";
import { Container, StyledHeader } from "../../../globalStyles/wrappers";
import routes from "./routes";
import { StyledLink, Logo, Li } from "./styledSideBar";

const SideBar = () => {
  return (
    <Container left>
      <StyledHeader>
        <Logo to="/tab">LOGO</Logo>
      </StyledHeader>
      <ul>
        {routes.map(({ to, text }, index) => (
          <Li key={index}>
            <StyledLink to={to} exact>
              {text}
            </StyledLink>
          </Li>
        ))}
      </ul>
    </Container>
  );
};

export default SideBar;
