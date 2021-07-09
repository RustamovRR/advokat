import React from "react";

import { reject } from "../../../constants/results";
import { Flex } from "../../../globalStyles/wrappers";
import {
  ItemGraySmall,
  ItemRedSmall,
} from "../../../pages/Monitoring/StyledMonitoring";

const Rejected = () => {
  return (
    <Flex>
      {reject.map((item) =>
        item.result ? (
          <ItemGraySmall key={item.id} />
        ) : (
          <ItemRedSmall key={item.id} />
        )
      )}
    </Flex>
  );
};

export default Rejected;
