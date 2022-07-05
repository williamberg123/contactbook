import { createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';
import emailValidator from 'email-validator';

import { firebaseAuth } from '../../data/Firebase';
import addNewUser from '../dbActions/addNewUser';

const createAccount = async (email, password) => {
	if (!emailValidator.validate(email)) {
		alert('Digite um email válido');
		return;
	} if (password.length < 6 || password.length > 50) {
		alert('Senha deve ter de 6 a 50 caracteres');
		return;
	}

	const createdUser = await createUserWithEmailAndPassword(firebaseAuth, email, password);

	try {
		await addNewUser(createdUser.user);

		window.location.href = '/';
	} catch (error) {
		deleteUser(createdUser.user);
		alert('Não foi possível criar sua conta :( ');
	}
};

export default createAccount;
