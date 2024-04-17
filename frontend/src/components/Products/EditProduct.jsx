import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import {
	getProduct,
	updateProduct,
	deleteProduct,
} from '../../hooks/useProducts';
import { getStore } from '../../hooks/useStore.js';
import NavBar from '../../components/NavBar.jsx';
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
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setPhotos((prevPhotos) => [...prevPhotos, file]);
		}
	};

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
				console.log(product, store);
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
	}, [id, setValue]);

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
				Id: id,
				StoreId: 1,
				Nombre: values.nombre,
				CategoryId: categoryId,
				Descripcion: values.descripcion,
				Disponible: values.cantidad,
				Precio: values.precio,
				Imagen: photoUrl.join(','),
			};
			console.log(productData);
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
				title: 'Publicacion rechazada',
				text: 'Tu producto no pudo ser publicado. Intenta nuevamente!',
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
				await deleteProduct(id);
				navigate('/mi-tienda');
				Swal.fire({
					icon: 'success',
					title: 'Producto eliminado correctamente',
					showConfirmButton: false,
					timer: 1500,
				});
			}
		} catch (error) {
			console.error('Error al eliminar el usuario:', error);
		}
	}

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
					<div className='flex flex-row items-center'>
						<img src={imgStore} alt='' className='w-[70px] h-[70px] rounded-full'/>
						<p className='text-2xl text-specific ms-16 font-semibold'>{nombreStore}</p>
					</div>
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
							<option value=''>Seleccione una categoria...</option>
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
								onClick={decreaseCount}
								className='text-6xl text-general'>
								-
							</button>
							<input
								className='ps-4 mt-3 h-16 text-xl text-center border-2 border-[#8B5300] mb-1 rounded-xl p-2 w-3/12'
								type='number'
								onChange={(e) => {
									const value = parseInt(e.target.value);
									setCount(value);
								}}
								value={count}
								{...register('cantidad', {
									required: {
										value: true,
										message: 'La cantidad de producto es requerida',
									},
								})}
							/>

							<button
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
							className='mx-5 flex flex-row flex-nowrap justify-center  sm:w-4/12 sm:h-5/12 '>
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
