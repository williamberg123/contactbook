import PropTypes from 'prop-types';
import StyledLoginWithGoogle from './styles';

export default function LoginWithGoogle({ children, buttonFunc }) {
	return (
		<StyledLoginWithGoogle onClick={buttonFunc}>
			{children}
		</StyledLoginWithGoogle>
	);
}

LoginWithGoogle.propTypes = {
	children: PropTypes.node.isRequired,
	buttonFunc: PropTypes.func.isRequired,
};
