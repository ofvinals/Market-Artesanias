import { apiURL } from '../api/apiURL.js';

export const getStore = async () => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Tienda`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getStores = async () => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Tienda`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const createStore = async (values) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.post(`/Tienda`, values, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateStore = async (id, values) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.patch(`/Tienda/${id}`, values, {
			headers: { Authorization: `Bearer ${token}` },
		});
		console.log(res);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateNameStore = async (values) => {
	console.log(values)
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.put(`/Tienda`, values, {
			headers: { Authorization: `Bearer ${token}` },
		});
		console.log(res);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteStore = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.delete(`/Tienda/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const disableStore = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.put(
			`/Tienda/${id}`,
			{
				Activo: false,
			},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const enableStore = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.put(
			`/Tienda/${id}`,
			{
				Activo: true,
			},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		return res.data;
	} catch (error) {
		console.error(error);
	}
};
