import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const CheckUser = () => {
	return (
		<>
			<NavBar />
			<div className='flex flex-col items-center justify-center mt-24'>
				<h1 className='text-3xl text-general '>
					Tus datos fueron guardados correctamente{' '}
				</h1>
				<img
					className='w-[256px] h-[256px] sm:w-[456px] sm:h-[456px] mt-12'
					src='/Viewing a resume letter.svg'
					alt=''
				/>
				<Link
					type='button'
					to='/createStore'
					className='mt-10 bg-specific text-center text-white w-[256px] border-2 border-specific font-semibold  sm:w-[456px] py-4 rounded-xl text-[20px] hover:bg-white hover:text-specific'>
					{' '}
					Crear Tienda
				</Link>
				<Link
					type='button'
					to='/Store'
					className='mt-10 bg-white text-center text-specific w-[256px] border-2 border-specific font-semibold  sm:w-[456px] py-4 rounded-xl text-[20px] hover:bg-specific hover:text-white'>
					{' '}
					Solo busco comprar productos
				</Link>
			</div>
		</>
	);
};
export default CheckUser;
