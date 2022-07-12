import { deleteUser } from 'firebase/auth';
import { firebaseAuth } from '../../data/Firebase';
import deleteUserContacts from './deleteUserContacts';

const deleteAccount = async () => {
	const user = firebaseAuth.currentUser;

	try {
		await deleteUser(user);
		await deleteUserContacts(user.uid);

		alert('Usuário excluído com sucesso');
	} catch (error) {
		alert('Não foi possível excluir a conta');
		alert('Tente sair de sua conta e logar novamente, e em seguida tente excluir novamente');
	}
};

export default deleteAccount;
