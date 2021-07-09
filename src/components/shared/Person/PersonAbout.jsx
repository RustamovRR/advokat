import React from "react";
import { PersonAboutStyle } from "./StyledPerson";

function Person(props) {
  return (
    <PersonAboutStyle>
      <div className="person">
        <img src={props.pic} alt={props.alt} />
        <h3>{props.name}</h3>
      </div>
      <h4>{props.workplace}</h4>
      <p>{props.territory}</p>
      <span>{props.status}</span>
    </PersonAboutStyle>
  );
}

export default Person;
