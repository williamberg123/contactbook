import { signInWithEmailAndPassword, linkWithCredential } from 'firebase/auth';
import emailValidator from 'email-validator';

import { firebaseAuth } from '../../data/Firebase';

const accountLogin = async (email, password) => {
	if (!emailValidator.validate(email)) {
		alert('Digite um email válido');
		return;
	}

	if (password.length < 6 || password.length > 50) {
		alert('Senha deve ter de 6 a 50 caracteres');
		return;
	}

	const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);

	await linkWithCredential(userCredential.user, firebaseAuth);
};

export default accountLogin;
