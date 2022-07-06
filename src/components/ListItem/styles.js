import styled from 'styled-components';

const StyledListItem = styled.div`
	padding: 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid #afafaf;

	& a {
		text-decoration: none;
		padding: 10px;
		color: white;
		border-radius: 3px;
		background-color: #1cb7ff;
	}

	& a:last-child {
		background-color: red;
	}

	@media (max-width: 650px) {
		padding: 20px 0;
		font-size: 0.7rem;

		& a {
			padding: 5px;
		}
	}
`;

export default StyledListItem;
