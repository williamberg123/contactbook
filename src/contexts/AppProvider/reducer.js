import * as types from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case types.LOGIN: {
			localStorage.setItem('loggedInUserWithFirebase', JSON.stringify(action.payload));
			return { ...action.payload };
		}

		case types.LOGOUT: {
			localStorage.setItem('loggedInUserWithFirebase', null);
			return null;
		}
	}

	return state;
};

export default reducer;
