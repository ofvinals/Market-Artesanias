import { apiURL } from '../api/apiURL.js';

export const getCompras = async () => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Compra`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getVentas = async () => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Venta`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};




