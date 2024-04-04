import React from 'react'

export default function Categorias() {
  const CATEGORIAS = [
    {
      nombre: 'Vestimenta',
      imagen: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg'
    },
    {
      nombre: 'ceramica',
      imagen: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg'
    },
    {
      nombre: 'Muebles',
      imagen: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg'
    },
    {
      nombre: 'Pastelería',
      imagen: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg'
    },
    {
      nombre: 'Accesorios',
      imagen: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg'
    },


  ]


  return (
    <section className='w-full py-12 flex flex-col'>
      <h1 className='text-xl font-semibold'>Categorias</h1>
      <div className='flex flex-wrap md:flex-row justify-evenly md:justify-between mt-4'>

        {
          CATEGORIAS.map((categoria) => (
            <div key={categoria.nombre} className='flex flex-col items-center relative group cursor-pointer shadow-md rounded-[10px] mt-4 md:mt-0'>
              <img src={categoria.imagen} alt={categoria.nombre} className='object-cover w-20 h-20 md:h-full md:w-full md:aspect-[3/4] rounded-[10px]' />
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
