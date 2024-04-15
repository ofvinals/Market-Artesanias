import React from 'react'

export default function Categorias() {
  const CATEGORIAS = [
    {
      nombre: 'Vestimenta',
      imagen: './categories/vestimentaCategory.webp'
    },
    {
      nombre: 'ceramica',
      imagen: './categories/CeramicaCategory.webp'
    },
    {
      nombre: 'Muebles',
      imagen: './categories/MueblesCategory.webp'
    },
    {
      nombre: 'Pastelería',
      imagen: './categories/PasteleriaCategory.webp'
    },
    {
      nombre: 'Accesorios',
      imagen: './categories/AccesoriosCategory.webp'
    },


  ]


  return (
    <section className='w-full py-12 flex flex-col'>
      <h1 className='text-tlv font-light text-general'>Categorías</h1>
      <div className='flex flex-wrap md:flex-row justify-evenly md:justify-between mt-4'>

        {
          CATEGORIAS.map((categoria) => (
            <div key={categoria.nombre} className='flex flex-col items-center relative group cursor-pointer shadow-md rounded-[10px] mt-4 md:mt-0'>
              <img src={categoria.imagen} alt={categoria.nombre} className='object-cover w-20 h-20 md:h-[356px] md:w-[228px]  rounded-[10px]' />
              <div className='absolute inset-0 z-10 bg-black/40 group-hover:opacity-20 transition-opacity flex items-start justify-center rounded-[10px] pt-10'>
                <h2 className='text-white text-2xl'>{categoria.nombre}</h2>
              </div>
            </div>
          ))
        }
      </div>
    </section>

  )
}
