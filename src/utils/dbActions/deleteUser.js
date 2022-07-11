import { deleteUser } from 'firebase/auth';
import { firebaseAuth } from '../../data/Firebase';

const deleteAccount = async () => {
	try {
		await deleteUser(firebaseAuth.currentUser);

		alert('Usuário excluído com sucesso');
	} catch (error) {
		console.log(error);
		alert('Não foi possível excluir a conta');
	}
};

export default deleteAccount;
