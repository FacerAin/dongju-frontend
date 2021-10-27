import React, { FC, useEffect } from 'react';
import styled from '@emotion/styled';
import Template from 'components/common/Template';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';
import SearchBoxContainer from 'containers/common/SearchBoxContainer';
import TextCheckListContainer from 'containers/text/TextCheckListContainer';
import { RootState } from 'modules';
import { getTextAllAsync } from 'modules/text';
import { useDispatch, useSelector } from 'react-redux';

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

const CounterText = styled.div`
	margin-top: 30px;
	font-size: 30px;
	text-align: center;
`;

const TextsPage: FC = function () {
	const { data } = useSelector((state: RootState) => state.text.Texts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTextAllAsync.request(''));
	}, [dispatch]);

	return (
		<Template>
			<TextsPageWrapper>
				<HeaderText>Check</HeaderText>

				<ToolContainer>
					<SearchBoxContainer />
					<AddButton to="/newtext">
						<Button disabled={false}>추가</Button>
					</AddButton>
				</ToolContainer>
				{data && <CounterText>지금까지 {data.length}편의 시가 수록되었습니다.</CounterText>}
				<TextCheckListContainer />
			</TextsPageWrapper>
		</Template>
	);
};

export default TextsPage;