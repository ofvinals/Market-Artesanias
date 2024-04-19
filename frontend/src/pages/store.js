import React from 'react';
import NavBar from '../components/NavBar';

const store = () => {
	return (
		<div>
			<NavBar />
			<header className='bg-cover bg-center bg-[#E98C00] py-2 '>
				<div className='flex justify-center my-5 items-center max-w-3xl mx-auto bg-white w-10/12 overflow-hidden rounded-lg'>
					<input
						type='text'
						className='flex-1 px-4 py-2 '
						placeholder='Buscar producto, tienda, categoria...'
					/>
					<i className='fas fa-search text-gray-700 p-2 cursor-pointer'></i>
				</div>
			</header>
      Store...
		</div>
	);
};
export default store;
