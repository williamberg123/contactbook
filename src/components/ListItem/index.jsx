import { useContext } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppContext from '../../contexts/AppProvider/AppContext';

import StyledListItem from './styles';

export default function ListItem({ contactInfo, docRef }) {
	const { firstName, lastName, email, phoneNumber } = contactInfo;
	const { deleteContact } = useContext(AppContext);

	return (
		<StyledListItem>
			<span>{firstName}</span>
			<span>{lastName}</span>
			<span>{email}</span>
			<span>{phoneNumber}</span>
			<Link to={`/editcontact?id=${docRef}`}>Editar</Link>
			<Link onClick={(e) => deleteContact(e, docRef)} to="/deletecontact">Excluir</Link>
		</StyledListItem>
	);
}

ListItem.propTypes = {
	docRef: PropTypes.string.isRequired,
	contactInfo: PropTypes.shape({
		firstName: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		phoneNumber: PropTypes.string.isRequired,
	}).isRequired,
};
