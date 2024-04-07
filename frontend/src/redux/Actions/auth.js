import { types } from '../Actions/authTypes';
import { auth } from '../../firebase/config';
import {
	GoogleAuthProvider,
	signInWithPopup,
	FacebookAuthProvider,
} from 'firebase/auth';

export const login = (uid, displayName) => ({
	type: types.login,
	payload: { uid, displayName },
});

export const logout = () => ({
	type: types.logout,
});

export const startGoogleAuth = () => {
	return async (dispatch) => {
		try {
			const provider = new GoogleAuthProvider();
			const { user } = await signInWithPopup(auth, provider);
			console.log(user)
			const idToken = await user.getIdToken();
			localStorage.setItem('token', idToken);
			dispatch(login(user.uid, user.displayName ));
		} catch (error) {
			console.error(error);
		}
	};
};

export const startFacebookAuth = () => {
	return async (dispatch) => {
		try {
			const provider = new FacebookAuthProvider();
			const  userCredential  = await signInWithPopup(auth, provider);
			console.log(userCredential)
			const user = userCredential.user;
			const idToken = await user.getIdToken();
			localStorage.setItem('token', idToken);
			console.log(user)
			dispatch(login(user.uid, user.displayName));
		} catch (error) {
			console.error(error);
		}
	};
};
