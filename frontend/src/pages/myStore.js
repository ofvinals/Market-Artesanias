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
	const [storeLoaded, setStoreLoaded] = useState(false);

	useEffect(() => {
		if (!isLoggedIn || !id) {
			navigate('/login');
			Swal.fire({
				icon: 'warning',
				title: 'Debes iniciar sesion!',
				showConfirmButton: false,
				timer: 2000,
			});
			return;
		}
	}, [isLoggedIn, id]);

	useEffect(() => {
		async function loadStore() {
			try {
				const storeData = await getStore();
				const firstStoreItem = storeData[0];
				setStore(firstStoreItem);
				setStoreLoaded(true);
			} catch (error) {
				console.error('Error al cargar los datos de la tienda', error);
			}
		}
		loadStore();
	}, [id]);

	useEffect(() => {
		async function checkStore() {
			if (!store && storeLoaded) {
				const result = await Swal.fire({
					title: 'No tienes una tienda creada!',
					text: 'Quieres crear tu tienda de ventas?',
					icon: 'info',
					showCancelButton: true,
					confirmButtonColor: '#E98C00',
					cancelButtonColor: '#8f8e8b',
					confirmButtonText: 'Sí, crear mi tienda',
					cancelButtonText: 'Cancelar',
				});
				if (result.isConfirmed) {
					Swal.close();
					navigate('/createStore');
				} else {
					Swal.fire({
						icon: 'warning',
						title: 'Deberas crear tu tienda para realizar ventas!',
						showConfirmButton: false,
						timer: 2000,
					});
					navigate('/store');
					return;
				}
			}
		}

		checkStore();
	}, [store, storeLoaded, navigate]);

	if (!storeLoaded) {
		return <div>Cargando...</div>;
	}
	return (
		<>
			<NavBar />
			{storeLoaded && store ? (
				<>
					<Detail Store={store} />
					<Products Store={store} />
					<List />
				</>
			) : (
				<div>Cargando...</div>
			)}
		</>
	);
}

export default MyStore;
