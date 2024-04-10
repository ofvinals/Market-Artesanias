import { apiURL } from '../api/apiURL.js';

export const getUser = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Registro/${id}`, {
			headers: { 'x-token': token },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getUsers = async () => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Registro`, {
			headers: { 'x-token': token },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateUser = async (id, values) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.put(`/Registro/${id}`, values, {
			headers: { 'x-token': token },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteUser = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.delete(`/Registro/${id}`, {
			headers: { 'x-token': token },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};


