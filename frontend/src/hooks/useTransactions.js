import { apiURL } from '../api/apiURL.js';

export const getCompras = async () => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Transaccion`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getVentasById = async (Id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Transaccion/Venta/${Id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};

export const getComprasById = async (Id) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Transaccion/Compra/${Id}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};



