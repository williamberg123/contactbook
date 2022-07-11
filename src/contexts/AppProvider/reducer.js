import * as types from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case types.VERIFY_LOGGEDIN_USER: {
			const loggedInUser = JSON.parse(sessionStorage.getItem('loggedin_user'));
			return loggedInUser;
		}

		case types.LOGIN: {
			sessionStorage.setItem('loggedin_user', JSON.stringify(action.payload));
			return { ...action.payload };
		}

		case types.LOGOUT: {
			sessionStorage.removeItem('loggedin_user');
			return null;
		}
	}

	return state;
};

export default reducer;
