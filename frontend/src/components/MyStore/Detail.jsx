import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { updateNameStore } from '../../hooks/useStore';
import { useForm } from 'react-hook-form';
import { uploadFile } from '../../firebase/config';

export const Detail = ({ Store }) => {
	const imgStore = Store && Store.Imagen ? Store.Imagen : null;
	const nameStore = Store && Store.Nombre ? Store.Nombre : null;
	const id = Store && Store.Id ? Store.Id : null;
	const [photoUrl, setPhotoUrl] = useState(imgStore);
	const [nombreStore, setNombreStore] = useState(nameStore);
	const [editing, setEditing] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	useEffect(() => {
		setPhotoUrl(imgStore);
	}, [imgStore]);

	const handleFileChange = async (event) => {
		try {
			const file = event.target.files[0];
			if (file) {
				const fileDownloadUrl = await uploadFile(file);
				setPhotoUrl(fileDownloadUrl);
				setNombreStore(nameStore);
				const storeData = {
					Id: id,
					Nombre: nombreStore,
					Imagen: photoUrl,
				};
				await updateNameStore(storeData);
			}
		} catch (error) {
			console.error('Error al cargar el archivo:', error);
		}
	};

	const handleSaveClick = handleSubmit(async (values) => {
		try {
			setNombreStore(values.Nombre);
			const storeData = {
				Id: id,
				Nombre: nombreStore,
				Imagen: photoUrl,
			};
			await updateNameStore(storeData);
			Swal.fire({
				icon: 'success',
				title: 'El nombre de la tienda ha sido editado correctamente',
				showConfirmButton: false,
				timer: 2000,
			});
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: 'error',
				title: 'Error al editar de la tienda. Intente nuevamente!',
				showConfirmButton: false,
				timer: 2000,
			});
		}
		setEditing(false);
	});

	const uploadPhoto = () => {
		let fileInput = document.getElementById('fileInput');
		if (!fileInput) {
			fileInput = document.createElement('input');
			fileInput.type = 'file';
			fileInput.id = 'fileInput';
			fileInput.style.display = 'none';
			fileInput.addEventListener('change', handleFileChange);
			document.body.appendChild(fileInput);
		}
		document.getElementById('fileInput').click();
	};

	return (
		<div className='bg-specific min-h-[250px] bg-cover flex flex-row '>
			<div className='flex flex-col-reverse sm:flex-row justify-around w-full items-center'>
				<div className='flex justify-around items-center text-center '>
					{photoUrl ? (
						<div className='flex flex-col items-center justify-center'>
							<img
								src={photoUrl}
								alt='Uploaded'
								className='w-[192px] h-48 rounded-full sm:ms-16'
								onClick={uploadPhoto}
							/>
							<p className='text-center text-general sm:ms-16 text-[12px]'>
								Click en la imagen para cambiarla
							</p>
						</div>
					) : (
						<label
							htmlFor='fileInput'
							className='ms-16 text-xl w-[192px] bg-white border-2 h-16 rounded-lg border-[#E98C00] text-[#E98C00] hover:bg-[#E98C00] hover:text-white cursor-pointer '>
							<input
								id='fileInput'
								type='file'
								style={{ display: 'none' }}
							/>
							<i className='fa-solid fa-circle-plus text-center pe-5 pt-2 ps-3 text-4xl'></i>
							Subir Foto
						</label>
					)}
				</div>
				<form
					className='flex flex-row text-white'
					onSubmit={handleSaveClick}>
					<div className='flex flex-row w-fit bg-transparent justify-center'>
						<input
							id='nombre'
							readOnly={!editing}
							ref={(input) => input && editing && input.focus()}
							type='text'
							name='Nombre'
							{...register('Nombre', {
								required: {
									value: true,
									message: 'El nombre es requerido',
								},
							})}
							value={nombreStore} 
							onChange={(e) => setNombreStore(e.target.value)}
							className='w-7/12 text-[20px] sm:text-[40px] text-wrap text-center bg-transparent focus:outline-none focus:border-transparent focus:bg-transparent'
						/>
						{errors.nombre && (
							<span className='error-message'>
								{errors.nombre.message}
							</span>
						)}
						{!editing ? (
							<i
								onClick={() => setEditing(true)}
								className='fa-solid fa-pencil ps-5 pt-4 text-2xl hover:text-4xl'></i>
						) : null}
						{editing && (
							<i
								onClick={handleSaveClick}
								className='fa-solid fa-floppy-disk ps-5 pt-4 text-3xl hover:text-4xl'></i>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};
