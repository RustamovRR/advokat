import React from "react";
import { useHistory } from "react-router-dom";
import { Opacity } from "../../../globalStyles/wrappers";
import { GoBack } from "./StyledCreatePage";

const CreatePage = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Opacity>
      <GoBack onClick={goBack}>go Back</GoBack>
      <h1>CreatePage</h1>
    </Opacity>
  );
};

export default CreatePage;
