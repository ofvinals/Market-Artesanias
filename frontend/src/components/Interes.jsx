/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../css/Interes.css';
import { searchItemsInteres } from '../hooks/useSearch.js';

function Interes() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		const loadResults = async () => {
			const results = await searchItemsInteres();
			const resultadosBarajados = shuffleArray(results);
			const productosAleatorios = resultadosBarajados.slice(0, 5);
			setProductos(productosAleatorios);
		};
		loadResults();
	}, []);

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	return (
		<section className='py-16'>
			<h2 className='w-full text-4xl my-10 font-semibold text-[#8B5300]'>
				Te puede interesar
			</h2>

			<div className='w-full mx-5'>
				<Carousel
					showArrows={true}
					infiniteLoop={true}
					showThumbs={false}
					centerMode={true}
					centerSlidePercentage={100 / 3}
					dynamicHeight={false}>
					{productos.map((producto, idx) => (
						<div
							key={idx}
							className='flex flex-col justify-center md:mr-10 '>
							<img
								src={producto.Imagen}
								alt={producto.Nombre}
								className='imginteres'
							/>
							<h3 className='text-xl textinteres text-[#563300]'>
								{producto.Nombre}
							</h3>
							<p className='text-2xl textinteres font-semibold text-[#E98C00]'>
								${producto.Precio}
							</p>
						</div>
					))}
				</Carousel>
			</div>
		</section>
	);
}

export default Interes;
