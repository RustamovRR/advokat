import React from "react";
import { Flex, ModalBack, StyledHeader } from "../../../globalStyles/wrappers";
import { BiGlobe } from "react-icons/bi";
import { Language } from "../../shared";
import { IconBox, IconNotif, Notification, Nav } from "./styledHeader";
import ModalCreate from "../ModalCreate/ModalCreate";
import { Wrapper } from "../../../context/context";
import { useContext } from "react";

const Header = () => {
  const { modal, handleChangeModal } = useContext(Wrapper);
  modal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  return (
    <StyledHeader>
      <Nav>
        <Flex justify="space-between" align="center">
          <Flex>
            <span>Уй | </span>
            <span> Фойдаланувчиларни бошқариш</span>
          </Flex>
          <Flex align="center">
            <BiGlobe size="22" />
            <Language />
            <IconBox>
              <IconNotif />
              <Notification>1</Notification>
            </IconBox>
          </Flex>
        </Flex>
      </Nav>

      {modal && <ModalBack onClick={handleChangeModal} />}
      <ModalCreate />
    </StyledHeader>
  );
};

export default Header;
