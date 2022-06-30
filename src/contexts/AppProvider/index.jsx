import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import emailValidator from 'email-validator';
import firebaseApp from '../../data/Firebase';

import AppContext from './AppContext';
import reducer from './reducer';
import buildActions from './buildActions';

export default function AppProvider({ children }) {
	const [user, userDispatch] = useReducer(reducer, null);
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

		const auth = getAuth(firebaseApp);

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const createdUser = userCredential.user;

				const { metadata, phoneNumber, accessToken } = createdUser;
				const userEmail = createdUser.email;

				const loggedInUser = {
					userEmail, metadata, phoneNumber, accessToken,
				};

				userActions.login(loggedInUser);

				localStorage.setItem('loggedInUserWithFirebase', JSON.stringify(loggedInUser));
				window.location.href = '/';
			})
			.catch(() => {
				alert('Usuário ou senha incorretos');
			});
	}, [emailRef, passwordRef]);

	const createAccount = useCallback(async (e) => {
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

		const auth = getAuth(firebaseApp);

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const createdUser = userCredential.user;

				const { metadata, phoneNumber, accessToken } = createdUser;
				const userEmail = createdUser.email;

				const loggedInUser = {
					userEmail, metadata, phoneNumber, accessToken,
				};

				userActions.login(loggedInUser);

				localStorage.setItem('loggedInUserWithFirebase', JSON.stringify(loggedInUser));
				window.location.href = '/';
			})
			.catch(() => {
				alert('Não foi possível criar sua conta');
			});
	}, []);

	useEffect(() => {
		const loggedInUser = JSON.parse(localStorage.getItem('loggedInUserWithFirebase'));

		if (loggedInUser) {
			userActions.login(loggedInUser);
		}
	}, []);

	const memoizedContext = useMemo(() => ({
		user, userActions, signIn, createAccount, emailRef, passwordRef,
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
