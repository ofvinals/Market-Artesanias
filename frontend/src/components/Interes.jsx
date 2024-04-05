import { useState } from 'react';
import { TfiArrowCircleRight, TfiArrowCircleLeft } from 'react-icons/tfi';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';

const PRODUCTOS = [
	{
		nombre: 'Taza de cafe',
		precio: 7.99,
		imagen: 'https://picsum.photos/id/30/566/290',
	},
	{
		nombre: 'Triciclo de 2da mano',
		precio: 12.99,
		imagen: 'https://picsum.photos/id/146/566/290',
	},
	{
		nombre: 'Tetera de cristal',
		precio: 27.99,
		imagen: 'https://picsum.photos/id/225/566/290',
	},
];

function Interes() {
	const [index, setIndex] = useState(0);
	const nextSlide = () => {
		if (index < PRODUCTOS.length - 1) {
			setIndex(index + 1);
		} else {
			setIndex(0);
		}
	};
	const prevSlide = () => {
		if (index > 0) {
			setIndex(index - 1);
		} else {
			setIndex(PRODUCTOS.length - 1);
		}
	};

	return (
		<section className='min-h-96 py-24'>
			<h2 className='w-full text-4xl my-10 font-semibold text-[#8B5300]'>
				Te puede interesar
			</h2>
			<div className='flex flex-col flex-row w-full justify-around'>
				<Box
					sx={{
						display: 'flex',
						gap: 1,
						py: 1,
						overflow: 'auto',
						width: 343,
						scrollSnapType: 'x mandatory',
						'& > *': {
							scrollSnapAlign: 'center',
						},
						'::-webkit-scrollbar': { display: 'none' },
					}}>
					{data.map((item) => (
						<Card
							orientation='horizontal'
							size='sm'
							key={item.title}
							variant='outlined'>
							<AspectRatio ratio='1' sx={{ minWidth: 60 }}>
								<img
									srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
									src={`${item.src}?h=120&fit=crop&auto=format`}
									alt={item.title}
								/>
							</AspectRatio>
							<Box sx={{ whiteSpace: 'nowrap', mx: 1 }}>
								<Typography level='title-md'>{item.title}</Typography>
								<Typography level='body-sm'>
									{item.description}
								</Typography>
							</Box>
						</Card>
					))}
				</Box>

				{/* <div className=' flex flex-row justify-center items-center relative '>
					<button onClick={prevSlide}>
						<TfiArrowCircleLeft className='absolute w-8 h-8 left-2 top-[80px]  md:top-[145px] md:-left-5 text-black' />
					</button>
					{PRODUCTOS.map((producto, idx) => (
						<div key={idx} className=''>
							<img
								src={producto.imagen}
								alt={producto.nombre}
								className={`${
									index === idx ? `rounded-lg w-full h-56` : `hidden`
								}  `}
							/>
							<h3
								className={`${
									index === idx ? `` : `hidden`
								}   text-2xl text-[#563300]`}>
								{producto.nombre}
							</h3>
							<p
								className={`${
									index === idx ? `` : `hidden`
								}   text-2xl text-[#8B5300]`}>
								${producto.precio}
							</p>
						</div>
					))}
					{PRODUCTOS.map((producto, idx) => (
						<div key={idx} className='ps-1'>
							<img
								src={producto.imagen}
								alt={producto.nombre}
								className={`${
									index === idx ? `rounded-lg w-full h-56` : `hidden`
								}  `}
							/>
							<h3
								className={`${
									index === idx ? `` : `hidden`
								}  text-2xl text-[#563300]`}>
								{producto.nombre}
							</h3>
							<p
								className={`${
									index === idx ? `` : `hidden`
								}   text-2xl text-[#8B5300]`}>
								${producto.precio}
							</p>
						</div>
					))}
					{PRODUCTOS.map((producto, idx) => (
						<div key={idx} className='ps-1'>
							<img
								src={producto.imagen}
								alt={producto.nombre}
								className={`${
									index === idx ? `rounded-lg w-full h-56` : `hidden`
								}  `}
							/>
							<h3
								className={`${
									index === idx ? `` : `hidden`
								}  text-2xl text-[#563300]`}>
								{producto.nombre}
							</h3>
							<p
								className={`${
									index === idx ? `` : `hidden`
								}  text-2xl text-[#8B5300]`}>
								${producto.precio}
							</p>
						</div>
					))}
					{PRODUCTOS.map((producto, idx) => (
						<div key={idx} className=' ps-1'>
							<img
								src={producto.imagen}
								alt={producto.nombre}
								className={`${
									index === idx ? `rounded-lg w-full h-56` : `hidden`
								}  `}
							/>
							<h3
								className={`${
									index === idx ? `` : `hidden`
								}  text-2xl text-[#563300]`}>
								{producto.nombre}
							</h3>
							<p
								className={`${
									index === idx ? `` : `hidden`
								}   text-2xl text-[#8B5300]`}>
								${producto.precio}
							</p>
						</div>
					))}
					{PRODUCTOS.map((producto, idx) => (
						<div key={idx} className='ps-1'>
							<img
								src={producto.imagen}
								alt={producto.nombre}
								className={`${
									index === idx ? `rounded-lg w-full h-56` : `hidden`
								}  `}
							/>
							<h3
								className={`${
									index === idx ? `` : `hidden`
								} text-2xl text-[#563300]`}>
								{producto.nombre}
							</h3>
							<p
								className={`${
									index === idx ? `` : `hidden`
								}   text-2xl text-[#8B5300]`}>
								${producto.precio}
							</p>
						</div>
					))}
					<button onClick={nextSlide}>
						<TfiArrowCircleRight className='absolute w-8 h-8 right-2 top-[80px]  md:top-[145px] md:-right-5 text-[#5C5C5C]' />
					</button>
				</div> */}
			</div>
		</section>
	);
}

export default Interes;
