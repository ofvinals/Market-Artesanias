import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { createStore } from '../hooks/useStore';
import NavBar from '../components/NavBar.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { uploadFile } from '../firebase/config';

function CreateStore() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { id } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const [photoUrl, setPhotoUrl] = useState(null);

	const handleFileChange = async (event) => {
		try {
			const file = event.target.files[0];
			if (file) {
				const fileDownloadUrl = await uploadFile(file);
				setPhotoUrl(fileDownloadUrl);
				console.log(fileDownloadUrl);
			}
		} catch (error) {
			console.error('Error al cargar el archivo:', error);
		}
	};

	const onSubmit = handleSubmit(async (values) => {
		try {
			if (!photoUrl || photoUrl.length === 0) {
				alert(
					'Cargando Fotos. Aguarde unos instantes e intente nuevamente!.'
				);
				return;
			}
			const storeData = {
				Id: id,
				Nombre: values.Nombre,
				Imagen: photoUrl,
			};
			const res = await createStore(storeData);
			console.log(res);
			Swal.fire({
				icon: 'success',
				title: 'Su tienda ha sido creada correctamente',
				showConfirmButton: false,
				timer: 2000,
			});
			navigate('/mi-tienda');
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: 'error',
				title: 'Error crear su tienda. Intente nuevamente!',
				showConfirmButton: false,
				timer: 2000,
			});
		}
	});

	const uploadPhoto = () => {
		if (photoUrl) {
			setPhotoUrl(null);
		} else {
			document.getElementById('fileInput').click();
		}
	};

	return (
		<>
			<NavBar />
			<section className='container'>
				<div className='container-login'>
					<h2 className='text-5xl font-semibold text-[#8B5300] mb-20'>
						Crear tienda
					</h2>

					<form id='loginForm' className='formlogin' onSubmit={onSubmit}>
						<label className='text-xl text-[#563300]'>
							Nombre de la tienda
						</label>
						<input
							className='ps-4 h-16 mt-5  text-xl border-2 border-[#8B5300] mb-7 rounded-xl p-2 w-full'
							type='text'
							id='nombre'
							name='nombre'
							{...register('Nombre', {
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
						{photoUrl ? (
							<div className='flex justify-center'>
								<img
									src={photoUrl}
									alt='Uploaded'
									className='w-[192px] h-48 mx-12 rounded-full my-5 '
									onClick={uploadPhoto}
								/>
							</div>
						) : (
							<div className='flex justify-end'>
							<button
								onClick={uploadPhoto}
								type='button'
								className='mb-10 text-xl w-[192px] bg-white border-2 h-16 rounded-lg border-[#E98C00] text-[#E98C00] hover:bg-[#E98C00] hover:text-white'>
								<i className='fa-solid fa-circle-plus pe-5'></i>Subir
								Foto
								<input
									id='fileInput'
									type='file'
									style={{ display: 'none' }}
									onChange={handleFileChange}
								/>{' '}
							</button></div>
						)}
						<div className='mb-9'>
							<button
								className='bg-[#E98C00] w-full font-bold text-xl h-16 text-white rounded-xl'
								type='submit'>
								Crear Tienda
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
export default CreateStore;
