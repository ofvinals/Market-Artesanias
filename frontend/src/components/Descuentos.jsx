import { useState } from 'react'
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";

const PRODUCTOS = [
  {
    nombre: 'Taza de cafe',
    precio: 7.99,
    imagen: 'https://picsum.photos/id/30/566/290'
  },
  {
    nombre: 'Triciclo de 2da mano',
    precio: 12.99,
    imagen: 'https://picsum.photos/id/146/566/290'
  },
  {
    nombre: 'Tetera de cristal',
    precio: 27.99,
    imagen: 'https://picsum.photos/id/225/566/290'
  },

]

function Descuentos() {


  const [index, setIndex] = useState(0)
  const nextSlide = () => {
    if (index < PRODUCTOS.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }
  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(PRODUCTOS.length - 1)
    }
  }

  return (
    <section className='flex border bg-[#D9D9D9] rounded-xl '>
      <div className='flex flex-col md:flex-row w-full justify-evenly md:py-[91px]'>
        <h2 className=' text-3xl mb-4 md:mb-0  md:text-[70px] font-semibold text-[#5C5C5C]'>Aprovecha por hoy</h2>
        <div className=' flex flex-row justify-center items-center relative '>
          <button onClick={prevSlide}>
            <TfiArrowCircleLeft className='absolute w-8 h-8 left-2 top-[80px]  md:top-[145px] md:-left-5 text-[#5C5C5C]' />
          </button>
          {
            PRODUCTOS.map((producto, idx) => (


              <div key={idx} className=' shadow-lg'>
                <img src={producto.imagen} alt={producto.nombre} className={`${index === idx ? `rounded-lg w-full h-full` : `hidden`}  `} />
                <h3 className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[200px] text-2xl text-[#5C5C5C]`} >{producto.nombre}</h3>
                <p className={`${index === idx ? `` : `hidden`}  md:absolute md:-left-[800px] md:top-[230px] font-semibold text-2xl text-[#5C5C5C]`}>${producto.precio}</p>
              </div>

            ))
          }
          <button onClick={nextSlide}>
            <TfiArrowCircleRight className='absolute w-8 h-8 right-2 top-[80px]  md:top-[145px] md:-right-5 text-[#5C5C5C]' />
          </button>
        </div>

      </div>
    </section>
  )
}

export default Descuentos