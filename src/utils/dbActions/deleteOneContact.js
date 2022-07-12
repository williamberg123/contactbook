import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../data/Firebase';

const deleteOneContact = async (uid, docRef) => {
	const promptResult = prompt('Deseja excluir este contato? Se sim, digite "sim" e confirme.');

	if (promptResult && promptResult.toLowerCase() === 'sim') {
		const documentRef = doc(db, 'contacts', uid, 'userContacts', docRef);
		await deleteDoc(documentRef);
		window.location.href = '/';
	}
};

export default deleteOneContact;
