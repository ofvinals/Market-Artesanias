import React from 'react'

function Payment() {
  return (
    <section>
      <h2 className='text-tlv text-general mt-[82px] mb-[31px]'>Seleccionar método de pago</h2>
      <div className='flex flex-col gap-6'>
        <button className='h-16 w-[504px]  border-primary border-2 rounded-[10px]'>
          <p className='font-bold text-xl text-specific '>Pagar con tarjeta</p>
        </button>
        <button className='h-16 w-[504px]  border-primary border-2 rounded-[10px]'>
          <p className='font-bold text-xl text-specific '>Pagar con Mercado Pago</p>
        </button>
        <button className='h-16 w-[504px] bg-primary rounded-[10px]'>
          <p className='font-bold text-xl text-white'>Continuar</p>
        </button>
      </div>
    </section>
  )
}

export default Payment 