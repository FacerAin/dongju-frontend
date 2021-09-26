import React, { FC } from "react";
import styled from "@emotion/styled";
import TextListContainer from "containers/text/TextListContainer";
import Template from "components/common/Template";
import Button from "components/common/Button";
import { Link } from "react-router-dom";
const TextsPageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 30vw;
`;

const HeaderText = styled.div`
  margin-top: 100px;
  font-size: 50px;
  text-align: center;
`;

const AddButton = styled(Link)`
  margin: 0 0 0 auto;
`;

const TextsPage: FC = function () {
  return (
    <Template>
      <TextsPageWrapper>
        <HeaderText>Texts</HeaderText>
        <AddButton to="/newtext">
          <Button disabled={false}>추가</Button>
        </AddButton>
        <TextListContainer />
      </TextsPageWrapper>
    </Template>
  );
};

export default TextsPage;
