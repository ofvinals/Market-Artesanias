/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getProductVendedor } from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

export const Products = ({ Store }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadProducts() {
			try {
				const productData = await getProductVendedor();
				const activeProducts = productData.filter(product => product.Activo);
            setProducts(activeProducts);
			} catch (error) {
				console.error('Error al cargar los productos de la tienda', error);
			}
		}
		loadProducts();
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
					<div className='bg-white rounded-lg shadow-xl border-specific border-2 mt-3 ms-3 flex flex-col justify-between w-full h-full max-w-[296px] max-h-[261px]'>
						<div className='flex  justify-center w-full h-[261px] font-bold text-specific rounded-lg '>
							<a
								href='/newProduct'
								className='items-center flex flex-col '>
								<i className='fa-regular fa-plus text-specific text-8xl hover:text-9xl mt-10'></i>
								<p className='text-center text-xl pt-10'>
									Subir producto
								</p>
							</a>
						</div>
					</div>
				)}

				{currentProducts.length > 0 &&
					currentProducts.map((product, idx) => (
						<div
							key={idx}
							className='bg-white shadow-xl rounded-xl border-[#D9D9D9] border-2 flex flex-col mt-3 items-center justify-between w-full max-w-[296px] h-[261px]'>
							<div className='flex flex-col h-[261px] flex-nowrap'>
								<div>
									<Link to={`/EditProduct/${product.Id}`}>
										<img
											src={product.Imagen}
											alt={product.Nombre}
											className='w-[296px] h-[157px] rounded-md hover:opacity-50'
										/>
									</Link>
								</div>
								<div className='flex flex-col ms-2 '>
									<h3 className='font-bold text-xl text-general mt-2'>
										{product.Nombre}
									</h3>
									<p className='mb-2 w-[270px] text-general truncate ...'>
										{product.Descripcion}
									</p>
									<p className='font-bold text-xl text-specific mb-2'>
										$ {product.Precio}
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
