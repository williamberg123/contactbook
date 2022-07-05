import styled from 'styled-components';

const StyledLoginWithGoogle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px;
	cursor: pointer;
	margin: 20px 0;
	background-color: #d3d3d3;
	border-radius: 5px;
	font-weight: bold;

	& > svg {
		width: 25px;
		height: 25px;
		margin-left: 10px;
	}
`;

export default StyledLoginWithGoogle;
