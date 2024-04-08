import React from 'react';
// import { TfiArrowCircleRight, TfiArrowCircleLeft } from 'react-icons/tfi';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
	// const [index, setIndex] = useState(0);
	// const nextSlide = () => {
	// 	if (index < PRODUCTOS.length - 1) {
	// 		setIndex(index + 1);
	// 	} else {
	// 		setIndex(0);
	// 	}
	// };
	// const prevSlide = () => {
	// 	if (index > 0) {
	// 		setIndex(index - 1);
	// 	} else {
	// 		setIndex(PRODUCTOS.length - 1);
	// 	}
	// };

	return (
		<section className='min-h-96 py-24'>
			<h2 className='w-full text-4xl my-10 font-semibold text-[#8B5300]'>
				Te puede interesar
			</h2>

			<div className=' relative '>
				{/* <button onClick={prevSlide}>
						<TfiArrowCircleLeft className='absolute w-8 h-8 left-2 top-[80px]  md:top-[145px] md:-left-5 text-black' />
					</button> */}
				<Carousel
					showArrows={true}
					showStatus={false}
					showIndicators={true}
					infiniteLoop={false}
					emulateTouch={true}
					showThumbs={false}
					centerMode={true}
					centerSlidePercentage={100 / 5}
					>
					{PRODUCTOS.map((producto, idx) => (
						<div key={idx} className='w-full md:w-52 h-80'>
							<img
								src={producto.imagen}
								alt={producto.nombre}
								className='h-52 '
							/>
							<h3 className='text-xl text-[#563300]'>
								{producto.nombre}
							</h3>
							<p className='text-2xl font-semibold text-[#E98C00]'>
								${producto.precio}
							</p>
						</div>
					))}
				</Carousel>

				{/* <button onClick={nextSlide}>
						<TfiArrowCircleRight className='absolute w-8 h-8 right-2 top-[80px]  md:top-[145px] md:-right-5 text-[#5C5C5C]' />
					</button> */}
			</div>
		</section>
	);
}

export default Interes;
