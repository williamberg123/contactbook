import { useCallback, useEffect, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';

import AppContext from './AppContext';
import reducer from './reducer';
import buildActions from './buildActions';

import createAccount from '../../utils/userActions/createAccount';
import accountLogin from '../../utils/userActions/loginWithEmailAndPassword';
import deleteAccount from '../../utils/userActions/deleteAccount';
import { firebaseAuth } from '../../data/Firebase';
import addNewContact from '../../utils/dbActions/addNewContact';

export default function AppProvider({ children }) {
	const [user, userDispatch] = useReducer(reducer, null);

	const userActions = useCallback(buildActions(userDispatch), []);

	const signInWithEmailAndPassword = useCallback(async (e, email, password) => {
		e.preventDefault();

		await accountLogin(email, password);
	}, []);

	const signInWithGoogle = useCallback(async () => {
		if (user) {
			window.location.href = '/';
			return;
		}

		const googleProvider = new GoogleAuthProvider();
		await signInWithRedirect(firebaseAuth, googleProvider);
	}, []);

	const registerAccount = useCallback(async (e, email, password) => {
		e.preventDefault();

		await createAccount(email, password);
	}, []);

	const logout = useCallback(() => {
		userActions.logout();
		firebaseAuth.signOut();
	}, []);

	const createNewContact = useCallback(async (e, ...contactInfo) => {
		e.preventDefault();

		if (!user) {
			window.location.href = '/';
			return;
		}

		await addNewContact(user.uid, { ...contactInfo });
	}, [user]);

	const deleteUser = useCallback(async () => {
		const response = prompt('Deseja realmente excluir sua conta? Se sim, digite "sim" e clique em ok.');

		if (response.toLowerCase() === 'sim') {
			await deleteAccount(user, userActions);
		}
	}, []);

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, (userInfo) => {
			if (!userInfo) return;
			userActions.verifyLoggedInUser(userInfo);
		});
	}, [firebaseAuth]);

	const memoizedContext = useMemo(() => ({
		user, userActions, signInWithEmailAndPassword, signInWithGoogle, registerAccount, createNewContact, logout,
		deleteUser,
	}), [user]);

	return (
		<AppContext.Provider value={memoizedContext}>
			{children}
		</AppContext.Provider>
	);
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
