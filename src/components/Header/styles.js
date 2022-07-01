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
		position: relative;
		font-weight: normal;
		border-radius: 50%;
		background-color: #005b93;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 10px;
		cursor: pointer;
		transition: 0.4s;
	}

	& .links-div .user-profile .hidden-menu {
		position: absolute;
		font-size: 0.7rem;
		list-style: none;
		display: none;
		flex-direction: column;
		align-items: center;
		bottom: -75px;
		right: -50%;
		padding: 5px;
		background-color: #005b93;
		border-radius: 5px;
	}

	& .links-div .user-profile:hover .hidden-menu {
		display: flex;
	}

	& .links-div .user-profile:hover .hidden-menu .triangle {
		position: absolute;
		top: -28px;
		right: 20px;
		width: 0;
		height: 0;
		border-color: transparent;
		border-width: 10px;
		border-style: solid;
		border-bottom-color: #005b93;
	}

	& .links-div .user-profile .hidden-menu div {
		width: 70px;
		text-align: center;
		margin: 5px 0;
		padding: 2px;
	}

	& .links-div .user-profile .hidden-menu .account-actions:hover {
		background-color: #0084d6;
	}

	& .links-div .user-first-letter {
		width: 35px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}

	& .links-div .user-first-letter:hover {
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
