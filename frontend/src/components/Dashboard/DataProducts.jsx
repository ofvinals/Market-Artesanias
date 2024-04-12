import React, { useEffect, useMemo, useState } from 'react';
import { getProducts, deleteProduct } from '../../hooks/useUsers';
import { FaCalendarTimes } from 'react-icons/fa';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Table } from './Table.jsx';
import Swal from 'sweetalert2';

export const DataProducts = () => {
	const [data, setData] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const products = await getProducts();
	// 			setData(products);
	// 		} catch (error) {
	// 			console.error('Error al obtener productos', error);
	// 		}
	// 	};
	// 	fetchData();
	// }, []);

	const columns = useMemo(
		() => [
			{
				header: 'Nombre',
				accessorKey: 'nombre',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Categoria',
				accessorKey: 'genero',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Precio',
				accessorKey: 'precio',
				enableColumnOrdering: false,
				size: 100,
			},
			{
				header: 'Descripcion',
				accessorKey: 'descripcion',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Activo',
				accessorKey: 'activo',
				enableColumnOrdering: false,
				size: 50,
			},
		],
		[]
	);

	const actions = [
		{
			text: 'Eliminar',
			icon: <FaCalendarTimes />,
			onClick: (row) => {
				deleteProduct(row.original._id);
			},
		},
	];

	async function deleteProduct(id) {
		const result = await Swal.fire({
			title: 'Confirmas la eliminacion del producto?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#8f8e8b',
			confirmButtonText: 'Sí, confirmar',
			cancelButtonText: 'Cancelar',
		});
		if (result.isConfirmed) {
			try {
				await deleteProduct(id);
					Swal.fire({
					icon: 'success',
					title: 'Producto eliminado correctamente',
					showConfirmButton: false,
					timer: 2500,
				});
				setData((prevData) => prevData.filter((turno) => turno._id !== id));
			} catch (error) {
				console.error('Error al eliminar el producto:', error);
			}
		}
	}

	const darkTheme = createTheme({
		palette: {
			mode: 'light',
		},
	});

	return (
		<div className='table-responsive'>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Table
					columns={columns}
					data={data}
					actions={actions}
					deleteProduct={deleteProduct}
				/>
			</ThemeProvider>
		</div>
	);
};
