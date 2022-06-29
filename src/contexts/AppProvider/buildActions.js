import * as types from './types';

const buildActions = (dispatch) => {
	return {
		login: (user) => dispatch({ type: types.LOGIN, payload: user }),
		logout: () => dispatch({ type: types.LOGOUT }),
	};
};

export default buildActions;
