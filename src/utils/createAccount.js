import { createUserWithEmailAndPassword } from 'firebase/auth';
import emailValidator from 'email-validator';

import { auth } from '../data/Firebase';

const createAccount = (props) => {
	const { emailRef, passwordRef, userActions } = props;

	if (!emailValidator.validate(emailRef.current.value)) {
		alert('Digite um email válido');
		return;
	} if (passwordRef.current.value.length < 6 || passwordRef.current.value.length > 50) {
		alert('Senha deve ter de 6 a 50 caracteres');
		return;
	}

	const email = emailRef.current.value;
	const password = passwordRef.current.value;

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const createdUser = userCredential.user;

			userActions.login(createdUser);

			localStorage.setItem('loggedInUser', JSON.stringify(createdUser));
			window.location.href = '/';
		})
		.catch(() => {
			alert('Não foi possível criar sua conta');
		});
};

export default createAccount;
