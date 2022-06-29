import PropTypes from 'prop-types';

const useRedirect = (path) => {
	window.location.href = path;
};

export default function IsAuth({ isAuth, children }) {
	if (isAuth) {
		return children;
	}

	useRedirect('/login-firebase/login');
}

IsAuth.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
};
