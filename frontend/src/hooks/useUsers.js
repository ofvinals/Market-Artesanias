import { apiURL } from '../api/apiURL.js';

export const getUser = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Usuario/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getUsers = async () => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Usuario`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateUser = async (id, values) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.patch(`/Usuario/${id}`, values, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteUser = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.delete(`/Usuario/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const disableUser = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.delete(
			`/Usuario/${id}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const enableUser = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.delete(
			`/Usuario/${id}`,
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
