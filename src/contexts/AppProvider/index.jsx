import { useCallback, useEffect, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';

import AppContext from './AppContext';
import reducer from './reducer';
import buildActions from './buildActions';

import deleteAccount from '../../utils/userActions/deleteAccount';
import { firebaseAuth } from '../../data/Firebase';
import addNewContact from '../../utils/dbActions/addNewContact';
import saveEditedContact from '../../utils/dbActions/editContact';
import deleteOneContact from '../../utils/dbActions/deleteOneContact';

export default function AppProvider({ children }) {
	const [user, userDispatch] = useReducer(reducer, null);

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

	const editContact = useCallback(async (e, contactInfo, docRef) => {
		e.preventDefault();

		if (!firebaseAuth.currentUser) {
			window.location.href = '/';
			return;
		}

		await saveEditedContact(contactInfo, docRef);
	}, []);

	const deleteUser = useCallback(async () => {
		if (!firebaseAuth.currentUser) {
			window.location.href = '/';
			return;
		}

		const response = prompt('Deseja realmente excluir sua conta? Se sim, digite "sim" e clique em ok.');

		if (response.toLowerCase() === 'sim') {
			await deleteAccount(user, userActions);
		}
	}, []);

	const deleteContact = useCallback(async (e, docRef) => {
		e.preventDefault();

		await deleteOneContact(docRef);
	}, []);

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, (userInfo) => {
			if (!userInfo) return;
			userActions.verifyLoggedInUser(userInfo);
		});
	}, [firebaseAuth]);

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
