import { useContext } from 'react';
import styled, { css } from 'styled-components';
import AppContext from '../../contexts/AppProvider/AppContext';

const StyledHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px 20px;
	background-color: #0084d6;
	color: white;
	font-weight: bold;

	${() => {
		const { user } = useContext(AppContext);

		return css`
			padding: ${ user ? '20px' : '30px 20px' };
		`;
	}}

	& .links-div {
		display: flex;
		align-items: center;
	}

	& .links-div .user-profile {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background-color: #005b93;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 10px;
		cursor: pointer;
	}

	& .links-div .user-profile:hover {
		background-color: #0074b2;
		text-decoration: none;
	}

	& a {
		text-decoration: none;
		font-weight: lighter;
		color: white;
		margin: 0 10px;
		transition: 0.2s;
	}

	& a:hover {
		color: #75d1ff;
		text-decoration: underline;
	}
`;

export default StyledHeader;
