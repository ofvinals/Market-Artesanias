import React, { useEffect, useMemo, useState } from 'react';
import {
	getProducts,
	unableProduct,
	enableProduct,
} from '../../hooks/useProducts';
import { MdOutlineInsertComment } from "react-icons/md";
import { MdOutlineCommentsDisabled } from "react-icons/md";
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
				Cell: ({ row }) => {
					return row.original.Activo ? 'Activo' : 'Inactivo';
				},
			}
		],
		[]
	);

	const actions = [
		{
			text: 'Inhabilitar',
			icon: <MdOutlineCommentsDisabled />,
			onClick: (row) => {
				suspProduct(row.original.Id);
			},
		},
		{
			text: 'Habilitar',
			icon: <MdOutlineInsertComment />,
			onClick: (row) => {
				habilitProduct(row.original.id);
			},
		},
	];

	async function suspProduct(Id) {
		const result = await Swal.fire({
			title: 'Confirmas la suspension del producto?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#8f8e8b',
			confirmButtonText: 'Sí, confirmar',
			cancelButtonText: 'Cancelar',
		});
		if (result.isConfirmed) {
			try {
				await unableProduct(Id);
				Swal.fire({
					icon: 'success',
					title: 'Producto suspendido correctamente',
					showConfirmButton: false,
					timer: 2500,
				});
			} catch (error) {
				console.error('Error al suspender el producto:', error);
			}
		}
	}

	async function habilitProduct(id) {
		const result = await Swal.fire({
			title: 'Confirmas la habilitacion del producto?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#8f8e8b',
			confirmButtonText: 'Sí, confirmar',
			cancelButtonText: 'Cancelar',
		});
		if (result.isConfirmed) {
			try {
				await enableProduct(id);
				Swal.fire({
					icon: 'success',
					title: 'Producto habilitado correctamente',
					showConfirmButton: false,
					timer: 2500,
				});
				setData((prevData) => prevData.filter((turno) => turno._id !== id));
			} catch (error) {
				console.error('Error al suspender al producto:', error);
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
					suspProduct={suspProduct}
					habilitProduct={habilitProduct}
				/>
			</ThemeProvider>
		</div>
	);
};
