import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPurchase, clearCart } from '../../redux/Slices/cartSlice'

function Payment() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  
  return (
    <></>
  )
}

export default Payment 