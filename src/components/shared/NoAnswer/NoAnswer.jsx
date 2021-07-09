import React from "react";

import { reject } from "../../../constants/results";
import { Flex } from "../../../globalStyles/wrappers";
import {
  ItemGrayMedium,
  ItemYellowMedium,
} from "../../../pages/Monitoring/StyledMonitoring";

const NoAnswer = () => {
  return (
    <Flex>
      {reject.map((item) =>
        item.result ? (
          <ItemGrayMedium key={item.id} />
        ) : (
          <ItemYellowMedium key={item.id} />
        )
      )}
    </Flex>
  );
};

export default NoAnswer;
