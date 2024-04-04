import React from 'react'

export default function Categorias() {
  const CATEGORIAS = [
    {
      nombre: 'Vestimenta',
      imagen: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nombre: 'ceramica',
      imagen: 'https://images.unsplash.com/photo-1605117012605-b68dedd4accc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nombre: 'Muebles',
      imagen: 'https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nombre: 'Pastelería',
      imagen: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      nombre: 'Accesorios',
      imagen: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },


  ]


  return (
    <section className='w-full py-12 flex flex-col'>
      <h1 className='text-xl font-semibold text-[#A9A9A9]'>Categorías</h1>
      <div className='flex flex-wrap md:flex-row justify-evenly md:justify-between mt-4'>

        {
          CATEGORIAS.map((categoria) => (
            <div key={categoria.nombre} className='flex flex-col items-center relative group cursor-pointer shadow-md rounded-[10px] mt-4 md:mt-0'>
              <img src={categoria.imagen} alt={categoria.nombre} className='object-cover w-20 h-20 md:h-[356px] md:w-[228px] md:aspect-[3/4] rounded-[10px]' />
              <div className='absolute inset-0 z-10 bg-black/40 group-hover:opacity-20 transition-opacity flex items-center justify-center rounded-[10px]'>
                <h2 className='text-white'>{categoria.nombre}</h2>
              </div>
            </div>
          ))
        }
      </div>
    </section>

  )
}
