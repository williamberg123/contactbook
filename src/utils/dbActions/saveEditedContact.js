import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../data/Firebase';

const saveEditedContact = async (contactInfo, uid, docRef) => {
	const documentRef = doc(db, 'users', uid, 'userContacts', docRef);

	await setDoc(documentRef, {
		...contactInfo,
	}, { merge: true });

	window.location.href = '/';
};

export default saveEditedContact;
