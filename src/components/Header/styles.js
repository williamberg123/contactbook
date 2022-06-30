import styled from 'styled-components';

const StyledHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px;
	background-color: #0084d6;
	color: white;
	font-weight: bold;

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
