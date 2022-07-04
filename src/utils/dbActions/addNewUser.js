// import { ref, set } from 'firebase/database';
// import { database } from '../../data/Firebase';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../data/Firebase';

const addNewUser = async (userInfo) => {
	addDoc(collection(db, '/users'), {
		...userInfo,
	})
		.then()
		.catch((error) => console.log(error));
};

export default addNewUser;
