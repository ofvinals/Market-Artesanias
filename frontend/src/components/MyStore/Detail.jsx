import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { updateNameStore } from '../../hooks/useStore';
import { useForm } from 'react-hook-form';
import { uploadFile } from '../../firebase/config';

export const Detail = ({ nombreStore, idStore }) => {
	const [photoUrl, setPhotoUrl] = useState(null);
	const [editing, setEditing] = useState(false);
	const [newName, setNewName] = useState(nombreStore);
	const id = idStore;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleFileChange = async (event) => {
		try {
			const file = event.target.files[0];
			if (file) {
				const fileDownloadUrl = await uploadFile(file);
				setPhotoUrl(fileDownloadUrl);
				console.log(fileDownloadUrl)
				const storeData = {
					Id: id,
					Imagen: fileDownloadUrl,
				};
				await updateNameStore(id, storeData);
				Swal.fire({
					icon: 'success',
					title: 'La imagen de la tienda ha sido editada correctamente',
					showConfirmButton: false,
					timer: 2000,
				});
			}
		} catch (error) {
			console.error('Error al cargar el archivo:', error);
		}
	};

	const handleSaveClick = handleSubmit(async (values) => {
		try {
			const storeData = {
				Id: id,
				Nombre: values.nombre,
			};
			console.log(storeData, id);
			await updateNameStore(id, storeData);
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

	const handleInputChange = (e) => {
		setNewName(e.target.value);
	};

	const uploadPhoto = () => {
		document.getElementById('fileInput').click();
	};

	return (
		<div>
			<div>
				<div className='bg-portada min-h-[250px] bg-cover flex flex-row '>
					<div className='flex flex-col-reverse sm:flex-row justify-around w-full ps-10 items-center'>
						<form
							className='flex flex-row text-[#563300]'
							onSubmit={handleSaveClick}>
							<input
								id='nombre'
								readOnly={!editing}
								ref={(input) => input && editing && input.focus()}
								type='text'
								name='nombre'
								{...register('nombre', {
									required: {
										value: true,
										message: 'El nombre es requerido',
									},
								})}
								value={newName}
								onChange={handleInputChange}
								className={`text-[20px] sm:text-[40px] text-wrap text-center bg-transparent min-w-fit focus:outline-none focus:border-transparent`}
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
						</form>
						{editing && (
							<i
								onClick={handleSaveClick}
								className='fa-solid fa-floppy-disk ps-5 pt-4 text-3xl hover:text-4xl hover:text-white'></i>
						)}

						{photoUrl ? (
							<img
								src={photoUrl}
								alt='Uploaded'
								className='w-[192px] h-48 rounded-full mt-5'
								onClick={uploadPhoto}
							/>
						) : (
							<label
								htmlFor='fileInput'
								className='me-10 text-xl w-[192px] bg-white border-2 h-16 rounded-lg border-[#E98C00] text-[#E98C00] hover:bg-[#E98C00] hover:text-white cursor-pointer'>
								<input
									id='fileInput'
									type='file'
									style={{ display: 'none' }}
									onChange={handleFileChange}
								/>
								<i className='fa-solid fa-circle-plus text-center pe-5 pt-2 ps-3 text-4xl'></i>Subir
								Foto
							</label>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
