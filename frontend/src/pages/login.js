import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../css/Login.css';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import { useAuth } from '../hooks/useAuth';
import { types } from '../redux/Actions/authTypes';
import NavBar from '../components/Navbar.jsx';

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword(!showPassword);
	const { auth, startGoogleAuth, startFacebookAuth } = useAuth();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleGoogleAuth = async () => {
		try {
			await dispatch(startGoogleAuth());
			navigate('/mi-tienda');
			Swal.fire({
				icon: 'success',
				title: 'Inicio de sesión exitoso!',
				showConfirmButton: false,
				timer: 2000,
			});
		} catch (error) {
			console.error(
				'Error durante el inicio de sesión con tu cuenta Google:',
				error
			);
			Swal.fire({
				icon: 'error',
				title: 'Error durante el inicio de sesión',
				text: 'Hubo un problema durante el inicio de sesión. Por favor, inténtalo de nuevo más tarde.',
				timer: 2000,
			});
		}
	};

	const handleFacebookAuth = async () => {
		try {
			await dispatch(startFacebookAuth());
			navigate('/mi-tienda');
			Swal.fire({
				icon: 'success',
				title: 'Inicio de sesión exitoso!',
				showConfirmButton: false,
				timer: 2000,
			});
		} catch (error) {
			console.error(
				'Error durante el inicio de sesión con tu cuenta de Facebook:',
				error
			);
			Swal.fire({
				icon: 'error',
				title: 'Error durante el inicio de sesión',
				text: 'Hubo un problema durante el inicio de sesión. Por favor, inténtalo de nuevo más tarde.',
				timer: 2000,
			});
		}
	};

	const onSubmit = handleSubmit(async (values) => {
		try {
			const res = await auth(values);
			console.log(res);
			const { accesoWJT } = res.data;
			const decodedToken = jwt_decode(accesoWJT);
			console.log(decodedToken);
			const { Email, userId, Admin } = decodedToken;
			dispatch({
				type: types.login,
				payload: { Email, userId, Admin },
			});
			if (Admin) {
				navigate('/dashboard');
			} else {
				navigate('/mi-tienda');
			}
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
				timer: 2000,
			});
		}
	});

	return (
		<>
			<NavBar />
			<section className='container'>
				<div className='flex flex-col justify-center items-start w-full max-w-[504px]'>
					<h2 className='text-5xl font-semibold text-[#8B5300] mb-3'>
						Ingresar
					</h2>
					<p className='text-xl text-[#8B5300] mb-9'>
						Inicia sesion o
						<Link to='/register' className=' linkregister underline ms-1'>
							crea una cuenta
						</Link>
					</p>
					<form
						id='loginForm'
						className='w-full max-w-[504px]'
						onSubmit={onSubmit}>
						<input
							placeholder='Mail'
							className='ps-4 h-16 text-xl border-2 border-[#8B5300] rounded-xl p-2 w-full'
							type='email'
							{...register('Email', {
								required: {
									value: true,
									message: 'El email es requerido.',
								},
								pattern: {
									value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
									message: 'Email no válido.',
								},
							})}
						/>
						{errors.Email && (
							<span className='bg-red-500 rounded-xl px-5 text-center text-xl text-white'>
								{errors.Email.message}
							</span>
						)}

						<div className='w-full h-16 text-xl flex flex-row items-center border-2 border-[#8B5300] rounded-xl mt-9 px-2'>
							<input
								placeholder='Contraseña'
								className='inputlogin text-xl w-full h-full'
								type={showPassword ? 'text' : 'password'}
								{...register('Contraseña', {
									required: {
										value: true,
										message: 'La contraseña es requerida.',
									},
									minLength: {
										value: 8,
										message:
											'La contraseña debe ser mayor a 8 caracteres.',
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
						</div>
						{errors.Contraseña && (
							<span className='bg-red-500 rounded-xl px-5 text-center text-xl text-white'>
								{errors.Contraseña.message}
							</span>
						)}

						<div className='my-7 recpassword'>
							<Link className='text-xl text-[#8B5300]' to='/'>
								¿ Olvidaste tu contraseña ?
							</Link>
						</div>

						<div className='mb-9'>
							<button
								className='btnlogin bg-[#E98C00] w-full font-bold text-xl h-16 text-white rounded-xl'
								type='submit'>
								Continuar
							</button>
						</div>

						<p className='mb-9  text-center text-xl'>O</p>
						<div className='flex flex-col'>
							<button
								className='border-2 btnloginsocial border-[#E98C00] text-[#E98C00] text-xl font-bold h-16 mb-9 rounded-xl'
								onClick={handleGoogleAuth}>
								GMail
							</button>
							<button
								className='border-2 btnloginsocial border-[#E98C00] text-[#E98C00] text-xl font-bold h-16 rounded-xl'
								onClick={handleFacebookAuth}>
								Facebook
							</button>
						</div>
					</form>
				</div>
				<div className='imglogin'>
					<img
						src='/blue magnifying glass with resume sheet.svg'
						alt='login'
						className=''></img>
				</div>
			</section>
		</>
	);
}

export default Login;
