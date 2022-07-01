import styled from 'styled-components';

const StyledNewContact = styled.div`
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
`;

export const StyledLabel = styled.label`
	display: flex;
	flex-direction: column;
	margin: 10px 0;

	& input {
		margin: 10px 0;
	}
`;

export default StyledNewContact;
