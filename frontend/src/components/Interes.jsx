import { useState } from 'react';
import { TfiArrowCircleRight, TfiArrowCircleLeft } from 'react-icons/tfi';
import { Carousel } from '@material-tailwind/react';

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
		<section className='min-h-80 '>
			<h2 className='w-full text-3xl my-10 font-semibold text-black'>
				Te puede interesar
			</h2>
			<div className='flex flex-col flex-row w-full justify-around'>
				<div className=' flex flex-row justify-center items-center relative '>
					<button onClick={prevSlide}>
						<TfiArrowCircleLeft className='absolute w-8 h-8 left-2 top-[80px]  md:top-[145px] md:-left-5 text-black' />
					</button>
					{
            PRODUCTOS.map((producto, idx) => (


              <div key={idx} className=''>
                <img src={producto.imagen} alt={producto.nombre} className={`${index === idx ? `rounded-lg w-full min-h-24` : `hidden`}  `} />
                <h3 className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[200px] text-xl text-black`} >{producto.nombre}</h3>
                <p className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[230px] font-semibold text-xl text-orange-400`}>${producto.precio}</p>
              </div>

            ))
          }
          {
            PRODUCTOS.map((producto, idx) => (


              <div key={idx} className='ps-1'>
                <img src={producto.imagen} alt={producto.nombre} className={`${index === idx ? `rounded-lg w-full min-h-24` : `hidden`}  `} />
                <h3 className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[200px] text-xl text-black`} >{producto.nombre}</h3>
                <p className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[230px] font-semibold text-xl text-orange-400`}>${producto.precio}</p>
              </div>

            ))
          }
          {
            PRODUCTOS.map((producto, idx) => (


              <div key={idx} className='ps-1'>
                <img src={producto.imagen} alt={producto.nombre} className={`${index === idx ? `rounded-lg w-full min-h-24` : `hidden`}  `} />
                <h3 className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[200px] text-xl text-black`} >{producto.nombre}</h3>
                <p className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[230px] font-semibold text-xl text-orange-400`}>${producto.precio}</p>
              </div>

            ))
          }
          {
            PRODUCTOS.map((producto, idx) => (


              <div key={idx} className=' ps-1'>
                <img src={producto.imagen} alt={producto.nombre} className={`${index === idx ? `rounded-lg w-full min-h-24` : `hidden`}  `} />
                <h3 className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[200px] text-xl text-black`} >{producto.nombre}</h3>
                <p className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[230px] font-semibold text-xl text-orange-400`}>${producto.precio}</p>
              </div>

            ))
          }
          {
            PRODUCTOS.map((producto, idx) => (


              <div key={idx} className='ps-1'>
                <img src={producto.imagen} alt={producto.nombre} className={`${index === idx ? `rounded-lg w-full min-h-24` : `hidden`}  `} />
                <h3 className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[200px] text-xl text-black`} >{producto.nombre}</h3>
                <p className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[230px] font-semibold text-xl text-orange-400`}>${producto.precio}</p>
              </div>

            ))
          }
					<button onClick={nextSlide}>
						<TfiArrowCircleRight className='absolute w-8 h-8 right-2 top-[80px]  md:top-[145px] md:-right-5 text-[#5C5C5C]' />
					</button>
				</div>
			</div>
		</section>
	);
}

export default Interes;
