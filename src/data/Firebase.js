import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAOerUB9j_CCXixY9v4Z7BSUFxgse1wxwY',
	authDomain: 'login-firebase-c82e9.firebaseapp.com',
	projectId: 'login-firebase-c82e9',
	storageBucket: 'login-firebase-c82e9.appspot.com',
	messagingSenderId: '923598550191',
	appId: '1:923598550191:web:f322f278aea2222cc2d05a',
	measurementId: 'G-LSTNBS4QX7',
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
