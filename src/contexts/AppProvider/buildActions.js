import * as types from './types';

const buildActions = (dispatch) => {
	return {
		verifyLoggedInUser:
			(loggedInUser) => dispatch({ type: types.VERIFY_LOGGEDIN_USER, payload: loggedInUser }),
		login: (user) => dispatch({ type: types.LOGIN, payload: user }),
		logout: () => dispatch({ type: types.LOGOUT }),
	};
};

export default buildActions;
