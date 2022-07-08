import { deleteUser } from 'firebase/auth';
import { firebaseAuth } from '../../data/Firebase';

const deleteAccount = async () => {
	try {
		await deleteUser(firebaseAuth.currentUser);

		// await deleteDoc(collection(db, 'users'), where('uid', '==', user.uid));

		alert('Usuário excluído com sucesso');
	} catch (error) {
		alert('Não foi possível excluir a conta');
	}
};

export default deleteAccount;
