import React from "react";
import {
  Accepted,
  MonitoringTab,
  NoAnswer,
  NotRequest,
  Rejected,
} from "../../components/shared";
import { Flex, Opacity } from "../../globalStyles/wrappers";
import { MonitoringTextBox } from "./StyledMonitoring";

const MonitoringPage = () => {
  return (
    <Opacity>
      <Flex direction="column">
        <Flex margin="0 0 16px 0">
          <Rejected />
          <MonitoringTextBox>
            <Flex justify="space-between">
              <span>Рад этилган </span>
            </Flex>
          </MonitoringTextBox>
        </Flex>
        <Flex margin="0 0 16px 0">
          <Accepted />
          <MonitoringTextBox>
            <Flex justify="space-between">
              <span>Қабул қилинган</span>
            </Flex>
          </MonitoringTextBox>
        </Flex>
        <Flex margin="0 0 16px 0">
          <NotRequest />
          <MonitoringTextBox>
            <Flex justify="space-between">
              <span>Сўров юборилмаган </span>
            </Flex>
          </MonitoringTextBox>
        </Flex>
        <Flex margin="0 0 16px 0">
          <NoAnswer />
          <MonitoringTextBox>
            <Flex justify="space-between">
              <span>Жавоб берилмаган </span>
            </Flex>
          </MonitoringTextBox>
        </Flex>
        <MonitoringTab />
      </Flex>
    </Opacity>
  );
};

export default MonitoringPage;
