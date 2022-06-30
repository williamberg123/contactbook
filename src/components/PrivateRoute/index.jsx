import PropTypes from 'prop-types';

export default function PrivateRoute({ children, isAuth }) {
	if (!isAuth) {
		window.location.href = '/';
	} else {
		return children;
	}
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
	isAuth: PropTypes.bool.isRequired,
};
