import React from "react";
import {
  GrayBackground,
  GrayTopItem,
  ButtonTitle,
  SectionName,
} from "./StyledDataManage";
import Button from "../../globalStyles/buttons";
import { Flex, Opacity, Spacing } from "../../globalStyles/wrappers";
import { WrapTitle } from "../../globalStyles/title";
import SelectInput from "./../../components/shared/Select/select";
import { Input } from "../../components/shared";
import Infosvg from "../../photos/info.svg";

const DataManagePage = () => {
  return (
    <Opacity>
      <div>
        <WrapTitle>Маълумотларни бошқариш</WrapTitle>

        <SectionName>
          <h4>Вилоятлар</h4>
        </SectionName>

        <Flex gap="24px">
          <div>
            <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

            <GrayBackground>
              <Button>
                <ButtonTitle>Вилоят қўшиш</ButtonTitle>
              </Button>
            </GrayBackground>
          </div>
          <div>
            <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

            <GrayBackground>
              <Button>
                <ButtonTitle>Вилоят қўшиш</ButtonTitle>
              </Button>
            </GrayBackground>
          </div>
        </Flex>

        {/* ----------------------------- */}
        <div>
          <SectionName>
            <Flex gap="8px">
              <h4>Туманлар рўйхати</h4>
              <img src={Infosvg} alt="info" />
            </Flex>
          </SectionName>
          <Flex gap="24px">
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

              <Spacing margin=" 0 0 8px 0 ">
                <SelectInput></SelectInput>
              </Spacing>

              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
            <div>
              <div>
                <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>
              </div>
              <div>
                <Spacing margin=" 0 0 8px 0 ">
                  <SelectInput></SelectInput>
                </Spacing>
              </div>
              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
          </Flex>
        </div>
        {/* ----------------------------- */}
        <div>
          <SectionName>
            <Flex gap="8px">
              <h4>Тузилмалар рўйхати</h4>
              <img src={Infosvg} alt="info" />
            </Flex>
          </SectionName>

          <Flex gap="24px">
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

              <Spacing margin=" 0 0 8px 0 ">
                <SelectInput></SelectInput>
              </Spacing>

              <GrayBackground>
                <Input />
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

              <Spacing margin=" 0 0 8px 0 ">
                <SelectInput></SelectInput>
              </Spacing>

              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
          </Flex>
        </div>
        {/* ----------------------------- */}
        <div>
          <SectionName>
            <Flex gap="8px">
              <h4>Тузилмалар рўйхати</h4>
              <img src={Infosvg} alt="info" />
            </Flex>
          </SectionName>

          <Flex gap="24px">
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

              <Spacing margin=" 0 0 8px 0 ">
                <SelectInput></SelectInput>
              </Spacing>

              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>
              <Spacing margin=" 0 0 8px 0 ">
                <SelectInput></SelectInput>
              </Spacing>
              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
          </Flex>
        </div>
        {/* ----------------------------- */}
        <div>
          <SectionName>
            <Flex gap="8px">
              <h4>Ҳужжат турлари</h4>
            </Flex>
          </SectionName>
          <Flex gap="24px">
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>
              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>
              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
          </Flex>
        </div>
        {/* ----------------------------- */}
        <div>
          <SectionName>
            <Flex gap="8px">
              <h4>Aдвокатлар ихтисослашуви</h4>
            </Flex>
          </SectionName>

          <Flex gap="24px">
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>
              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
          </Flex>
        </div>
        {/* ----------------------------- */}
        <div>
          <SectionName>
            <Flex gap="8px">
              <h4>Жиноят кодексига жиноят турлар</h4>
            </Flex>
          </SectionName>

          <Flex gap="24px">
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
          </Flex>
        </div>
        {/* ----------------------------- */}
        <div>
          <SectionName>
            <Flex gap="8px">
              <h4>Жинс</h4>
            </Flex>
          </SectionName>

          <Flex gap="24px">
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
            <div>
              <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

              <GrayBackground>
                <Button>
                  <ButtonTitle>Вилоят қўшиш</ButtonTitle>
                </Button>
              </GrayBackground>
            </div>
          </Flex>
        </div>
        {/* ----------------------------- */}

        <SectionName>
          <Flex gap="8px">
            <h4>Иш тури</h4>
          </Flex>
        </SectionName>

        <Flex gap="24px">
          <div>
            <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

            <GrayBackground>
              <Button>
                <ButtonTitle>Вилоят қўшиш</ButtonTitle>
              </Button>
            </GrayBackground>
          </div>
          <div>
            <GrayTopItem>Вилоятлар рўйхати</GrayTopItem>

            <GrayBackground>
              <Button>
                <ButtonTitle>Вилоят қўшиш</ButtonTitle>
              </Button>
            </GrayBackground>
          </div>
        </Flex>
      </div>
    </Opacity>
  );
};

export default DataManagePage;
