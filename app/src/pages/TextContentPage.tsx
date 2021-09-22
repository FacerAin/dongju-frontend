import React, { FC } from "react";
import styled from "@emotion/styled";
import TextContentContainer from "containers/text/TextContentContainer";
import Template from "components/common/Template";
import { RouteComponentProps } from "react-router";

export interface MatchParams {
  id: string;
}

const TextContentPageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const TextContentPage: FC<RouteComponentProps<MatchParams>> = function ({
  match,
}) {
  const { id }: { id: string } = match.params;
  return (
    <Template>
      <TextContentPageWrapper>
        <TextContentContainer id={id} />
      </TextContentPageWrapper>
    </Template>
  );
};

export default TextContentPage;
