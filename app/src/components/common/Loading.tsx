import React, { FC } from "react";
import styled from "@emotion/styled";
import { Facebook } from "react-content-loader";
const LoadingWrapper = styled.div`
  width: 60%;
  hegith: 65%;
`;

const Loading: FC = function () {
  return (
    <LoadingWrapper>
      <Facebook />
    </LoadingWrapper>
  );
};

export default Loading;
