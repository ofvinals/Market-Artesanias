import React, { useEffect, useMemo, useState } from 'react';
import { getProducts, deleteProduct } from '../../hooks/useProducts';
import { FaTrashAlt } from 'react-icons/fa';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Table } from './Table.jsx';
import Swal from 'sweetalert2';

export const DataProducts = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const products = await getProducts();
				console.log(products);
				setData(products);
			} catch (error) {
				console.error('Error al obtener productos', error);
			}
		};
		fetchData();
	}, []);

	const columns = useMemo(
		() => [
			{
				header: 'Nombre',
				accessorKey: 'Nombre',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Categoria',
				accessorKey: 'CategoryId',
				enableColumnOrdering: false,
				size: 50,
				Cell: ({ cell: { value }, row: { original } }) => {
					const nombreCategoria = original.Category.Nombre || '';
					return <span>{nombreCategoria}</span>;
				},
			},
			{
				header: 'Precio',
				accessorKey: 'Precio',
				enableColumnOrdering: false,
				size: 100,
			},
			{
				header: 'Descripcion',
				accessorKey: 'Descripcion',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Activo',
				accessorKey: 'Activo',
				enableColumnOrdering: false,
				size: 50,
			},
		],
		[]
	);

	const actions = [
		{
			text: 'Inhabilitar',
			icon: <FaTrashAlt />,
			onClick: (row) => {
				delProduct(row.original.Id);
			},
		},
	];

	async function delProduct(Id) {
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
				await deleteProduct(Id);
				Swal.fire({
					icon: 'success',
					title: 'Producto eliminado correctamente',
					showConfirmButton: false,
					timer: 2500,
				});
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
