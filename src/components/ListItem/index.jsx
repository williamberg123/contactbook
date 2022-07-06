import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import StyledListItem from './styles';

export default function ListItem({ contactInfo }) {
	const { firstName, lastName, email, phoneNumber } = contactInfo;

	return (
		<StyledListItem>
			<span>{firstName}</span>
			<span>{lastName}</span>
			<span>{email}</span>
			<span>{phoneNumber}</span>
			<Link to={`/editcontact?id=${email}`}>Editar</Link>
			<Link to="/deletecontact">Excluir</Link>
		</StyledListItem>
	);
}

ListItem.propTypes = {
	contactInfo: PropTypes.shape({
		firstName: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		phoneNumber: PropTypes.string.isRequired,
	}).isRequired,
};
