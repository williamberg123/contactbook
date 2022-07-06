import styled from 'styled-components';

const StyledPageTitle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 0;

	& h1 {
		font-size: 2.2rem;
		margin-bottom: 10px;
		color: #222;
	}

	& p {
		font-size: 1.7rem;
		color: #a3a3a3;
	}

	@media (max-width: 600px) {
		& h1 {
			font-size: 1.7rem;
		}

		& p {
			font-size: 1.3rem;
		}
	}
`;

export default StyledPageTitle;
