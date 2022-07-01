import emailValidator from 'email-validator';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../data/Firebase';

import * as types from './types';

const reducer = (state, action) => {
	switch (action.type) {
		case types.LOGIN: {
			localStorage.setItem('loggedInUser', JSON.stringify(action.payload));
			return { ...action.payload };
		}

		case types.REGISTER_ACCOUNT: {
			let createdUser = null;
			const { emailRef, passwordRef } = action.payload;

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
					createdUser = userCredential.user;

					window.location.href = '/';
				})
				.catch(() => {
					alert('Não foi possível criar sua conta');
				});

			return createdUser;
		}

		case types.LOGOUT: {
			localStorage.removeItem('loggedInUser');
			return null;
		}
	}

	return state;
};

export default reducer;
