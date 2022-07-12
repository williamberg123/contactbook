import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../data/Firebase';

const addNewContact = async (uid, contactData) => {
	const collectionRef = collection(db, 'contacts', uid, 'userContacts');

	const { 0: firstName, 1: lastName, 2: email, 3: phoneNumber } = contactData;

	await addDoc(collectionRef, {
		firstName,
		lastName,
		email,
		phoneNumber,
	});

	window.location.replace('/');
};

export default addNewContact;
