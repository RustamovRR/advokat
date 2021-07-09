import React from "react";

import { reject } from "../../../constants/results";
import { Flex } from "../../../globalStyles/wrappers";
import {
  ItemGrayBig,
  ItemGreenBig,
} from "../../../pages/Monitoring/StyledMonitoring";

const Accepted = () => {
  return (
    <Flex>
      {reject.map((item) =>
        item.result ? (
          <ItemGrayBig key={item.id} />
        ) : (
          <ItemGreenBig key={item.id} />
        )
      )}
    </Flex>
  );
};

export default Accepted;
