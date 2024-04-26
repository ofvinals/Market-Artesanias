import { useState } from 'react';
import { apiURL } from '../api/apiURL';
import { useNavigate } from 'react-router-dom';
import authFire from '../firebase/config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { types } from '../redux/Actions/authTypes';
import { useDispatch } from 'react-redux';
import { jwtDecode as jwt_decode } from 'jwt-decode';

export const useAuth = () => {
	const [currentUser, setCurrentUser] = useState();
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const auth = async (values) => {
		try {
			const user = await apiURL.post('/Login', values);
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
				const userEmail = user.email;
				const userExists = await checkIfUserExists(userEmail);
				if (!userExists) {
					createUserInDatabase(userEmail);
				} else {
					const idToken = await user.getIdToken();
					localStorage.setItem('token', idToken);
					await setCurrentUser(userEmail);
					console.log(currentUser);
				}
			} catch (error) {
				console.error(error);
			}
		};
	};

	const checkIfUserExists = async (values) => {
		try {
			const user = await apiURL.post('/LoginGoogle', values);
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

	const createUserInDatabase = async (values) => {
		try {
			const response = await apiURL.post('/RegistroGoogle', values);
			if (response.status === 200) {
				const { accesoWJT } = response.data;
				localStorage.setItem('token', accesoWJT);
				const decodedToken = jwt_decode(accesoWJT);
				const { Email, userId, Admin } = decodedToken;
				dispatch({
					type: types.login,
					payload: { Email, userId, Admin },
				});
				navigate('/welcome');
			}
		} catch (error) {
			console.error('Error de red:', error);
			console.error('Respuesta de error:', error.response?.data);
		}
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
	};
};
