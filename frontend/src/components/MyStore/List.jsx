import React, { useState } from 'react';

const products = [
	{
		nombre: 'Vestido Vintage',
		category: 'Pasteleria',
		date: "16/02/2024",
		image: 'https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stok: 0,
	},
	{
		nombre: 'Vestido Vintage',
		category: 'Muebles',
		date: "10/02/2024",
		image: 'https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stok: 0,
	},
	{
		nombre: 'Vestido Vintage',
		category: 'Vestimenta',
		date: "16/02/2023",
		image: 'https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stok: 0,
	},
	{
		nombre: 'Vestido Vintage',
		category: 'Pasteleria',
		date: "16/01/2024",
		image: 'https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stok: 0,
	},
	{
		nombre: 'Vestido Vintage',
		category: 'Vestimenta',
		date: "22/02/2024",
		image: 'https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		stok: 0,
	},
];

export const List = () => {
	const [showMore, setShowMore] = useState(false);
	const productsToShow = showMore ? products : products.slice(0, 4);
	const toggleShowMore = () => {
		setShowMore(!showMore);
	};

	return (
		<>
			<div className='mt-24 flex flex-row items-start justify-center'>
				<div className='w-6/12 ms-10'>
					<h1 className='text-xl font-bold text-specific mb-8'>
						Productos Vendidos
					</h1>

					{products.length > 0 ? (
						productsToShow.map((product, idx) => (
							<div
								key={idx}
								className='bg-white flex flex-col items-start justify-around w-full h-[150px] my-5'>
								<div className='flex flex-row h-[261px]'>
									<div>
										<img
											src={product.image}
											alt={product.nombre}
											className='w-[140px] h-[140px] rounded-full'
										/>
									</div>
									<div className='flex flex-col justify-center '>
										<h3 className='font-bold text-xl text-general ms-4'>
											{product.nombre}
										</h3>
										<p className='text-specific mt-4 ms-4'>
											Vendido el {product.date}
										</p>
									</div>
									<div>
										<p className='border-2 rounded-lg bg-transparent text-[#0A3BEC] border-[#0A3BEC] w-[100px] text-center'>
											{product.category}
										</p>
									</div>
								</div>
								<hr className='border-[#0A3BEC] w-full' />
							</div>
						))
					) : (
						<p className='text-start text-general mb-10'>
							No tienes productos vendidos
						</p>
					)}
					{!showMore && products.length > 4 && (
						<div className='flex justify-end'>
							<a href='/'>
								<button
									onClick={toggleShowMore}
									className='bg-specific text-white px-4 py-2 mt-4 rounded-md w-[120px] h-[48px] ml-auto hover:bg-white hover:text-specific hover:border-specific hover:border-2'>
									Ver más
								</button>
							</a>
						</div>
					)}
				</div>

				<div className='w-6/12 ms-10'>
					<h2 className='text-xl font-bold text-specific mb-8'>
						Productos Comprados
					</h2>

					{products.length > 0 ? (
						productsToShow.map((product, idx) => (
							<div
								key={idx}
								className='bg-white flex flex-col items-start justify-around w-full h-[150px] my-5'>
								<div className='flex flex-row h-[261px]'>
									<div>
										<img
											src={product.image}
											alt={product.nombre}
											className='w-[140px] h-[140px] rounded-full'
										/>
									</div>
									<div className='flex flex-col justify-center '>
										<h3 className='font-bold text-xl text-general ms-4'>
											{product.nombre}
										</h3>
										<p className='text-specific mt-4 ms-4'>
											Comprado el {product.date}
										</p>
									</div>
									<div>
										<p className='border-2 rounded-lg bg-transparent text-[#0A3BEC] border-[#0A3BEC] w-[100px] text-center'>
											{product.category}
										</p>
									</div>
								</div>
								<hr className='border-[#0A3BEC] w-full' />
							</div>
						))
					) : (
						<p className='text-start text-general mb-10'>
							No tienes productos comprados
						</p>
					)}
					{!showMore && products.length > 4 && (
						<div className='flex justify-end'>
							<a href='/'>
								<button
									onClick={toggleShowMore}
									className='bg-specific text-white  px-4 py-2 mt-4 rounded-md w-[120px] h-[48px] mb-10 ml-auto hover:bg-white hover:text-specific hover:border-specific hover:border-2'>
									Ver más
								</button>
							</a>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
