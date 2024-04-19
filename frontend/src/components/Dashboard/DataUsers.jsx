import React, { useEffect, useMemo, useState } from 'react';
import { getUsers, disableUser, enableUser } from '../../hooks/useUsers';
import { FaUserAltSlash } from 'react-icons/fa';
import { FaUserCheck } from 'react-icons/fa';
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
					return row.original.Vendedor ? 'Vendedor' : 'Comprador';
				},
			},
			{
				header: 'Estado',
				accessorKey: 'Activo',
				enableColumnOrdering: false,
				size: 50,
				Cell: ({ row }) => {
					return row.original.Activo ? 'Habilitado' : 'Suspendido';
				},
			},
		],
		[]
	);

	const actions = [
		{
			text: 'Inhabilitar',
			icon: <FaUserAltSlash />,
			onClick: (row) => {
				suspendUser(row.original.Id);
			},
		},
		{
			text: 'Habilitar',
			icon: <FaUserCheck />,
			onClick: (row) => {
				habilitUser(row.original.Id);
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
				console.log(id);
				await disableUser(id);
				Swal.fire({
					icon: 'success',
					title: 'Usuario inhabilitado correctamente',
					showConfirmButton: false,
					timer: 2500,
				});
				// setData((prevData) => prevData.filter((turno) => turno._id !== id));
			} catch (error) {
				console.error('Error al suspender al usuario:', error);
			}
		}
	}

	async function habilitUser(id) {
		const result = await Swal.fire({
			title: 'Confirmas la habilitacion del usuario?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#085718',
			cancelButtonColor: '#8f8e8b',
			confirmButtonText: 'Sí, confirmar',
			cancelButtonText: 'Cancelar',
		});
		if (result.isConfirmed) {
			try {
				await enableUser(id);
				Swal.fire({
					icon: 'success',
					title: 'Usuario habilitado correctamente',
					showConfirmButton: false,
					timer: 2500,
				});
				// setData((prevData) => prevData.filter((turno) => turno._id !== id));
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
					habilitUser={habilitUser}
				/>
			</ThemeProvider>
		</div>
	);
};
