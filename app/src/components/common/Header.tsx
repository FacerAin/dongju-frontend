import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';


const HeaderWrapper = styled.div`
	z-index: 9;
	display: flex;
	width: 100%;
	height: 70px;
	background-color: black;
	position: fixed;
	justify-content: center;
	align-items: center;
`;

const TitleItem = styled.div`
	height: 35px;
	color: white;
	font-size: 30px;
	&:hover {
		color: white;
	}
`;

const Header: FunctionComponent = function () {

	return (

			<HeaderWrapper>
				<TitleItem>동주</TitleItem>
			</HeaderWrapper>
	);
};

export default Header;