import PropTypes from 'prop-types';
import StyledSubmitButton from './styles';

export default function SubmitButton({ children }) {
	return (
		<StyledSubmitButton type="submit">{children}</StyledSubmitButton>
	);
}

SubmitButton.propTypes = {
	children: PropTypes.string.isRequired,
};
