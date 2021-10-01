import React, { FC, ReactNode } from "react";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import styled from "@emotion/styled";

interface TemplateProps {
  children: ReactNode;
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <Header></Header>
      {children}
      <Footer />
    </Container>
  );
};
export default Template;
