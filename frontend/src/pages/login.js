import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../css/Login.css';
import Swal from 'sweetalert2';

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword(!showPassword);

	const onSubmit = handleSubmit(async (values) => {
		try {
			// const user = await login(values);
			Swal.fire({
				icon: 'success',
				title: 'Inicio de sesión exitoso!',
				showConfirmButton: false,
				timer: 2000,
			});
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Ingreso rechazado',
				text: 'El usuario y/o contraseña no son correctos!',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	});

	return (
		<section className='container'>
			<div className='container-login'>
				<h2 className='text-5xl font-semibold text-[#8B5300] mb-3'>
					Ingresar
				</h2>
				<p className='text-xl text-[#8B5300] mb-9'>
					Inicia sesion o
					<Link to='/register' className='underline ms-1'>
						crea una cuenta
					</Link>
				</p>
				<form id='loginForm' className='formlogin' onSubmit={onSubmit}>
					<input
						placeholder='Mail'
						className='ps-4 h-16 text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
						type='email'
						id='email'
						name='email'
						{...register('email', {
							required: {
								value: true,
								message: 'El email es requerido',
							},
							pattern: {
								value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
								message: 'Email no válido',
							},
						})}
					/>
					{errors.email && (
						<span className='error-message'>{errors.email.message}</span>
					)}

					<div
						className='w-full h-16 flex flex-row items-center border-2 border-[#8B5300] rounded-xl mb-9 p-2'
						controlId='inputpassword'>
						<input
							placeholder='Contraseña'
							className=' text-xl w-full'
							type={showPassword ? 'text' : 'password'}
							autoComplete='current-password'
							{...register('password', {
								required: {
									value: true,
									message: 'La contraseña es requerida',
								},
								minLength: {
									value: 7,
									message:
										'La contraseña debe ser mayor a 7 caracteres',
								},
							})}
						/>
						<button
							type='button'
							onClick={toggleShowPassword}
							id='vercontrasena'
							className='btncontrasena'>
							<i
								className={`far ${
									showPassword ? 'fa-eye-slash' : 'fa-eye'
								}`}></i>
						</button>
						{errors.password && (
							<span className='error-message'>
								{errors.password.message}
							</span>
						)}
					</div>

					<div className='mb-7'>
						<Link className='text-xl text-[#8B5300]' to='/recuperar'>
							¿ Olvidaste tu contraseña ?
						</Link>
					</div>

					<div className='mb-9' controlId='inputpassword'>
						<button
							className='bg-[#E98C00] w-full font-bold text-xl h-16 text-white rounded-xl'
							type='submit'>
							Continuar
						</button>
					</div>

					<p className='mb-9  text-center text-xl'>O</p>
					<div className='flex flex-col'>
						<button
							className='border-2 border-[#E98C00] text-[#E98C00] text-xl font-bold h-16 mb-9 rounded-xl'
							onClick=''>
							GMail
						</button>
						<button
							className='border-2 border-[#E98C00] text-[#E98C00] text-xl font-bold h-16 rounded-xl'
							onClick=''>
							Facebook
						</button>
					</div>
				</form>
			</div>
			<div className='imglogin'>
				<img
					src='/blue magnifying glass with resume sheet.svg' alt='login'
					className=''></img>
			</div>
		</section>
	);
}

export default Login;
