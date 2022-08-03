import * as React from "react";
import styled from "styled-components";
import Input from "../../elements/input/Input";

const Title = styled.h2`
  color: #b4b4b4;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 5px;
`;

const TitleInput = () => {
  return (
    <form>
      <label htmlFor="title">
        <Title>Title</Title>
      </label>
      <Input
        isInput
        height="auto"
        bgColor="#EFEFEF"
        placeholder="받는 사람을 입력해주세요"
        id="title"
        padding="13px"
        fontSize="14px"
        fontWeight="400"
        required
      />
    </form>
  );
};

export default TitleInput;