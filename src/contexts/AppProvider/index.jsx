import { useCallback, useMemo, useReducer, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import reducer from './reducer';
import buildActions from './buildActions';

export default function AppProvider({ children }) {
	const [ user, userDispatch ] = useReducer(reducer, null);
	const userActions = useCallback(buildActions(userDispatch), []);
	const [ users, setUsers ] = useState([]);

	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const signIn = useCallback(async (e) => {
		e.preventDefault();

		userActions.login({
			userEmail: emailRef.current.value,
			userPassword: passwordRef.current.value,
		});
	}, [emailRef, passwordRef]);

	const createAccount = useCallback(async (e) => {
		e.preventDefault();
	}, []);

	const memoizedContext = useMemo(() => ({
		user, userActions, signIn, createAccount, users, setUsers, emailRef, passwordRef,
	}), [user, emailRef, passwordRef, users]);

	return (
		<AppContext.Provider value={memoizedContext}>
			{children}
		</AppContext.Provider>
	);
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
