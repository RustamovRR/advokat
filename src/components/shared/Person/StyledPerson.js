import styled from "styled-components";

export const Person = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 152px;
    height: 160px;
    border-radius: 50%;
  }
  h3 {
    font-size: 16px;
    line-height: 24px;
    color: #4f535e;
    text-align: center;
    margin: 16px 0 8px;
  }
  p {
    color: #4f535e;
    font-size: 12px;
    line-height: 16px;
  }
`;
export const PersonAboutStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  .person {
    display: flex;
  }
  img {
    width: 48px;
    border-radius: 50%;
  }
  h3 {
    font-size: 16px;
    color: #4f535e;
    max-width: 268px;
    margin-left: 12px;
  }
  h4,
  p {
    max-width: 240px;
    font-size: 16px;
    color: #4f535e;
    font-weight: 400;
  }
  span {
    color: #eb5757;
    font-size: 16px;
    padding-right: 45px;
  }
`;
