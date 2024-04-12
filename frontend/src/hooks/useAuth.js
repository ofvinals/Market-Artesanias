import {  useState } from 'react';
import { apiURL } from '../api/apiURL';
import { useNavigate } from 'react-router-dom';
import authFire from '../firebase/config';
import {
	GoogleAuthProvider,
	signInWithPopup,
	FacebookAuthProvider,
} from 'firebase/auth';

export const useAuth = () => {
	const [currentUser, setCurrentUser] = useState();
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();

	const auth = async (values) => {
		try {
			const user = await apiURL.post('/Login', values);
			console.log(user);
			if (user.status === 200) {
				const userData = user.data; 
				await setCurrentUser(userData);
				const { accesoWJT } = userData;
				localStorage.setItem('token', accesoWJT);
				return user;
			}
		} catch (error) {
			console.log(error.response.data);
			setErrors(error.response.data);
			throw error;
		}
	};

	const startGoogleAuth = () => {
		return async () => {
			try {
				const provider = new GoogleAuthProvider();
				const { user } = await signInWithPopup(authFire, provider);
				const userEmail = user.email
				console.log(userEmail)
				// const userExists = await checkIfUserExists(userEmail);
				//   if (!userExists) {
				// 	 createUserInDatabase(userEmail);
				//   } else {
				const idToken = await user.getIdToken();
				localStorage.setItem('token', idToken);
				await setCurrentUser(userEmail );
				console.log(currentUser);
			// }
			} catch (error) {
				console.error(error);
			}
		};
	};

	const startFacebookAuth = () => {
		return async () => {
			try {
				const provider = new FacebookAuthProvider();
				console.log(provider);
				const userCredential = await signInWithPopup(authFire, provider);
				console.log(userCredential);
				const user = userCredential.user;
				const idToken = await user.getIdToken();
				localStorage.setItem('token', idToken);
				console.log(user);
			} catch (error) {
				console.error(error);
			}
		};
	};

	const logout = () => {
		localStorage.removeItem('token');
		setCurrentUser(null);
		navigate('/home');
	};

	return {
		auth,
		logout,
		currentUser,
		errors,
		startGoogleAuth,
		startFacebookAuth,
	};
};
