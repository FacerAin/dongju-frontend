import React, { FC } from 'react';
import styled from '@emotion/styled';
import TextListContainer from 'containers/text/TextListContainer';
import Template from 'components/common/Template';
const TextsPageWrapper = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
const HeaderText = styled.div`
	margin-top: 100px;
	font-size: 50px;
	text-align: center;
`;
const TextsPage: FC = function () {
    return (
        <Template>
            <TextsPageWrapper>
				<HeaderText>Texts</HeaderText>
                <TextListContainer />
            </TextsPageWrapper>
        </Template>
    );
};

export default TextsPage