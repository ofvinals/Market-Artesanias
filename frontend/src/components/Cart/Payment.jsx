import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPurchase, clearCart } from '../../redux/Slices/cartSlice'

function Payment() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const onCheckoutPurchase = async () => {
    let totalCompra = 0;

    cartItems.forEach(producto => {
      totalCompra += producto.Precio * producto.cantidad;
    });
    for (let item of cartItems) {
      
      const purchaseData = {
        Titulo: item.Nombre,
        UserId: item.userId,
        ProductId: item.Id,
        FechaCompra: new Date().toISOString(),
        Cantidad: item.cantidad,
        PrecioTotal: totalCompra
      }
      await dispatch(addPurchase(purchaseData))
    }
    // dispatch(clearCart())
  }

  return (
    <section>
      <h2 className='text-tlv text-general mt-[82px] mb-[31px]'>Seleccionar método de pago</h2>
      <div className='flex flex-col gap-6'>
        {/* <button className='h-16 w-[504px]  border-primary border-2 rounded-[10px] font-bold text-xl text-specific'>
          Pagar con tarjeta
        </button>
        <button className='h-16 w-[504px]  border-primary border-2 rounded-[10px] font-bold text-xl text-specific'>
          Pagar con Mercado Pago
        </button> */}
        <button className='h-16 w-[504px] bg-primary rounded-[10px] font-bold text-xl text-white' type='submit' onClick={onCheckoutPurchase}>
          Comprar
        </button>
      </div>
    </section>
  )
}

export default Payment 