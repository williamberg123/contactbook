import PropTypes from 'prop-types';
import StyledInput from './styles';

export default function Input({ type, placeholder, elementRef }) {
	return (
		<StyledInput ref={elementRef} type={type} placeholder={placeholder} />
	);
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	elementRef: PropTypes.instanceOf(Object),
};
