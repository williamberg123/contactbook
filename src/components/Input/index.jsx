import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../contexts/AppProvider/AppContext';
import StyledInput from './styles';

export default function Input({ type, placeholder }) {
	const { emailRef, passwordRef } = useContext(AppContext);
	const elementRef = type === 'email'
	? emailRef
	: (
		type === 'password'
		? passwordRef
		: null
	);

	return (
		<StyledInput ref={elementRef} type={type} placeholder={placeholder} />
	);
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
};
