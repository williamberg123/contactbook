import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../data/Firebase';

const addNewContact = async (uid, contactData) => {
	const contactsCollectionRef = collection(db, 'contacts');

	await addDoc(contactsCollectionRef, {
		uid,
		contactInfo: {
			firstName: contactData[0],
			lastName: contactData[1],
			email: contactData[2],
			phoneNumber: contactData[3],
		},
	});

	window.location.href = '/';
};

export default addNewContact;
