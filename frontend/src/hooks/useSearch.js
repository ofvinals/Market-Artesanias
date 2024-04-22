import { apiURL } from '../api/apiURL.js';

export const searchItemsInDatabase = async () => {
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