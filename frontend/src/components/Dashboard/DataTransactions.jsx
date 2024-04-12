import React, { useEffect, useMemo, useState } from 'react';
import { getTransactions } from '../../hooks/useUsers';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Table } from './Table.jsx';

export const DataTransactions = () => {
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
