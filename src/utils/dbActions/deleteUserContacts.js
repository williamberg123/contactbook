import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../data/Firebase';

const deleteUserContacts = async (uid) => {
	const docRef = doc(db, 'users', uid);
	await deleteDoc(docRef);
};

export default deleteUserContacts;
