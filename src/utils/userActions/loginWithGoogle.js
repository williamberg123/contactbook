import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { firebaseAuth } from '../../data/Firebase';

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
	await signInWithRedirect(firebaseAuth, googleProvider);
};

export default signInWithGoogle;
