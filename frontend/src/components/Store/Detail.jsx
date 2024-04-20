import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStore } from '../../hooks/useStore';

export const Detail = ({ Store }) => {
	const { id } = useParams();
	const imgStore = Store && Store.Imagen ? Store.Imagen : null;
	const nameStore = Store && Store.Nombre ? Store.Nombre : null;
	const [store, setStore] = useState();

	useEffect(() => {
		async function loadStore() {
			try {
				const storeData = await getStore(id);
				setStore(storeData);
			} catch (error) {
				console.error('Error al cargar los datos de la tienda', error);
			}
		}
		loadStore();
	}, [id]);

	return (
		<div className='bg-specific min-h-[290px] flex flex-row '>
			<div className='flex flex-col-reverse sm:flex-row justify-around w-full'>
				<div className='flex justify-around items-center text-center w-5/12'>
					<div className='flex flex-col items-center justify-center'>
						<img
							src={imgStore}
							alt='Uploaded'
							className='w-[222px] h-56 rounded-full '
						/>
					</div>
				</div>
				<div className='flex flex-row w-full bg-transparent items-start justify-start mt-10'>
					<p className='w-full text-[20px] sm:text-[32px] text-wrap bg-transparent text-white'>
						{nameStore}
					</p>
				</div>
			</div>
		</div>
	);
};
