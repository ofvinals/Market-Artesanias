import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { updateUser, getUser } from '../hooks/useUsers';
import NavBar from '../components/Navbar.jsx';
import { useSelector } from 'react-redux';

function Profile() {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const { email } = useSelector((state) => state.auth);

	useEffect(() => {
		async function loadUser() {
			console.log(email);
			try {
				const userData = await getUser(email);
				console.log(userData);
				setValue('nombre', userData.Nombre);
				setValue('apellido', userData.Apellido);
				setValue('genero', userData.Genero);
				setValue('fechanac', userData.Fechanac);
				setValue('ubicacion', userData.Ubicacion);
			} catch (error) {
				console.error('Error al cargar los datos del usuario', error);
			}
		}
		loadUser();
	}, [email, setValue]);

	const onSubmit = handleSubmit(async (values) => {
		try {
			const userData = {
				Nombre: values.Nombre,
				Apellido: values.Apellido,
				Genero: values.Genero,
				Fechanac: values.Fechanac,
				Ubicacion: values.Ubicacion,
			};

			await updateUser(email, userData);

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
						Datos Personales
					</h2>

					<form id='loginForm' className='formlogin' onSubmit={onSubmit}>
						<label className='text-xl text-[#563300]'>Nombre</label>
						<input
							className='ps-4 h-16 mt-5  text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
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
							className='ps-4 h-16 mt-5 text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
							type='text'
							{...register('apellido', {
								required: {
									value: true,
									message: 'El apellido es requerido',
								},
							})}
						/>
						<div className='flex flex-row justify-center w-full'>
							<div className='flex flex-col mr-3 w-full'>
								<label className='text-xl text-[#563300]'>Genero</label>
								<select
									className='ps-4 h-16 mt-5 text-xl border-2 border-[#8B5300] mb-7 rounded-xl w-full'
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
							<div className='flex flex-col w-full'>
								<label className='text-xl text-[#563300]'>
									Fecha de Nacimiento
								</label>
								<input
									className='ps-4 h-16 mt-5  text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
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
						<label className='text-xl text-[#563300]'>Ubicacion</label>
						<input
							className='ps-4 mt-5 h-16 text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
							type='text'
							{...register('ubicacion', {
								required: {
									value: true,
									message: 'La ubicacion es requerida',
								},
							})}
						/>

						<div className='mb-9'>
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
						src='/Online zoom meeting of several people.svg'
						alt='profile'
						className=''></img>
				</div>
			</section>
		</>
	);
}

export default Profile;
