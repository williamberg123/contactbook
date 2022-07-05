// import { ref, set } from 'firebase/database';
// import { database } from '../../data/Firebase';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../data/Firebase';

const addNewUser = async (userInfo) => {
	const {
		accessToken, emailVerified, isAnonymous, metadata, phoneNumber, photoURL,
		email, uid,
	} = userInfo;

	const { createdAt, creationTime, lastLoginAt, lastSignInTime } = metadata;
	const usersCollectionRef = collection(db, 'users');

	await addDoc(usersCollectionRef, {
		accessToken,
		email,
		emailVerified,
		isAnonymous,
		metadata: {
			createdAt,
			creationTime,
			lastLoginAt,
			lastSignInTime,
		},
		phoneNumber,
		photoURL,
		uid,
	})
		.then()
		.catch(() => alert('Algo deu errado!'));
};

export default addNewUser;
