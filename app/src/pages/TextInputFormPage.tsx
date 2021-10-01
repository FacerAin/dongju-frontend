import React, { FC } from "react";
import styled from "@emotion/styled";
import TextInputFormContainer from "containers/text/TextInputFormContainer";
import Template from "components/common/Template";

const TextInputFormPageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const HeaderText = styled.div`
  margin-top: 50px;
  font-size: 50px;
  text-align: center;
  margin-bottom: 30px;
`;

const TextInputFormPage: FC = function () {
  return (
    <Template>
      <TextInputFormPageWrapper>
        <HeaderText>Input Text</HeaderText>
        <TextInputFormContainer />
      </TextInputFormPageWrapper>
    </Template>
  );
};

export default TextInputFormPage;
