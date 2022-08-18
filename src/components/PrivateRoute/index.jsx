import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, isAuth }) {
	return isAuth ? children : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
	isAuth: PropTypes.bool.isRequired,
};
