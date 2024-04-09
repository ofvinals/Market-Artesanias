import { useState } from 'react';
import { apiURL } from '../api/apiURL';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { types } from '../redux/Actions/authTypes';

export const useAuth = () => {
	const [currentUser, setCurrentUser] = useState();
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const auth = async (values) => {
		console.log(values);
		try {
			const res = await apiURL.post('/Login', values);
			if (res.status === 200) {
				const { accesoWJT, admin, vendedor } = res.data; 
				localStorage.setItem('token', accesoWJT); 
				setCurrentUser(res.data); 
				dispatch({
					type: types.basicAuth,
					payload: { JWT: accesoWJT, admin, vendedor },
				}); // Enviar acción de autenticación al reductor
				return res.data;
			}
		} catch (error) {
			console.log(error.response.data);
			setErrors(error.response.data);
			throw error;
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
	};
};
