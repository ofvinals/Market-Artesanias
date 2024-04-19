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
				header: 'Nombre Comprador',
				accessorKey: 'nombre',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Producto',
				accessorKey: 'producto',
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
				header: 'Nombre Vendedor',
				accessorKey: 'vendedor',
				enableColumnOrdering: false,
				size: 50,
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
				<Table
					columns={columns}
					data={data}
					actions={actions}
				/>
			</ThemeProvider>
		</div>
	);
};
