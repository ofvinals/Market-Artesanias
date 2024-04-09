import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../css/Profile.css';
import Swal from 'sweetalert2';
import { updateUser, getUser } from '../hooks/useUsers';
import { useAuth } from '../hooks/useAuth';

function Profile() {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm();
	const { currentUser } = useAuth({});

	const id = currentUser.uid;

	useEffect(() => {
		async function loadUser() {
			try {
				const userData = await getUser(id);
				setValue('nombre', userData.nombre);
				setValue('apellido', userData.apellido);
				setValue('genero', userData.genero);
				setValue('fechanac', userData.fechanac);
				setValue('ubicacion', userData.ubicacion);
			} catch (error) {
				console.error('Error al cargar los datos del usuario', error);
			}
		}
		loadUser();
	}, [id, setValue]);

	const onSubmit = handleSubmit(async (values) => {
		try {
			const userData = {
				nombre: values.nombre,
				apellido: values.apellido,
				genero: values.genero,
				fechanac: values.fechanac,
				ubicacion: values.ubicacion,
			};

			await updateUser(id, userData);

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
						<span className='error-message'>{errors.nombre.message}</span>
					)}
					<label className='text-xl text-[#563300]'>Apellido</label>
					<input
						className='ps-4 h-16 mt-5 text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
						type='text'
						id='apellido'
						name='apellido'
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
								id='genero'
								name='genero'
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
								id='fechanac'
								name='fechanac'
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
						id='ubicacion'
						name='ubicacion'
						{...register('ubicacion', {
							required: {
								value: true,
								message: 'La ubicacion es requerida',
							},
						})}
					/>

					<div className='mb-9' controlId='inputpassword'>
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
	);
}

export default Profile;
