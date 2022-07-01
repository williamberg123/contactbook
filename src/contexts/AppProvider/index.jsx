import { useCallback, useMemo, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';

import { signInWithEmailAndPassword } from 'firebase/auth';

import emailValidator from 'email-validator';
import { auth } from '../../data/Firebase';

import AppContext from './AppContext';
import reducer from './reducer';
import buildActions from './buildActions';
import createAccount from '../../utils/createAccount';

export default function AppProvider({ children }) {
	const [user, userDispatch] = useReducer(reducer, null, () => {
		const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
		return loggedInUser;
	});
	const userActions = useCallback(buildActions(userDispatch), []);

	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const signIn = useCallback(async (e) => {
		e.preventDefault();

		if (!emailValidator.validate(emailRef.current.value)) {
			alert('Digite um email válido');
			return;
		}

		if (passwordRef.current.value.length < 6 || passwordRef.current.value.length > 50) {
			alert('Senha deve ter de 6 a 50 caracteres');
			return;
		}

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const loggedInUser = userCredential.user;

				userActions.login(loggedInUser);
				window.location.href = '/';
			})
			.catch(() => {
				alert('Usuário ou senha incorretos');
			});
	}, [emailRef, passwordRef]);

	const registerAccount = useCallback(async (e) => {
		e.preventDefault();

		createAccount(emailRef, passwordRef, userActions);
	}, [emailRef, passwordRef]);

	const createNewContact = useCallback((e) => {
		e.preventDefault();
	}, []);

	const memoizedContext = useMemo(() => ({
		user, userActions, signIn, registerAccount, createNewContact, emailRef, passwordRef,
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
