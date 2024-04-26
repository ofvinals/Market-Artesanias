import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/Slices/categoriesSlice'
import { Link } from 'react-router-dom'

export default function Categorias() {
  const dispatch = useDispatch()
  const CATEGORIAS = [
    {
      nombre: 'Vestimenta',
      imagen: './categories/vestimentaCategory.webp'
    },
    {
      nombre: 'Cerámica',
      imagen: './categories/CeramicaCategory.webp'
    },
    {
      nombre: 'Muebles',
      imagen: './categories/MueblesCategory.webp'
    },
    {
      nombre: 'Cuadros',
      imagen: './categories/cuadrosCategory.webp'
    },
    {
      nombre: 'Accesorios',
      imagen: './categories/AccesoriosCategory.webp'
    },
  ]

  const handleCategory = (categoria) => () => {
    dispatch(setCategory(categoria))
    console.log(categoria);
  }

  return (
    <section className='w-full py-12 flex flex-col px-4 md:px-[104px] '>
      <h1 className='text-tlv font-light text-general'>Categorías</h1>
      <div className='flex flex-wrap md:flex-row justify-around md:justify-between 2xl:justify-evenly mt-4'>
        {
          CATEGORIAS.map((categoria) => (
            <Link key={categoria.nombre} to='/categories' onClick={handleCategory(categoria.nombre)}>
              <div className='flex flex-col items-center relative group shadow-md rounded-[10px] mt-4 md:mt-0' >
                <img src={categoria.imagen} alt={categoria.nombre} className='object-cover w-20 h-20 md:h-[356px] md:w-[228px] rounded-[10px]' />
                  <h2 className='absolute pt-10 text-specific md:text-2xl  text-sm hover:opacity-100 '>{categoria.nombre}</h2>

                <div className='absolute inset-0 z-10 bg-black/40 hover:opacity-0 transition-opacity flex items-start justify-center rounded-[10px] pt-10'>
                  <h2 className='text-white md:text-2xl  text-sm'>{categoria.nombre}</h2>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  )
}