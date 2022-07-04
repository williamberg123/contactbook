import { deleteUser } from 'firebase/auth';

const deleteAccount = async (user, userActions) => {
	try {
		await deleteUser(user);
		userActions.logout();

		alert('Usuário excluído com sucesso');
	} catch (error) {
		alert('Não foi possível excluir a conta');
	}
};

export default deleteAccount;
