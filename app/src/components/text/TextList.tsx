import React, { FC } from "react";
import styled from "@emotion/styled";
import TextItem from "components/text/TextItem";
import { TextType } from "api/text";

interface TextListProps {
  texts: TextType [];
}

const TextListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

const TextList: FC<TextListProps> = function ({ texts }) {
  return (
    <TextListWrapper>
      {texts.map(({ id, title, author, text }) => (
        <TextItem title={title} author={author} text={text} key={id} id={id} />
      ))}
    </TextListWrapper>
  );
};

export default TextList;
