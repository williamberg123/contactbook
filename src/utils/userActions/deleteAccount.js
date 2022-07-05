import { deleteUser } from 'firebase/auth';
import { deleteDoc } from 'firebase/firestore';

const deleteAccount = async (user, userActions) => {
	try {
		await deleteUser(user);
		await deleteDoc({ uid: user.uid });

		userActions.logout();

		alert('Usuário excluído com sucesso');
	} catch (error) {
		alert('Não foi possível excluir a conta');
	}
};

export default deleteAccount;
