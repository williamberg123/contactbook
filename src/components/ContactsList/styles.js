import styled from 'styled-components';

const StyledContactsList = styled.div`
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	margin: auto;

	& > svg {
		width: 160px;
		height: 160px;
		margin: 0 auto;
		color: #bfbfbf;
	}

	& > span {
		color: #bfbfbf;
		font-weight: bold;
		margin: 10px auto;
	}

	@media (max-width: 600px) {
		& > svg {
			width: 120px;
			height: 120px;
		}
	}
`;

export default StyledContactsList;
