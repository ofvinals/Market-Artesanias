import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const PublishedProduct = () => {
	return (
		<>
			<NavBar />
			<div className='flex flex-col items-center justify-center mt-24'>
				<h1 className='text-3xl text-general '>
					Tu producto fue publicado exitosamente
				</h1>
				<img
					className='w-[256px] h-[256px] sm:w-[456px] sm:h-[456px] mt-12'
					src='/Shopping cart on wheels with selected purchases.svg'
					alt=''
				/>
				<Link
					type='button'
					to='/mi-tienda'
					className='mt-10 bg-specific text-center text-white w-[256px] border-2 border-specific font-semibold  sm:w-[456px] py-4 rounded-xl text-[20px] hover:bg-white hover:text-specific'>
					{' '}
					Volver a mi tienda
				</Link>
			</div>
		</>
	);
};
export default PublishedProduct;
