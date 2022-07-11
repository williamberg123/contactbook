import PropTypes from 'prop-types';
import StyledImage from './styles';

export default function Image({ source }) {
	return (
		<StyledImage src={source} />
	);
}

Image.propTypes = {
	source: PropTypes.string,
};
