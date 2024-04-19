import React, { useEffect, useMemo, useState } from 'react';
import { getCompras } from '../../hooks/useTransactions';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Table } from './Table.jsx';

export const DataTransactions = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const transactions = await getCompras();
				setData(transactions);
			} catch (error) {
				console.error('Error al obtener las transacciones', error);
			}
		};
		fetchData();
	}, []);

	const columns = useMemo(
		() => [
			{
				header: 'Producto',
				accessorKey: 'Titulo',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Fecha de Compra',
				accessorKey: 'FechaCompra',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Cantidad',
				accessorKey: 'Cantidad',
				enableColumnOrdering: false,
				size: 100,
			},
			{
				header: 'Precio Total',
				accessorKey: 'PrecioTotal',
				enableColumnOrdering: false,
				size: 50,
				Cell: ({ row }) => {
					const precioTotal = row.original['PrecioTotal'];
					return <span>{`$ ${precioTotal}`}</span>;
				},
			},
			{
				header: 'Nombre Vendedor',
				accessorKey: 'Vendedor',
				enableColumnOrdering: false,
				size: 50,
				Cell: ({ row: { original } }) => {
					const nombre = original.User.Nombre;
					const apellido = original.User.Apellido;
					const nombreCompleto = `${nombre} ${apellido}`.trim();
					return <span>{nombreCompleto}</span>;
				},
			},
			{
				header: 'Nombre Comprador',
				accessorKey: 'Comprador',
				enableColumnOrdering: false,
				size: 50,
				Cell: ({ cell: { value }, row: { original } }) => {
					const nombre = original.User.Nombre || '';
					const apellido = original.User.Apellido || '';
					const nombreCompleto = `${nombre} ${apellido}`.trim();
					return <span>{nombreCompleto}</span>;
				},
			},
		],
		[]
	);

	const actions = [];

	const darkTheme = createTheme({
		palette: {
			mode: 'light',
		},
	});

	return (
		<div className='table-responsive'>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Table columns={columns} data={data} actions={actions} />
			</ThemeProvider>
		</div>
	);
};
