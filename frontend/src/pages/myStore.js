/* eslint-disable react-hooks/exhaustive-deps */
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
	const [store, setStore] = useState({});

	if (!isLoggedIn) {
		navigate('/login');
	}

	useEffect(() => {
		async function loadStore() {
			try {
				const storeData = await getStore();
				console.log(storeData);
				const firstStoreItem = storeData[0];
				setStore(firstStoreItem);
			} catch (error) {
				console.error('Error al cargar los datos de la tienda', error);
			}
		}
		loadStore();
	}, [id]);

	useEffect(() => {
		console.log(store);
		if (!store) {
			Swal.fire({
				icon: 'info',
				title: 'No tienes una tienda creada. Debes crear una!',
				showConfirmButton: false,
				timer: 3000,
			});
			navigate('/createStore');
			return;
		}
	}, [store]);

	return (
		<>
			<NavBar />
			<Detail Store={store} />
			<Products Store={store} />
			<List />
		</>
	);
}

export default MyStore;
