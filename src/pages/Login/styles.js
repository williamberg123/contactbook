import styled from 'styled-components';

const StyledLoginPage = styled.div`
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

	& form > a {
		text-align: center;
		color: #00bc5e;
		margin: 10px 0;
	}

	& form > a:hover {
		color: #00a050;
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

export default StyledLoginPage;
