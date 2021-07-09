import React from "react";
import { useContext } from "react";
import { Flex, Opacity } from "../../globalStyles/wrappers";
import { WrapTitle, PTitle, SelText } from "../../globalStyles/title";

import { PersonAbout } from "../../components/shared";
import Button from "../../globalStyles/buttons";
import { InputSearchBig, Input } from "../../globalStyles/inputsSearch.js";
import Search from "../../photos/search.png"; // 7-8 searchInput
import Man from "../../photos/man.png";
import { Wrapper } from "../../context/context";

const UserManagePage = () => {
  const { handleChangeModal } = useContext(Wrapper);

  return (
    <Opacity>
      <Flex justify="space-between">
        <WrapTitle>Фойдаланувчиларни бошқариш</WrapTitle>
        <Button onClick={handleChangeModal}>Яратиш</Button>
      </Flex>
      <div style={{ marginTop: "32px" }}>
        <InputSearchBig width="504px">
          <img src={Search} alt="Search" />
          <Input type="text" placeholder="Излаш" />
        </InputSearchBig>
      </div>

      <Flex justify="space-between" style={{ marginTop: "68px" }}>
        <PTitle>Супер админ</PTitle>
        <SelText>Барчаси</SelText>
      </Flex>

      <Flex justify="space-between" style={{ marginTop: "24px" }}>
        <PersonAbout
          image={Man}
          name="Усмонжонов Темурбек Aбдулбосид ўғли"
          job="AДЛИЯ ВАЗИРЛИГИ"
        />
        <PersonAbout
          image={Man}
          name="Усмонжонов Темурбек Aбдулбосид ўғли"
          job="AДЛИЯ ВАЗИРЛИГИ"
        />
        <PersonAbout
          image={Man}
          name="Усмонжонов Темурбек Aбдулбосид ўғли"
          job="AДЛИЯ ВАЗИРЛИГИ"
        />
        <PersonAbout
          image={Man}
          name="Усмонжонов Темурбек Aбдулбосид ўғли"
          job="AДЛИЯ ВАЗИРЛИГИ"
        />
      </Flex>
    </Opacity>
  );
};

export default UserManagePage;
