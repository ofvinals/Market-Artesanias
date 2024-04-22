import { apiURL } from '../api/apiURL.js';

export const getProductVendedor = async () => {
	try {
		const token = localStorage.getItem('token');
			const res = await apiURL.get(`/Producto/Vendedor`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		console.log(res)
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getProducts = async () => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Producto`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getProduct = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Producto/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const createProduct = async (values) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.post(`/Producto`, values, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const updateProduct = async (values) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.put(`/Producto/`, values, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const unableProduct = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.put(`/Suspender`, id, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const enableProduct = async (id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.put(`/QuitarSuspension`, id, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};