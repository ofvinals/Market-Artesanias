import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<>
			<NavBar />
			<div className='flex flex-col items-center justify-center mt-24'>
				<h1 className='text-3xl text-general '>
					Bienvenido a Artesanias Market
				</h1>
				<p className='text-xl mt-12'>Comenzá a configurar tu perfil</p>
				<img
					className='w-[256px] h-[256px] sm:w-[456px] sm:h-[456px] mt-12'
					src='/Looking for new employees among the resumes of people.png'
					alt=''
				/>
				<Link
					type='button'
					to='/profile'
					className='mt-10 bg-specific text-center text-white w-[256px] border-2 border-specific font-semibold  sm:w-[456px] py-4 rounded-xl text-[20px] hover:bg-white hover:text-specific'>
					{' '}
					Continuar
				</Link>
			</div>
		</>
	);
};
export default Welcome;
