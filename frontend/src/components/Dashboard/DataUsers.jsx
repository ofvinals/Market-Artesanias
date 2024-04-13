import React, { useEffect, useMemo, useState } from 'react';
import { getUsers, disableUser } from '../../hooks/useUsers';
import { FaTrashAlt } from "react-icons/fa";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Table } from './Table.jsx';
import Swal from 'sweetalert2';

export const DataUsers = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const users = await getUsers();
				console.log(users);
				setData(users);
			} catch (error) {
				console.error('Error al obtener usuarios', error);
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
				header: 'Apellido',
				accessorKey: 'Apellido',
				enableColumnOrdering: false,
				size: 50,
			},
			{
				header: 'Mail',
				accessorKey: 'Email',
				enableColumnOrdering: false,
				size: 100,
			},
			{
				header: 'Tipo de usuario',
				accessorKey: 'sede',
				enableColumnOrdering: false,
				size: 50,
				Cell: ({ row }) => {
					return row.original.Vendedor ? 'Solo Vendedor' : 'Comprador';
				},
			},
			{
				header: 'Tienda',
				accessorKey: 'tienda',
				enableColumnOrdering: false,
				size: 50,
			},
		],
		[]
	);

	const actions = [
		{
			text: 'Suspender',
			icon: <FaTrashAlt />
			,
			onClick: (row) => {
				suspendUser(row.original.id);
			},
		},
	];

	async function suspendUser(id) {
		const result = await Swal.fire({
			title: 'Confirmas la inhabilitacion del usuario?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#8f8e8b',
			confirmButtonText: 'Sí, confirmar',
			cancelButtonText: 'Cancelar',
		});
		if (result.isConfirmed) {
			try {
				await disableUser(id);

				Swal.fire({
					icon: 'success',
					title: 'Usuario inhabilitado correctamente',
					showConfirmButton: false,
					timer: 2500,
				});
				setData((prevData) => prevData.filter((turno) => turno._id !== id));
			} catch (error) {
				console.error('Error al suspender al usuario:', error);
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
					suspendUser={suspendUser}
				/>
			</ThemeProvider>
		</div>
	);
};
