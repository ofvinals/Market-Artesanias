import React, { useEffect, useState } from 'react';
import { getCompras, getVentas } from '../../hooks/useTransactions';

export const List = () => {
	const [showMore, setShowMore] = useState(false);
	const [compras, setCompras] = useState([]);
	const [ventas, setVentas] = useState([]);

	const comprasToShow = compras
		? showMore
			? compras
			: compras.slice(0, 4)
		: [];
	const toggleShowComprasMore = () => {
		setShowMore(!showMore);
	};

	const ventasToShow = ventas ? (showMore ? ventas : ventas.slice(0, 4)) : [];
	const toggleShowVentasMore = () => {
		setShowMore(!showMore);
	};

	useEffect(() => {
		async function loadCompras() {
			try {
				const comprasData = await getCompras();
				console.log(comprasData);
				setCompras(comprasData);
			} catch (error) {
				console.error('Error al cargar las compras del usuario', error);
			}
		}
		loadCompras();
	}, []);

	useEffect(() => {
		async function loadVentas() {
			try {
				const ventasData = await getVentas();
				setVentas(ventasData);
			} catch (error) {
				console.error('Error al cargar las ventas del usuario', error);
			}
		}
		loadVentas();
	}, []);

	return (
		<>
			<div className='mt-24 flex flex-col sm:flex-row items-center sm:items-start justify-around'>
				<div className='w-6/12 ms-3 flex flex-col items-center'>
					<h1 className='text-xl font-bold text-specific mb-8'>
						Productos Vendidos
					</h1>

					{ventas !== undefined && ventas.length > 0 ? (
						ventasToShow.map((product, idx) => (
							<div
								key={idx}
								className='bg-white flex flex-col items-start justify-around w-full max-w-[400px] h-[150px] my-5'>
								<div className='flex flex-row h-[261px]'>
									<div>
										<img
											src={product.Imagen}
											alt={product.Nombre}
											className='w-[140px] h-[140px] rounded-full'
										/>
									</div>
									<div className='flex flex-col justify-center '>
										<h3 className='font-bold text-xl text-general ms-4'>
											{product.Nombre}
										</h3>
										<p className='text-specific mt-4 ms-4'>
											Vendido el {product.date}
										</p>
									</div>
									<div>
										<p className='border-2 rounded-lg bg-transparent text-[#0A3BEC] border-[#0A3BEC] w-[100px] text-center'>
											{product.Category.Nombre}
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
					{!showMore && ventas !== undefined && ventas.length > 4 && (
						<div className='flex justify-end max-w-[400px]'>
							<a href='/'>
								<button
									onClick={toggleShowVentasMore}
									className='bg-specific text-white px-4 py-2 mt-4 rounded-md w-[120px] h-[48px] ml-auto hover:bg-white hover:text-specific hover:border-specific hover:border-2'>
									Ver más
								</button>
							</a>
						</div>
					)}
				</div>

				<div className='w-6/12 ms-7 me-3 flex flex-col mt-10 sm:mt-0 items-center'>
					<h2 className='text-xl font-bold text-specific mb-8'>
						Productos Comprados
					</h2>

					{compras !== undefined && compras.length > 0 ? (
						comprasToShow.map((product, idx) => (
							<div
								key={idx}
								className='bg-white flex flex-col items-start justify-around w-full max-w-[400px] h-[150px] my-5'>
								<div className='flex flex-row h-[261px]'>
									<div>
										<img
											src={product.Imagen}
											alt={product.Nombre}
											className='w-[140px] h-[140px] rounded-full'
										/>
									</div>
									<div className='flex flex-col justify-center '>
										<h3 className='font-bold text-xl text-general ms-4'>
											{product.Nombre}
										</h3>
										<p className='text-specific mt-4 ms-4'>
											Comprado el {product.date}
										</p>
									</div>
									<div>
										<p className='border-2 rounded-lg bg-transparent text-[#0A3BEC] border-[#0A3BEC] w-[100px] text-center'>
											{product.Category.Nombre}
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
					{!showMore && compras !== undefined && compras.length > 4 && (
						<div className='flex justify-end max-w-[400px]'>
							<a href='/'>
								<button
									onClick={toggleShowComprasMore}
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
