import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchCard({ items }) {
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 3;
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = items
		? items.slice(indexOfFirstProduct, indexOfLastProduct)
		: [];
	const totalPages = items ? Math.ceil(items.length / productsPerPage) : 0;
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	if (!items || items.length === 0) {
		return (
			<div className='flex items-center justify-center w-full mt-20'>
				<img
					src='/blue magnifying glass with resume sheet.svg'
					alt='Imagen Buscar'
				/>{' '}
			</div>
		);
	}

	return (
		<>
			<div className='flex mx-10 my-10 flex-row flex-wrap'>
				{currentProducts.length > 0 &&
					items.map((item) => (
						<article
							key={item.Id}
							className='flex mr-3 mt-3 flex-col flex-wrap border w-[296px] h-[261px] rounded-[10px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)] hover:scale-110 hover:transition-all'>
							<Link to={`/${item.Id}`}>
								<div>
									<img
										src={item.Imagen}
										alt={item.Nombre}
										className='w-[296px] h-[157px] object-cover rounded-t-[10px]'
									/>
								</div>
								<div className='pl-5 pt-3 pb-3 bg-[#D9D9D94A]'>
									<h2 className='text-xl font-bold text-general '>
										{item.Nombre}
									</h2>
									<p className='text-general'>{item.Description}</p>
									<p className='text-specific  font-bold'>
										$ {item.Precio}
									</p>
								</div>
							</Link>
						</article>
					))}
			</div>
			
			{/* Paginación */}
			<div className='flex items-center justify-center'>
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
}

export default SearchCard;
