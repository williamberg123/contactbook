import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../data/Firebase';

const saveEditedContact = async (contactInfo, docRef) => {
	const documentRef = doc(db, 'contacts', docRef);

	await setDoc(documentRef, {
		contactInfo: {
			...contactInfo,
		},
	}, { merge: true });

	window.location.href = '/';
};

export default saveEditedContact;
