import { MdDelete } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { removeItem, increment, decrement, addPurchase, clearCart, } from '../../redux/Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Card() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.items)
    const userId = useSelector((state) => state.auth.id)

    const removeFromCart = (item) => {
        dispatch(removeItem(item))
        console.log(cartItems);
    }


    const incrementCount = (item) => {
        dispatch(increment(item));
    }
    const decrementCount = (item) => {
        dispatch(decrement(item));
    }

    const onCheckoutPurchase = async () => {
        console.log(cartItems);
        console.log(userId);
        let totalCompra = 0;

        cartItems.forEach(producto => {
            totalCompra += producto.Precio * producto.cantidad;
        });

        for (let item of cartItems) {
            const purchaseData = {
                Titulo: item.Nombre,
                UserId: userId,
                ProductId: item.Id,
                StoreId: item.StoreId,
                CategoryId: item.CategoryId,
                FechaCompra: new Date().toISOString(),
                Cantidad: item.cantidad,
                PrecioTotal: totalCompra
            };
            await dispatch(addPurchase(purchaseData));
        }
        dispatch(clearCart())
    }


    console.log(cartItems);

    return (
        <section className='flex flex-col mt-[49px]'>
            <h1 className=' text-3tl mb-4 text-general'>Confirmación de compra</h1>
            <div className='flex flex-row justify-between'>

                <div className='flex flex-col gap-8'>

                    {
                        cartItems.map((product) => (
                            <div key={product.Id} className='bg-gradient-to-t from-[#FEEACC] to-[#FCC062] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)] rounded-lg flex flex-row md:p-4 justify-between md:w-[504px] md:h-[198px]'>
                                <div className='flex flex-col w-[340px]'>
                                    <div className='flex flex-col '>
                                        <h3 className='font-bold text-2xl text-general mb-2'>{product.Nombre}</h3>
                                        <p className='mb-[18px] text-general'>{product.Descripcion}</p>
                                        <p className='font-bold text-xl text-specific'>${product.Precio}</p>
                                    </div>
                                    <div className='flex flex-row gap-6 items-end mt-4'>
                                        <MdDelete className='text-general size-8  cursor-pointer hover:text-red-500' onClick={() => removeFromCart(product.Id)} />
                                        <button onClick={() => decrementCount(product.Id)} disabled={product.cantidad <= 0}>
                                            <AiOutlineMinus className='text-general cursor-pointer size-6' />
                                        </button>
                                        <input type="text" value={product.cantidad} disabled className='text-general font-bold border border-general bg-white rounded-lg w-[49px] h-[36px] pl-[17px]' />
                                        <button onClick={() => incrementCount(product.Id)} disabled={product.cantidad >= product.Disponible}>
                                            <AiOutlinePlus className='text-general cursor-pointer size-6' />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <img src={product.Imagen} alt={product.Nombre} className='md:w-[115px] md:h-[160px] md:object-cover rounded-md' />
                                </div>

                            </div>
                        ))
                    }
                </div>
                <div>

                    <h2 className='text-tlv text-general mb-[31px]'>Seleccionar método de pago</h2>
                    {/* <p>{totalCompra}</p> */}
                    {
                        cartItems.map((item) => (
                            <div key={item.Id}>
                                <p>{item.Nombre}</p>
                                <p>{item.UserId}</p>
                                <p>{item.cantidad}</p>
                                <p>Precio total:{item.Precio * item.cantidad}</p>
                            </div>
                        ))
                    }
                    <div className='flex flex-col gap-6'>
                        <Link to='/tarjeta'>
                            <button className='h-16 w-[504px]  border-primary border-2 rounded-[10px] font-bold text-xl text-specific hover:border-[#0739EB] hover:text-[#0739EB]' onClick={onCheckoutPurchase}>
                                Pagar con tarjeta
                            </button>

                        </Link>
                        <Link to='/paypal'>
                            <button className='h-16 w-[504px]  border-primary border-2 rounded-[10px] font-bold text-xl text-specific hover:border-[#0739EB] hover:text-[#0739EB]' onClick={onCheckoutPurchase}>
                                Pagar con Paypal
                            </button>
                        </Link>
                        <button className='h-16 w-[504px] bg-specific rounded-[10px] hover:bg-[#0739EB] font-bold text-xl text-white' type='submit' onClick={onCheckoutPurchase}>
                            Comprar
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Card