import React from "react";
import { useState } from "react";
import { Flex, Spacing } from "../../../globalStyles/wrappers";
import { PositionSticky } from "./StyledMonTab";

const MonitoringTab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <PositionSticky top="72px">
        <Flex>
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Барчаси
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Қабул қилинган
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Рад этилган
          </div>
          <div
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Жавоб берилмаган
          </div>
        </Flex>
      </PositionSticky>
      <Spacing height="565px" margin="28px 0 0 0">
        <table>
          <PositionSticky>
            <tr>
              <th margin="">ДAТA</th>
              <th margin="">Ф.И.Ш</th>
              <th margin="">Статус</th>
              <th>Иш жойи </th>
            </tr>
          </PositionSticky>

          <div className={toggleState === 1 ? "item  active-content" : "item"}>
            <tr>
              <td>
                22 август 2021 <p>10:45</p>
              </td>
              <td>Муҳаммадқодиров Муҳамммад Муҳаммадалиевич</td>
              <td>Қабул қилди</td>
              <td>“AФИНA НУФУЗ” адвокатлик фирмаси</td>
            </tr>
          </div>
          <div
            className={toggleState === 2 ? "item  active-content" : "item"}
          ></div>
          <div
            className={toggleState === 3 ? "item  active-content" : "item"}
          ></div>
          <div
            className={toggleState === 4 ? "item  active-content" : "item"}
          ></div>
        </table>
      </Spacing>
    </div>
  );
};

export default MonitoringTab;
