/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Detail } from '../components/Store/Detail';
import { Products } from '../components/Store/Products';
import { getStore } from '../hooks/useStore';

function Store() {
	const [store, setStore] = useState({});
	const [storeLoaded, setStoreLoaded] = useState(false);

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
	}, []);

	return (
		<>
			<NavBar />
			{storeLoaded && store ? (
				<>
					<Detail Store={store} />
					<Products Store={store} />
				</>
			) : (
				<div>Cargando...</div>
			)}
		</>
	);
}

export default Store;
