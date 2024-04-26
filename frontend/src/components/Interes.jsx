import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../css/Interes.css';
import { searchItemsInDatabase } from '../hooks/useSearch.js';

function Interes() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		const loadResults = async () => {
			const results = await searchItemsInDatabase();
			setProductos(results);
		};
		loadResults();
	}, []);

	return (
		<section className='py-16'>
			<h2 className='w-full text-4xl my-10 font-semibold text-[#8B5300]'>
				Te puede interesar
			</h2>

			<div className='containterinteres'>
				<Carousel
					showArrows={true}
					showStatus={false}
					showIndicators={true}
					infiniteLoop={true}
					emulateTouch={true}
					showThumbs={false}
					centerMode={true}
					centerSlidePercentage={100 / 4}>
					{productos.map((producto, idx) => (
						<div key={idx} className='containerprodint'>
							<img
								src={producto.imagen}
								alt={producto.nombre}
								className='imginteres'
							/>
							<h3 className='text-xl textinteres text-[#563300]'>
								{producto.nombre}
							</h3>
							<p className='text-2xl textinteres font-semibold text-[#E98C00]'>
								${producto.precio}
							</p>
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
}

export default Interes;
