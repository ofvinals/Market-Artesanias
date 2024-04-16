import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Detail } from '../components/MyStore/Detail';
import { Products } from '../components/MyStore/Products';
import { List } from '../components/MyStore/List';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getStore } from '../hooks/useStore';
import Swal from 'sweetalert2';

function MyStore() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const { id } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const [store, setStore] = useState([]);

	if (!isLoggedIn) {
		navigate('/login');
	}

	useEffect(() => {
		async function loadStore() {
			try {
				const storeData = await getStore();
				setStore(storeData);
			} catch (error) {
				console.error('Error al cargar los datos de la tienda', error);
			}
		}
		loadStore();
	}, [id]);

	const stored = { id: 1, Nombre: 'Oscar' };
	useEffect(() => {
		console.log(store);
		if (stored.length === 0) {
			Swal.fire({
				icon: 'info',
				title: 'No tienes una tienda creada. Debes crear una!',
				showConfirmButton: false,
				timer: 3000,
			});
			navigate('/createStore');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [store, navigate]);

	return (
		<>
			<NavBar />
			<Detail nombreStore={stored.Nombre} idStore={stored.id} />
			<Products />
			<List />
		</>
	);
}

export default MyStore;
