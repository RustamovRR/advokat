import React from "react";

import { reject } from "../../../constants/results";
import { Flex } from "../../../globalStyles/wrappers";
import {
  ItemBlackExtraSmall,
  ItemGrayExtraSmall,
} from "../../../pages/Monitoring/StyledMonitoring";

const NotRequest = () => {
  return (
    <Flex>
      {reject.map((item) =>
        item.result ? (
          <ItemGrayExtraSmall key={item.id} />
        ) : (
          <ItemBlackExtraSmall key={item.id} />
        )
      )}
    </Flex>
  );
};

export default NotRequest;
