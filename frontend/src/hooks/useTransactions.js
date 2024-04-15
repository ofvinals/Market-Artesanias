import { apiURL } from '../api/apiURL.js';

export const getTransaction = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Registro/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getTransactions = async () => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Registro`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};




