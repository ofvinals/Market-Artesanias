/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import {
	getProduct,
	updateProduct,
	unableProduct,
} from '../../hooks/useProducts';
import { getStore } from '../../hooks/useStore.js';
import { uploadFile } from '../../firebase/config';
import { useNavigate, useParams } from 'react-router-dom';

export const EditProduct = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();
	const [photoUrl, setPhotoUrl] = useState([]);
	const [photos, setPhotos] = useState([]);
	const [count, setCount] = useState(0);
	const [imgStore, setImgStore] = useState('');
	const [nombreStore, setNombreStore] = useState('');

	const { id } = useParams();
	const navigate = useNavigate();

	const handleFileChange = async (e) => {
		try {
			const file = e.target.files[0];
			if (file) {
				const newPhotos = [...photos, file];
				setPhotos(newPhotos);
				await handleUpChange(newPhotos);
				Swal.fire({
					icon: 'info',
					title: 'Aguarde',
					text: 'Estamos actualizando la imagen.',
					showConfirmButton: false,
					timer: 3000,
				});
			}
		} catch (error) {
			console.error('Error al cargar el archivo de foto:', error);
		}
	};

	const handleUpChange = async (newPhotos) => {
		try {
			const filteredPhotos = newPhotos.filter(
				(photo) => !photoUrl.includes(photo)
			);
			if (filteredPhotos.length === 0) {
				return photoUrl;
			}
			const fileDownloadUrls = await Promise.all(newPhotos.map(uploadFile));
			const newPhotoUrls = [...photoUrl, ...fileDownloadUrls];
			setPhotoUrl(newPhotoUrls);
			setPhotos(newPhotoUrls);
			return newPhotoUrls;
		} catch (error) {
			console.error('Error al cargar el archivo de foto:', error);
			return photoUrl;
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

	const increaseCount = () => {
		setCount(count + 1);
	};

	const decreaseCount = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	useEffect(() => {
		async function loadProduct() {
			try {
				const product = await getProduct(id);
				const store = await getStore();
				setImgStore(store[0].Imagen);
				setNombreStore(store[0].Nombre);
				setValue('Id', product.Id);
				setValue('nombre', product.Nombre);
				setValue('categoria', product.CategoryId);
				setValue('descripcion', product.Descripcion);
				setValue('precio', product.Precio);
				setValue('cantidad', product.Disponible);
				setValue('photos', product.Imagen);
				setCount(product.Disponible);
				setPhotos([product.Imagen]);
			} catch (error) {
				console.error('Error al obtener datos del producto', error);
			}
		}
		loadProduct();
	}, []);

	const onSubmit = handleSubmit(async (values) => {
		try {
			let newImageUrls = [];
			if (photoUrl.length < 0) {
				newImageUrls = photos;
			} else {
				newImageUrls = photoUrl;
			}
			console.log(newImageUrls);
			const productData = {
				Id: id,
				StoreId: 1,
				Nombre: values.nombre,
				CategoryId: values.categoria,
				Descripcion: values.descripcion,
				Disponible: count,
				Precio: values.precio,
				Imagen: photos.join(','),
			};
			await updateProduct(productData);
			Swal.fire({
				icon: 'success',
				title: 'Producto editado correctamente!',
				showConfirmButton: false,
				timer: 2000,
			});
			navigate('/mi-tienda');
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Edicion rechazada',
				text: 'Tu producto no pudo ser editado. Intenta nuevamente!',
				showConfirmButton: false,
				timer: 2000,
			});
		}
	});

	async function delProduct(id) {
		try {
			const result = await Swal.fire({
				title: '¿Estás seguro?',
				text: 'Confirmas la eliminacion del producto',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				cancelButtonColor: '#8f8e8b',
				confirmButtonText: 'Sí, eliminar',
				cancelButtonText: 'Cancelar',
			});
			if (result.isConfirmed) {
				await unableProduct(id);
				navigate('/deletedProduct');
			}
		} catch (error) {
			console.error('Error al eliminar el usuario:', error);
		}
	}

	return (
		<>
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
					<div className='flex flex-row items-center'>
						<img
							src={imgStore}
							alt=''
							className='w-[70px] h-[70px] rounded-full object-cover'
						/>
						<p className='text-2xl text-specific ms-16 font-semibold'>
							{nombreStore}
						</p>
					</div>
					<form className='formlogin' onSubmit={onSubmit}>
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
						<div className='flex items-center'>
							<span className='text-2xl text-specific mb-1 p-2 ps-4 mt-3'>
								$
							</span>
							<input
								className='ps-4 mt-3 h-16 text-2xl  text-specific mb-1 rounded-xl p-2 w-full'
								type='number'
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
						</div>
						<label className='text-xl text-[#563300]'>
							Especificar cantidad de unidades del producto
						</label>
						<div className='flex flex-row items center justify-around'>
							<button
								type='button'
								onClick={decreaseCount}
								className='text-6xl text-general'>
								-
							</button>
							<input
								className='ps-4 mt-3 h-16 text-xl text-center border-2 border-[#8B5300] mb-1 rounded-xl p-2 w-3/12'
								type='number'
								readOnly
								onChange={(e) => {
									const value = parseInt(e.target.value);
									setCount(value);
								}}
								value={count}
								{...register('count', {
									required: {
										value: true,
										message: 'La cantidad de producto es requerida',
									},
								})}
							/>

							<button
								type='button'
								onClick={increaseCount}
								className='text-6xl text-general'>
								+
							</button>
						</div>
						{errors.cantidad && (
							<span className='bg-red-500 inline-block mb-5 inline; rounded-xl w-full px-5 text-center text-xl text-white'>
								{errors.cantidad.message}
							</span>
						)}
						<div className='flex flex-row flex-wrap mb-9 items-center justify-around'>
							<button
								className='bg-[#E98C00] w-full sm:w-5/12 font-bold text-xl h-16 mt-7 text-white rounded-xl hover:text-specific hover:bg-white border-2 border-[#E98C00]'
								type='submit'>
								Modificar
							</button>
							<button
								className='bg-white w-full sm:w-5/12 font-bold text-xl h-16 mt-7 text-[#E98C00] border-2 border-[#E98C00] rounded-xl hover:text-white hover:bg-specific'
								type='button'
								onClick={delProduct}>
								Eliminar
							</button>
						</div>
					</form>
				</div>

				<div className='w-full sm:w-8/12 flex flex-col sm:flex-row flex-wrap items-center justify-center'>
					{photos.map((photo, index) => (
						<div
							key={index}
							className='mx-5 flex flex-row flex-nowrap justify-center sm:w-4/12 sm:h-5/12 '>
							<img
								src={
									photo
										? typeof photo === 'object'
											? URL.createObjectURL(photo)
											: photo
										: 'URL_DE_LA_IMAGEN_POR_DEFECTO'
								}
								alt='Producto'
								className='w-[192px] h-48  rounded-2xl my-5'
								onClick={uploadPhoto}
							/>
							<i
								className='fa-regular fa-circle-xmark text-specific h-fit text-xl pe-5 hover:text-general hover:cursor-pointer'
								onClick={() => handleDeletePhoto(index)}></i>
						</div>
					))}
					{photos.length < 4 && (
						<button
							type='button'
							className='me-10 mb-10 text-xl w-[192px]  bg-white border-2 h-16 rounded-lg border-[#E98C00] text-[#E98C00] hover:bg-[#E98C00] hover:text-white'
							onClick={uploadPhoto}>
							<i className='fa-solid fa-circle-plus pe-2'></i>Cargar
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
