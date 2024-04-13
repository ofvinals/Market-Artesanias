import { apiURL } from '../api/apiURL.js';

export const getProduct = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Producto/${id}`, {
			headers: { 'x-token': token },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getProducts = async () => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Producto`, {
			headers: { 'x-token': token },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateProduct = async (id, values) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.put(`/Producto/${id}`, values, {
			headers: { 'x-token': token },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteProduct = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.delete(`/Producto/${id}`, {
			headers: { 'x-token': token },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};


