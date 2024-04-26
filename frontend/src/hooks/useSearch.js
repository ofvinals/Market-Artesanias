import { apiURL } from '../api/apiURL.js';

export const searchItemsInDatabase = async (values) => {
	try {
		console.log(values)
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Producto`, values, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
	}
};