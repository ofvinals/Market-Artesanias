import React from 'react';

export const Detail = ({ Store }) => {
	const imgStore = Store && Store.Imagen ? Store.Imagen : null;
	const nameStore = Store && Store.Nombre ? Store.Nombre : null;

	return (
		<div className='bg-specific min-h-[290px] flex flex-row '>
			<div className='flex flex-col-reverse sm:flex-row justify-around w-full'>
				<div className='flex justify-around items-center text-center w-5/12'>
					<div className='flex flex-col items-center justify-center'>
						<img
							src={imgStore}
							alt='Uploaded'
							className='w-[222px] h-56 rounded-full '
						/>
					</div>
				</div>
				<div className='flex flex-row w-full bg-transparent items-start justify-start mt-10'>
					<p className='w-full text-[20px] sm:text-[32px] text-wrap bg-transparent text-white'>
						{nameStore}
					</p>
				</div>
			</div>
		</div>
	);
};
