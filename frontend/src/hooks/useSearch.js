import { apiURL } from '../api/apiURL.js';

export const searchItemsInDatabase = async (values) => {
	try {
		const token = localStorage.getItem('token');
		const res = await apiURL.get(`/Producto?Nombre=${values}`, {
			// Aquí estaba un paréntesis de más
			headers: { Authorization: `Bearer ${token}` },
		});
		return res.data;
	} catch (error) {
		console.error(error);
		// Puedes manejar el error según tus necesidades, como lanzar una excepción o devolver un valor predeterminado
		throw error;
	}
};
