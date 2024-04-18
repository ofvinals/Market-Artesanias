import React, { useState } from 'react';
import { DataUsers } from './DataUsers';
import { DataProducts } from './DataProducts';
import { DataTransactions } from './DataTransactions';

export const Detail = () => {
	const [showDataUsers, setShowDataUsers] = useState(false);
	const [showDataProducts, setShowDataProducts] = useState(false);
	const [showDataTransactions, setShowDataTransactions] = useState(false);

	const handleShowDataUsers = () => {
		setShowDataUsers(true);
		setShowDataProducts(false);
		setShowDataTransactions(false);
	};

	const handleShowDataProducts = () => {
		setShowDataUsers(false);
		setShowDataProducts(true);
		setShowDataTransactions(false);
	};

	const handleShowDataTransactions = () => {
		setShowDataUsers(false);
		setShowDataProducts(false);
		setShowDataTransactions(true);
	};

	return (
		<>
			<div className='bg-specific min-h-[150px] bg-cover flex flex-col pr-3 '>
				<div className='w-full flex items-center justify-center h-20 '>
					<h3 className='text-3xl font-bold text-white text-left'>
						Panel de Administracion
					</h3>
				</div>

				<div className='w-full flex flex-row items-center justify-center mx-3 flex-wrap'>
					<button
						className='bg-white text-specific text-center px-4 py-2 mt-4 sm:me-4 rounded-md w-[260px] h-[44px] mb-10  hover:bg-white hover:text-specific hover:border-specific hover:border-2'
						onClick={handleShowDataUsers}>
						<i className='fa-solid fa-users pe-2'></i>
						Administrar Usuarios
					</button>
					<button
						className='bg-white text-specific text-center px-4 py-2 mt-4 sm:me-4 rounded-md w-[260px] h-[44px] mb-10  hover:bg-white hover:text-specific hover:border-specific hover:border-2'
						onClick={handleShowDataProducts}>
						<i className=' fa-solid fa-person-chalkboard pe-2'></i>
						Administrar Productos
					</button>
					<button
						className='bg-white text-specific text-center px-4 py-2 mt-4  rounded-md w-[260px] h-[44px] mb-10  hover:bg-white hover:text-specific hover:border-specific hover:border-2'
						onClick={handleShowDataTransactions}>
						<i className='iconavbar fa-solid fa-magnifying-glass pe-2'></i>
						Consultar Transacciones
					</button>
				</div>
			</div>
			{showDataUsers && <DataUsers />}
			{showDataProducts && <DataProducts />}
			{showDataTransactions && <DataTransactions />}
		</>
	);
};
