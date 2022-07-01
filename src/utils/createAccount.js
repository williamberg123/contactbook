import { createUserWithEmailAndPassword } from 'firebase/auth';
import emailValidator from 'email-validator';
import { useContext } from 'react';
import AppContext from '../contexts/AppProvider/AppContext';

const createAccount = async (e, auth, userActions) => {
	const { emailRef, passwordRef } = useContext(AppContext);

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
};

export default createAccount;
