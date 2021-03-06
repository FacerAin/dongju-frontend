import React, { FC } from 'react';
import styled from '@emotion/styled';
import TextContentContainer from 'containers/text/TextContentContainer';
import Template from 'components/common/Template';
import { RouteComponentProps } from 'react-router';
import Button from 'components/common/Button';
import { useHistory } from 'react-router-dom';
import { deleteTextAsync } from 'modules/text';
import { useDispatch } from 'react-redux';
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
	margin-left: 30vw;
	margin-right: 30vw;
`;

const ToolContainer = styled.div`
	width: 30vw;
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
	justify-content: flex-end;
`;


const StyledButton = styled.div`
	margin: 10px;
`;

const TextContentPage: FC<RouteComponentProps<MatchParams>> = function ({ match }) {
	const { id }: { id: string } = match.params;
	const history = useHistory();
	const dispatch = useDispatch();

	const onRemove = () => {
		dispatch(deleteTextAsync.request(id));
		history.push("/check");
	};

	const onUpdate = () => {
		history.push(`/updatetext/${id}`);
	};
	return (
		<Template>
			<TextContentPageWrapper>
				<ToolContainer>
					
					<StyledButton>
						<Button onClick={onUpdate} disabled={false}>
							수정
						</Button>
					</StyledButton>
					<StyledButton>
						<Button onClick={onRemove} disabled={false}>
							삭제
						</Button>
					</StyledButton>
				</ToolContainer>

				<TextContentContainer id={id} />
			</TextContentPageWrapper>
		</Template>
	);
};

export default TextContentPage;