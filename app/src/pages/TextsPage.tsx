import React, { FC } from 'react';
import styled from '@emotion/styled';
import TextListContainer from 'containers/text/TextListContainer';
import Template from 'components/common/Template';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';
import SearchBoxContainer from 'containers/common/SearchBoxContainer';

const TextsPageWrapper = styled.div`
	margin-top: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	margin: 0 20vw;
`;

const ToolContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 40vw;
	align-items: center;
`;

const HeaderText = styled.div`
	margin-top: 100px;
	font-size: 50px;
	text-align: center;
`;

const AddButton = styled(Link)`
	width: 100px;
`;

const TextsPage: FC = function () {
	return (
		<Template>
			<TextsPageWrapper>
				<HeaderText>Texts</HeaderText>

				<ToolContainer>
					<SearchBoxContainer />
					<AddButton to="/newtext">
						<Button disabled={false}>추가</Button>
					</AddButton>
				</ToolContainer>

				<TextListContainer />
			</TextsPageWrapper>
		</Template>
	);
};

export default TextsPage;