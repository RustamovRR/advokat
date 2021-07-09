import React from "react";
import { Person } from "./StyledPerson";

function PersonAbout(props) {
  return (
    <Person>
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <p>{props.job}</p>
    </Person>
  );
}

export default PersonAbout;
