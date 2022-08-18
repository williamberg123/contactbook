import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

// eslint-disable-next-line
const appCheck = initializeAppCheck(firebaseApp, {
	provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_PUBLICKEY),
	isTokenAutoRefreshEnabled: true,
});

// eslint-disable-next-line
export const firebaseAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
