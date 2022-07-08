import styled from 'styled-components';

const StyledCreateAccountPage = styled.div`
	& h1 {
		text-align: center;
		padding: 30px 0;
		margin-bottom: 30px;
	}

	& form > span {
		font-weight: bold;
		font-size: 2rem;
		text-align: center;
		margin-bottom: 20px;
		color: #00bc5e;
	}

	& input[type="submit"] {
		background-color: #00bc5e;
		border: none;
		border-radius: 5px;
		color: white;
		font-weight: bold;
		padding: 15px;
		font-size: 1rem;
	}

	& input[type="submit"]:hover {
		background-color: #4aef9d;
		transition: 0.3s;
	}
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	margin: 10px 0;
	text-align: center;

	& input {
		margin: 10px 0;
	}
`;

export const StyledSpan = styled.span``;

export default StyledCreateAccountPage;
