import React, { FC } from "react";
import styled from "@emotion/styled";
import TextUpdateFormContainer from "containers/text/TextUpdateFormContainer";
import Template from "components/common/Template";
import { RouteComponentProps } from "react-router";

export interface MatchParams {
  id: string;
}

const TextUpdateFormPageWrapper = styled.div`
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

const TextUpdateFormPage: FC<RouteComponentProps<MatchParams>> = function ({
  match,
}) {
  const { id }: { id: string } = match.params;
  return (
    <Template>
      <TextUpdateFormPageWrapper>
        <HeaderText>Update Text</HeaderText>
        <TextUpdateFormContainer id={id} />
      </TextUpdateFormPageWrapper>
    </Template>
  );
};

export default TextUpdateFormPage;
