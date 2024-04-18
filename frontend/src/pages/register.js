import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiURL } from '../api/apiURL';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import NavBar from '../components/NavBar.jsx';
import { types } from '../redux/Actions/authTypes';
import { useDispatch } from 'react-redux';
import { jwtDecode as jwt_decode } from 'jwt-decode';

function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onSubmit = handleSubmit(async (data) => {
		try {
			console.log('Datos del formulario:', data);
			const response = await apiURL.post('/Registro', data);
			console.log('Respuesta del servidor:', response);
			if (response.status === 200) {
				const { accesoWJT } = response.data;
				const decodedToken = jwt_decode(accesoWJT);
				const { Email, userId, Admin } = decodedToken;
				dispatch({
					type: types.login,
					payload: { Email, userId, Admin },
				});
				navigate('/welcome');
				Swal.fire({
					icon: 'success',
					title: 'Registro exitoso!',
					showConfirmButton: false,
					timer: 2000,
				});
			}
		} catch (error) {
			console.error('Error de red:', error);
			console.error('Respuesta de error:', error.response?.data);
			Swal.fire({
				icon: 'error',
				title: 'Error al registrarse',
				text:
					error.response?.data?.message ||
					'Hubo un problema al procesar tu registro.',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	});

	return (
		<main>
			<NavBar />
			<section className='container'>
				<div className='container-register'>
					<h2 className='text-5xl font-semibold text-[#8B5300] mb-3'>
						Regístrate
					</h2>
					<form
						id='registerForm'
						className='formregister'
						onSubmit={onSubmit}>
						<div className='flex mb-7'>
							<input
								placeholder='Nombre'
								className='ps-4 h-16 text-xl border-2 border-[#8B5300] mr-2 rounded-xl p-2 w-1/2'
								type='text'
								{...register('Nombre', {
									required: 'El nombre es requerido',
								})}
							/>
							{errors.Nombre && (
								<span className='error-message'>
									{errors.Nombre.message}
								</span>
							)}
							<input
								placeholder='Apellido'
								className='ps-4 h-16 text-xl border-2 border-[#8B5300] ml-2 rounded-xl p-2 w-1/2'
								type='text'
								{...register('Apellido', {
									required: 'El apellido es requerido',
								})}
							/>
							{errors.Apellido && (
								<span className='error-message'>
									{errors.Apellido.message}
								</span>
							)}
						</div>
						<input
							placeholder='Email'
							className='ps-4 h-16 text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
							type='email'
							{...register('Email', {
								required: 'El correo electrónico es requerido',
								pattern: {
									value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
									message: 'Correo electrónico no válido',
								},
							})}
						/>
						{errors.Email && (
							<span className='error-message'>
								{errors.Email.message}
							</span>
						)}

						<input
							placeholder='Contraseña'
							className='ps-4 h-16 text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
							type='password'
							{...register('Contraseña', {
								required: 'La contraseña es requerida',
								minLength: {
									value: 8,
									message:
										'La contraseña debe tener al menos 8 caracteres',
								},
							})}
						/>
						{errors.Contraseña && (
							<span className='error-message'>
								{errors.Contraseña.message}
							</span>
						)}

						<button
							className='bg-[#E98C00] w-full font-bold text-xl h-16 text-white rounded-xl'
							type='submit'>
							Crear Cuenta
						</button>
					</form>

					<p className='text-xl text-[#8B5300] mt-4'>
						¿Ya tienes una cuenta?
						<Link to='/login' className='underline ms-1'>
							Inicia sesión
						</Link>
					</p>
				</div>
				<div className='imglogin'>
					<img src='/lupa.png' alt='register' className='' />
				</div>
			</section>
		</main>
	);
}

export default Register;
