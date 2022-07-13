import { useCallback, useEffect, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';

import AppContext from './AppContext';
import reducer from './reducer';
import buildActions from './buildActions';

import deleteAccount from '../../utils/dbActions/deleteUser';
import { firebaseAuth } from '../../data/Firebase';
import addNewContact from '../../utils/dbActions/addNewContact';
import saveEditedContact from '../../utils/dbActions/saveEditedContact';
import deleteOneContact from '../../utils/dbActions/deleteOneContact';

export default function AppProvider({ children }) {
	const [user, userDispatch] = useReducer(reducer, null, () => {
		const loggedInUser = JSON.parse(sessionStorage.getItem('loggedin_user'));
		return loggedInUser;
	});

	const userActions = useCallback(buildActions(userDispatch), []);

	const signInWithGoogle = useCallback(async () => {
		if (user) {
			window.location.href = '/';
			return;
		}

		try {
			const googleProvider = new GoogleAuthProvider();
			await signInWithRedirect(firebaseAuth, googleProvider);
		} catch (error) {
			alert('Ops, algo deu errado');
		}
	}, [user]);

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

	const editContact = useCallback(async (e, contactInfo, uid, docRef) => {
		e.preventDefault();

		if (!firebaseAuth.currentUser) {
			window.location.href = '/';
			return;
		}

		await saveEditedContact(contactInfo, uid, docRef);
	}, [firebaseAuth]);

	const deleteUser = useCallback(async () => {
		if (!user) {
			window.location.href = '/';
			return;
		}

		const response = prompt('Deseja realmente excluir sua conta? Se sim, digite "sim" e clique em ok.');

		if (response.toLowerCase() === 'sim') {
			await deleteAccount();
			userActions.logout();
		}
	}, [firebaseAuth, user]);

	const deleteContact = useCallback(async (e, uid, docRef) => {
		e.preventDefault();

		await deleteOneContact(uid, docRef);
	}, []);

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, (userInfo) => {
			if (!userInfo) return;
			userActions.login(userInfo);
		});
	}, [firebaseAuth]);

	useEffect(() => {
		window.addEventListener('unload', logout);

		return () => {
			window.removeEventListener('unload', logout);
		};
	}, []);

	const memoizedContext = useMemo(() => ({
		user, userActions, signInWithGoogle, createNewContact, editContact,
		logout, deleteUser, deleteContact,
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
