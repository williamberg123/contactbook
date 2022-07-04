import { createUserWithEmailAndPassword } from 'firebase/auth';
import emailValidator from 'email-validator';

import { firebaseAuth } from '../../data/Firebase';
// import addNewUser from '../dbActions/addNewUser';

const createAccount = async (emailRef, passwordRef, userActions) => {
	if (!emailValidator.validate(emailRef.current.value)) {
		alert('Digite um email válido');
		return;
	} if (passwordRef.current.value.length < 6 || passwordRef.current.value.length > 50) {
		alert('Senha deve ter de 6 a 50 caracteres');
		return;
	}

	const email = emailRef.current.value;
	const password = passwordRef.current.value;

	createUserWithEmailAndPassword(firebaseAuth, email, password)
		.then((userCredentials) => {
			console.log(userCredentials.user);

			userActions.login(userCredentials.user);
			localStorage.setItem('loggedInUser', JSON.stringify(userCredentials.user));
			window.location.href = '/';
		})
		.catch();
};

export default createAccount;
