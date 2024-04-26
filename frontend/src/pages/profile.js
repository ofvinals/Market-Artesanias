import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { updateUser, getUser } from '../hooks/useUsers';
import NavBar from '../components/NavBar.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Profile() {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const { id } = useSelector((state) => state.auth);
	const navigate = useNavigate();
const [user, setUser] = useState();

	useEffect(() => {
		async function loadUser() {
			try {
				const userData = await getUser(id);
				setUser(userData)
				const originalDate = new Date(userData.FechaNacimiento);
				const formattedDate = originalDate.toISOString().split('T')[0];
				setValue('nombre', userData.Nombre);
				setValue('apellido', userData.Apellido);
				setValue('genero', userData.Genero);
				setValue('fechanac', formattedDate);
				setValue('ubicacion', userData.Ubicacion);
			} catch (error) {
				console.error('Error al cargar los datos del usuario', error);
			}
		}
		loadUser();
	}, [id, setValue]);

	const onSubmit = handleSubmit(async (values) => {
		try {
			const userData = {
				Id: id,
				Nombre: values.nombre,
				Apellido: values.apellido,
				Genero: values.genero,
				FechaNacimiento: values.fechanac,
				Ubicacion: values.ubicacion,
			};
			await updateUser(id, userData);
			if (user.Vendedor) {
				navigate('/mi-tienda');
			} else {
				navigate('/checkuser');
			}
			Swal.fire({
				icon: 'success',
				title: 'Los datos del usuario han sido editados correctamente',
				showConfirmButton: false,
				timer: 2000,
			});
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: 'error',
				title: 'Error al editar los datos del usuario. Intente nuevamente!',
				showConfirmButton: false,
				timer: 2000,
			});
		}
	});

	return (
		<>
			<NavBar />
			<section className='container'>
				<div className='container-login'>
					<h2 className='text-5xl font-semibold text-[#8B5300] mb-20'>
						Completa tus datos personales
					</h2>

					<form id='loginForm' className='formlogin' onSubmit={onSubmit}>
						<label className='text-xl text-[#563300]'>Nombre</label>
						<input
							className='ps-4 h-16 mt-1  text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
							type='text'
							id='nombre'
							name='nombre'
							{...register('nombre', {
								required: {
									value: true,
									message: 'El nombre es requerido',
								},
							})}
						/>
						{errors.nombre && (
							<span className='error-message'>
								{errors.nombre.message}
							</span>
						)}

						<label className='text-xl text-[#563300]'>Apellido</label>
						<input
							className='ps-4 h-16 mt-1 text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
							type='text'
							{...register('apellido', {
								required: {
									value: true,
									message: 'El apellido es requerido',
								},
							})}
						/>
						{errors.apellido && (
							<span className='bg-red-500 rounded-xl px-5 text-center text-xl text-white'>
								{errors.apellido.message}
							</span>
						)}

						<div className='flex sm:flex-row flex-col items-center justify-between w-full'>
							<div className='sm:w-5/12 w-full flex flex-col '>
							<div className='flex flex-col mr-3 w-full'>
								<label className='text-xl text-[#563300]'>Genero</label>
								<select
									className='ps-4 h-16 mt-1 text-xl border-2 border-[#8B5300] mb-7 rounded-xl w-full'
									aria-label='Default select'
									{...register('genero', {
										required: {
											value: true,
											message: 'El genero es requerido',
										},
									})}>
									<option value='masculino'>Masculino</option>
									<option value='femenino'>Femenino</option>
									<option value='no binario'>No Binario</option>
								</select>
							</div>
							{errors.genero && (
								<span className='bg-red-500 rounded-xl px-5 text-center text-xl text-white'>
									{errors.genero.message}
								</span>
							)}</div>

							<div className='flex flex-col sm:w-5/12 w-full'>
								<label className='text-xl text-[#563300] text-nowrap'>
									Fecha de Nacimiento
								</label>
								<input
									className='ps-4 h-16 mt-1  text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
									type='date'
									{...register('fechanac', {
										required: {
											value: true,
											message: 'La fecha de nacimiento es requerida',
										},
									})}
								/>
							</div>
						</div>
						{errors.fechanac && (
							<span className='bg-red-500 rounded-xl px-5 text-center text-xl text-white'>
								{errors.fechanac.message}
							</span>
						)}

						<label className='text-xl text-[#563300] mt-15'>Ubicacion</label>
						<input
							className='ps-4 mt-1 h-16 text-xl border-2 border-[#8B5300] mb-2 rounded-xl p-2 w-full'
							type='text'
							{...register('ubicacion', {
								required: {
									value: true,
									message: 'La ubicacion es requerida',
								},
							})}
						/>
						{errors.ubicacion && (
							<span className='bg-red-500 rounded-xl px-5 text-center text-xl text-white'>
								{errors.ubicacion.message}
							</span>
						)}

						<div className='my-9'>
							<button
								className='bg-[#E98C00] w-full font-bold text-xl h-16 text-white rounded-xl'
								type='submit'>
								Guardar Cambios
							</button>
						</div>
					</form>
				</div>
				<div className='imglogin'>
					<img
						src='/Looking for new employees among the resumes of people.png'
						alt='profile'
						className=''></img>
				</div>
			</section>
		</>
	);
}

export default Profile;
