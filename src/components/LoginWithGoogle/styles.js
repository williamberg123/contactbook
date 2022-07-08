import styled from 'styled-components';

const StyledLoginWithGoogle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
	cursor: pointer;
	margin: 20px 0;
	background-color: #e5e5e5;
	color: #00bc5e;
	border-radius: 5px;
	font-weight: bold;

	&:hover {
		background-color: #d8d8d8;
	}

	& > svg {
		width: 25px;
		height: 25px;
		margin-left: 10px;
	}
`;

export default StyledLoginWithGoogle;
