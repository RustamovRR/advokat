import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { LinearProgress } from "@material-ui/core";

export const LanguageIcon = styled(BiChevronDown)`
  fill: #000;
  font-size: 30px;
  &.MuiSelect-icon {
    top: -7px;
    right: 3px;
  }
`;

export const StyledArrow = styled(LanguageIcon)`
  &.MuiSelect-icon {
    top: 10px;
    right: 10px;
  }
`;

export const Loading = styled(LinearProgress)`
  color: #4f5382;
`;
