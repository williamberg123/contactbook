import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import reducer from './reducer';
import buildActions from './buildActions';

import createAccount from '../../utils/userActions/createAccount';
import accountLogin from '../../utils/userActions/login';
import deleteAccount from '../../utils/userActions/deleteAccount';
import { firebaseAuth } from '../../data/Firebase';

export default function AppProvider({ children }) {
	const [user, userDispatch] = useReducer(reducer, null);

	const userActions = useCallback(buildActions(userDispatch), []);

	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const signIn = useCallback(async (e) => {
		e.preventDefault();

		accountLogin(emailRef, passwordRef, userActions, user);
	}, [emailRef, passwordRef]);

	const registerAccount = useCallback(async (e) => {
		e.preventDefault();

		createAccount(emailRef, passwordRef, userActions);
	}, [emailRef, passwordRef]);

	const logout = useCallback(() => {
		userActions.logout();
		firebaseAuth.signOut();
	}, []);

	const createNewContact = useCallback((e) => {
		e.preventDefault();
	}, []);

	const deleteUser = useCallback(async () => {
		const response = prompt('Deseja realmente excluir sua conta? Se sim, digite "sim" e clique em ok.');

		if (response.toLowerCase() === 'sim') {
			deleteAccount(user, userActions);
		}
	}, []);

	useEffect(() => {
		firebaseAuth.onAuthStateChanged((userInfo) => {
			if (!userInfo) return;
			userActions.verifyLoggedInUser(userInfo);
		});
	}, [firebaseAuth]);

	const memoizedContext = useMemo(() => ({
		user, userActions, signIn, registerAccount, createNewContact, emailRef, passwordRef, logout,
		deleteUser,
	}), [user, emailRef, passwordRef]);

	return (
		<AppContext.Provider value={memoizedContext}>
			{children}
		</AppContext.Provider>
	);
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
