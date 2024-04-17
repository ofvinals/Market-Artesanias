/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { createProduct, getProduct } from '../../hooks/useProducts';
import NavBar from '../../components/NavBar.jsx';
import { uploadFile } from '../../firebase/config';
import { useParams } from 'react-router-dom';

export const EditProduct = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		reset,
	} = useForm();
	const [photoUrl, setPhotoUrl] = useState([]);
	const [photos, setPhotos] = useState([]);
	const { id} = useParams();
	console.log(id);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setPhotos((prevPhotos) => [...prevPhotos, file]);
		}
	};
	console.log(photos);

	const handleUpChange = async (event) => {
		try {
			const fileDownloadUrls = await Promise.all(photos.map(uploadFile));
			setPhotoUrl(fileDownloadUrls);
		} catch (error) {
			console.error('Error al cargar el archivo de foto:', error);
		}
	};

	const uploadPhoto = () => {
		document.getElementById('fileInput').click();
	};

	const handleDeletePhoto = (index) => {
		const updatedPhotos = [...photos];
		updatedPhotos.splice(index, 1);
		setPhotos(updatedPhotos);
	};
	console.log(photoUrl);

	useEffect(() => {
		async function loadProduct() {
			try {
				const product = await getProduct(id);
				setValue('nombre',product.Nombre);
				setValue('categoria', product.CategoryId);
				setValue('descripcion', product.Descripcion);
				setValue('precio', product.Precio);
				setValue('cantidad', product.Disponible);
				setValue('photos', product.Imagen);
			} catch (error) {
				console.error('Error al obtener datos del producto', error);
			}
		}
		loadProduct();
	}, []);

	const onSubmit = handleSubmit(async (values) => {
		try {
			const categoryId = parseInt(values.categoria);

			await handleUpChange();
			if (!photoUrl || photoUrl.length === 0) {
				alert(
					'Cargando Fotos. Aguarde unos instantes e intente nuevamente!.'
				);
				return;
			}
			const productData = {
				StoreId: 1,
				Nombre: values.nombre,
				CategoryId: categoryId,
				Descripcion: values.descripcion,
				Disponible: values.cantidad,
				Precio: values.precio,
				Imagen: photoUrl.join(','),
			};
			console.log(productData);
			await createProduct(productData);
			Swal.fire({
				icon: 'success',
				title: 'Producto publicado correctamente!',
				showConfirmButton: false,
				timer: 2000,
			});
			reset();
			setPhotos([]);
			setPhotoUrl([]);
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Publicacion rechazada',
				text: 'Tu producto no pudo ser publicado. Intenta nuevamente!',
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
					<input
						className='ps-4 h-16 mt-3 text-3xl text-general mb-1 rounded-xl p-2 w-full'
						type='text'
						placeholder='Nombre'
						{...register('nombre', {
							required: {
								value: true,
								message: 'El nombre es requerido',
							},
						})}
					/>
					{errors.nombre && (
						<span className='bg-red-500 rounded-xl inline-block px-5 text-center w-full mb-5 text-xl text-white'>
							{errors.nombre.message}
						</span>
					)}

					<form id='loginForm' className='formlogin' onSubmit={onSubmit}>
						<select
							className='ps-4 h-16 mt-5 text-xl border-2 border-[#8B5300] mb-1 rounded-xl w-full'
							aria-label='Default select'
							{...register('categoria', {
								required: {
									value: true,
									message: 'La categoria es requerida',
								},
							})}>
							<option value=''>Categoria</option>
							<option value='1'>Vestimenta</option>
							<option value='2'>Ceramica</option>
							<option value='3'>Muebles</option>
							<option value='4'>Pasteleria</option>
							<option value='5'>Accesorios</option>
						</select>

						{errors.categoria && (
							<span className='bg-red-500 rounded-xl inline-block px-5 text-center w-full mb-5 text-xl text-white'>
								{errors.categoria.message}
							</span>
						)}

						<div className='flex flex-col mr-3 w-full'>
							<input
								className='ps-4 h-16 mt-3 text-xl text-[#563300] mb-1 rounded-xl p-2 w-full'
								placeholder='Descripcion'
								type='text'
								{...register('descripcion', {
									required: {
										value: true,
										message: 'La descripcion es requerida',
									},
								})}
							/>
							{errors.descripcion && (
								<span className='bg-red-500 rounded-xl inline-block px-5 w-full text-center mb-5 text-xl text-white'>
									{errors.descripcion.message}
								</span>
							)}
						</div>

						<input
							className='ps-4 mt-3 h-16 text-2xl  text-[#8B5300] mb-1 rounded-xl p-2 w-full'
							type='number'
							placeholder='$ Precio'
							{...register('precio', {
								required: {
									value: true,
									message: 'El precio es requerido',
								},
							})}
						/>
						{errors.precio && (
							<span className='bg-red-500 inline-block rounded-xl w-full text-center px-5 text-xl mb-5 text-white'>
								{errors.precio.message}
							</span>
						)}

						<label className='text-xl text-[#563300]'>
							Especificar cantidad de unidades del producto
						</label>
						<input
							className='ps-4 mt-3 h-16 text-xl border-2 border-[#8B5300] mb-1 rounded-xl p-2 w-full'
							type='number'
							{...register('cantidad', {
								required: {
									value: true,
									message: 'La cantidad es requerida',
								},
							})}
						/>
						{errors.cantidad && (
							<span className='bg-red-500 inline-block mb-5 inline; rounded-xl w-full px-5 text-center text-xl text-white'>
								{errors.cantidad.message}
							</span>
						)}

						<div className='flex flex-row flex-wrap mb-9'>
							<button
								className='bg-[#E98C00] w-full font-bold text-xl h-16 mt-7 text-white rounded-xl'
								type='submit'>
								Modificar
							</button>
							<button
								className='bg-white w-full font-bold text-xl h-16 mt-7 text-[#E98C00] border-2 border-[#E98C00] rounded-xl'
								type='submit'>
								Eliminar
							</button>
						</div>
					</form>
				</div>

				<div className='w-full sm:w-6/12 flex flex-col sm:flex-row flex-wrap items-center justify-center'>
					{photos.map((photo, index) => (
						<div
							key={index}
							className='mx-12 flex flex-col sm:flex-row flex-wrap justify-around'>
							<img
								src={URL.createObjectURL(photo)}
								alt={`Uploaded ${index}`}
								className='w-[192px] h-48 rounded-2xl my-5'
								onClick={uploadPhoto}
							/>
							<i
								className='fa-solid fa-circle-plus text-xl pe-5'
								onClick={() => handleDeletePhoto(index)}></i>
						</div>
					))}
					{photos.length < 4 && (
						<button
							type='button'
							className='me-10 mb-10 text-xl w-[192px] bg-white border-2 h-16 rounded-lg border-[#E98C00] text-[#E98C00] hover:bg-[#E98C00] hover:text-white'
							onClick={uploadPhoto}>
							<i className='fa-solid fa-circle-plus pe-5'></i>Cargar
							Fotos
							<input
								id='fileInput'
								type='file'
								style={{ display: 'none' }}
								onChange={handleFileChange}
							/>
						</button>
					)}
				</div>
			</section>
		</>
	);
};

export default EditProduct;
