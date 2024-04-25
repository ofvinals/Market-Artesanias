import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../css/Interes.css'
const PRODUCTOS = [
	{
		nombre: 'Taza de cafe 1',
		precio: 7.99,
		imagen: 'https://picsum.photos/id/30/566/290',
	},
	{
		nombre: 'Triciclo de 1da mano',
		precio: 12.99,
		imagen: 'https://picsum.photos/id/146/566/290',
	},
	{
		nombre: 'Tetera de cristal',
		precio: 27.99,
		imagen: 'https://picsum.photos/id/225/566/290',
	},
	{
		nombre: 'Tetera de cristal nueva',
		precio: 27.99,
		imagen: 'https://picsum.photos/id/225/566/290',
	},
	{
		nombre: 'Taza de cafe nueva',
		precio: 7.99,
		imagen: 'https://picsum.photos/id/30/566/290',
	},
	{
		nombre: 'Triciclo de 3da mano',
		precio: 12.99,
		imagen: 'https://picsum.photos/id/146/566/290',
	},
];

function Interes() {
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
					centerSlidePercentage={100 / 4}
					>
					{PRODUCTOS.map((producto, idx) => (
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
