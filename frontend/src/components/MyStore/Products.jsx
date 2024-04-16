import React, { useEffect, useState } from 'react';
import { getProducts } from '../../hooks/useProducts';

export const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			try {
				const productData = await getProducts();
				setProducts(productData);
			} catch (error) {
				console.error('Error al cargar los productos de la tienda', error);
			}
		}
		loadProducts();

		console.log(products);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 3;

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products
		? products.slice(indexOfFirstProduct, indexOfLastProduct)
		: [];

	const totalPages = products
		? Math.ceil(products.length / productsPerPage)
		: 0;

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<h1 className='text-[#563300] text-xl font-semibold ms-10 mt-10'>
				Productos en Venta
			</h1>
			<div className='m-10 flex flex-row space-x-3 space-y-3 flex-wrap justify-center'>
				{currentPage === 1 && (
					<div className='bg-secondary rounded-lg border-[#D9D9D9] border-2 mt-3 ms-3 flex flex-row justify-between w-full h-full max-w-[296px] max-h-[261px]'>
						<div className='flex flex-col w-full shadow-lg '>
							<div className='flex items-center justify-center w-full h-48 text-general rounded-lg '>
								<a href='/'>
									<i className='fa-solid fa-circle-plus text-8xl hover:text-9xl'></i>
								</a>
							</div>
							<div className='flex bg-white text-wrap w-full items-center justify-center h-20 text-general text-xl font-semibold rounded-lg'>
								<p className='text-center '>Cargar nuevo producto</p>
							</div>
						</div>
					</div>
				)}

				{currentProducts.length > 0 &&
					currentProducts.map((product, idx) => (
						<div
							key={idx}
							className='bg-white shadow-lg rounded-xl border-[#D9D9D9] border-2 flex flex-col mt-3 items-center justify-between w-full max-w-[296px] h-[261px]'>
							<div className='flex flex-col h-[261px]'>
								<div>
									<a href='/'>
										<img
											src={product.image}
											alt={product.nombre}
											className='w-[296px] h-[157px] rounded-md hover:opacity-50'
										/>
									</a>
								</div>
								<div className='flex flex-col ms-2 '>
									<h3 className='font-bold text-xl text-general mt-2'>
										{product.nombre}
									</h3>
									<p className='mb-2 text-general'>
										{product.description}
									</p>
									<p className='font-bold text-xl text-specific mb-2'>
										$ {product.price}
									</p>
								</div>
							</div>
						</div>
					))}
			</div>

			{/* Paginación */}
			<div className='flex justify-center'>
				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index}
						onClick={() => paginate(index + 1)}
						className={`bg-secondary text-general mx-1 py-2 px-4 border border-gray-300 ${
							currentPage === index + 1 ? 'bg-specific' : ''
						}`}>
						{index + 1}
					</button>
				))}
			</div>
		</>
	);
};
