import React, { FC } from "react";
import styled from "@emotion/styled";
import TextInputFormContainer from "containers/text/TextInputFormContainer";
import Template from "components/common/Template";
import { RouteComponentProps } from "react-router";

const TextInputFormPageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextInputFormPage: FC = function () {
  return (
    <Template>
      <TextInputFormPageWrapper>
        <TextInputFormContainer />
      </TextInputFormPageWrapper>
    </Template>
  );
};

export default TextInputFormPage;
