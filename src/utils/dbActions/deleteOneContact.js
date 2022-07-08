import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../data/Firebase';

const deleteOneContact = async (docRef) => {
	const promptResult = prompt('Deseja excluir este contato? Se sim, digite "sim" e confirme.');

	if (promptResult && promptResult.toLowerCase() === 'sim') {
		const documentRef = doc(db, 'contacts', docRef);
		await deleteDoc(documentRef);
		window.location.href = '/';
	}
};

export default deleteOneContact;
