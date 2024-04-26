import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Itemcard from '../components/SearchCard';
import { useLocation } from 'react-router-dom';

function TransactionsList() {
   const location = useLocation();
   const { compras, ventas } = location.state || {}; // Manejo de valores nulos
   console.log(compras, ventas);
	return (
		<main>
			<NavBar />
			<header className='bg-cover bg-center bg-[#E98C00] py-2 '>
				<div className='flex justify-center items-center max-w-3xl mx-auto bg-white w-9/12 overflow-hidden rounded-lg'>
					<h1 className='text-xl font-bold text-specific mb-8'>
						Productos Vendidos
					</h1>
				</div>
			</header>
			<Itemcard items={compras} />
		</main>
	);
}

export default TransactionsList;
