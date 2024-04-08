import { useState } from 'react';
import { apiURL } from '../api/apiURL';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
	const [currentUser, setCurrentUser] = useState();
	const [errors, setErrors] = useState([]);
	const navigate = useNavigate();

	const auth = async (values) => {
		try {
			const res = await apiURL.post('/api/login', values);
			if (res.status === 200) {
				localStorage.setItem('token', res.data.token);
				setCurrentUser(res.data);
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
	};
};
