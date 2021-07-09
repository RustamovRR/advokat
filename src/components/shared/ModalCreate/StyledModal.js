import styled from "styled-components";
import { Spacing } from "../../../globalStyles/wrappers";

export const ModalBody = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 650px;
  background-color: #fff;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

export const ModalSpacing = styled(Spacing)`
  padding: 48px;
  height: 100%;
  width: 100%;
`;
