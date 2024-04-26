import axios from 'axios';

export const apiURL = axios.create({
	baseURL: 'https://market-artesanias.onrender.com',
});