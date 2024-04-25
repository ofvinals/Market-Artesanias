import React from 'react';
import { Link } from 'react-router-dom';

function SearchCard({ items }) {
	console.log(items);
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
	console.log(items);

	return (
		<div className='flex mx-10 my-10 flex-row'>
			{items.map((item) => (
				<article
					key={item.Id}
					className='flex mr-3 flex-col border w-[296px] h-[261px] rounded-[10px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)] hover:scale-110 hover:transition-all'>
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
							<p className='text-specific text-xl font-bold'>
								$ {item.Precio}
							</p>
						</div>
					</Link>
				</article>
			))}
		</div>
	);
}

export default SearchCard;
