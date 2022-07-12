import { useContext } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppContext from '../../contexts/AppProvider/AppContext';

import StyledListItem from './styles';

export default function ListItem(props) {
	const { firstName, lastName, email, phoneNumber, docRef } = props;
	const { deleteContact, user } = useContext(AppContext);

	return (
		<StyledListItem>
			<span>{firstName}</span>
			<span>{lastName}</span>
			<span>{email}</span>
			<span>{phoneNumber}</span>
			<Link to={`/editcontact?id=${docRef}`}>Editar</Link>
			<Link onClick={(e) => deleteContact(e, user.uid, docRef)} to="/deletecontact">Excluir</Link>
		</StyledListItem>
	);
}

ListItem.propTypes = {
	docRef: PropTypes.string.isRequired,
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phoneNumber: PropTypes.string.isRequired,
};
