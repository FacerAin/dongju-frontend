import { FC } from "react";
import styled from "@emotion/styled";

interface TextContentProps {
  title: string;
  author: string;
  text: string;
}

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  width: 70%;
  height: 90%;
  padding: 20px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 30px;
  padding-bottom: 5px;
`;
const Content = styled.div`
  text-align: center;
  margin-top: 30px;
  white-space: pre-line;
`;
const Author = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 15px;
  margin: 0 auto;
  border-bottom: 1px solid;
  width: 100px;
  display: inline-block;
`;

const TextContent: FC<TextContentProps> = function ({ title, author, text }) {
  return (
    <TextContentWrapper>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Content>{text}</Content>
    </TextContentWrapper>
  );
};

export default TextContent;
