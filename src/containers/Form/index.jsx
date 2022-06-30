import PropTypes from 'prop-types';
import StyledForm from './styles';

export default function Form({ children, submitFunc }) {
	return (
		<StyledForm onSubmit={submitFunc}>
			{children}
		</StyledForm>
	);
}

Form.propTypes = {
	children: PropTypes.node.isRequired,
	submitFunc: PropTypes.func.isRequired,
};
