import styled from 'styled-components';

const StyledSubmitButton = styled.button`
	background-color: #00bc5e;
	border: none;
	border-radius: 5px;
	color: white;
	font-weight: bold;
	padding: 15px;
	font-size: 1rem;
	text-align: center;
	cursor: pointer;

	&:hover {
		background-color: #4aef9d;
		transition: 0.3s;
	}
`;

export default StyledSubmitButton;
