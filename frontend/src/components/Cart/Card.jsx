import { MdDelete } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { removeItem, increment, decrement, addPurchase, clearCart, } from '../../redux/Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Card() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
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

    let totalCompra = 0;
    let totalProducto = 0

    cartItems.forEach(producto => {
        totalCompra += producto.Precio * producto.cantidad;
        totalProducto += producto.cantidad
    });
    const onCheckoutPurchase = async () => {

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
        Swal.fire({
            title: 'Excelente!',
            text: 'Compra realizada',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
        })
        navigate('/');
    }




    console.log(cartItems);

    return (
        <section className='flex flex-col mt-[49px]'>
            <h1 className='text-xl font-semibold md:font-normal md:text-tlv mb-4 text-general'>Confirmación de compra</h1>
            <div className='flex flex-col  md:flex-row md:justify-between '>

                <div className='hidden md:flex flex-col gap-8'>
                    {
                        cartItems.map((product) => (
                            <div key={product.Id} className='bg-gradient-to-t from-[#FEEACC] to-[#FCC062] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)] rounded-lg flex flex-row md:p-4 justify-between md:w-[504px] md:h-[198px]'>
                                <div className='flex flex-col w-[340px]'>
                                    <div className='flex flex-col '>
                                        <h3 className='h-16 font-bold text-2xl text-general'>{product.Nombre}</h3>
                                        <p className='mb-2 text-general truncate'>{product.Descripcion}</p>
                                        <p className='font-bold text-xl text-specific'>${product.Precio}</p>
                                    </div>
                                    <div className='flex flex-row gap-6 items-end '>
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
                    <div className='flex justify-between px-4 items-center h-[77px] w-[504px] bg-specific rounded-[10px]  font-bold text-xl text-white shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]'>
                        <h2 className='text-2xl'>Total ${totalCompra}</h2>
                        <p className='text-xl font-normal'>{totalProducto} productos</p>
                    </div>
                </div>
                <div className='md:hidden'>
                    {
                        cartItems.map((product) => (
                            <div key={product.Id} className=' bg-gradient-to-b from-[#FEEACC] to-[#FCC062] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)] p-2 rounded-lg'>
                                <h3 className=' text-sm font-bold text-general'>{product.Nombre}</h3>
                                <p className='text-general text-xs mt-1'>{product.Descripcion}</p>
                                <p className='text-specific font-bold mt-2'>${product.Precio}</p>
                                <img src={product.Imagen} alt={product.Nombre} className='rounded-[10px] h-[304px] w-[366px] object-cover shadow-[0_4px_3px_0_rgba(0,0,0,0.25)] mt-3' />
                                <div className='flex flex-row gap-10 items-end justify-start mt-4'>
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
                        ))
                    }
                    <div className='flex justify-between px-4 items-center h-12 md:h-[77px] md:w-[504px] bg-specific rounded-md md:rounded-[10px]  font-bold text-white shadow-[0_4px_3px_0_rgba(0,0,0,0.25)] mt-8'>
                        <h2 className='md:text-2xl'>Total ${totalCompra}</h2>
                        <p className='md:text-xl font-normal'>{totalProducto} productos</p>
                    </div>
                </div>
                <div className="md:-mt-[90px]">
                    <h2 className='text-xl font-semibold md:font-normal mt-5 md:mt-0 md:text-tlv text-general mb-4'>Seleccionar método de pago</h2>
                    <div className='flex flex-col gap-6'>
                        <Link to='/tarjeta'>
                            <button className='h-12 w-[340px] md:h-16 md:w-[504px]  border-specific border-2 rounded-[10px] font-bold text-xl text-specific hover:border-[#0739EB] hover:text-[#0739EB]' onClick={onCheckoutPurchase}>
                                Pagar con tarjeta
                            </button>

                        </Link>
                        <Link to='/paypal'>
                            <button className='h-12 w-[340px] md:h-16 md:w-[504px]  border-specific border-2 rounded-[10px] font-bold text-xl text-specific hover:border-[#0739EB] hover:text-[#0739EB]' onClick={onCheckoutPurchase}>
                                Pagar con Paypal
                            </button>
                        </Link>
                        <button className='h-12 md:h-16 md:w-[504px] bg-specific rounded-[10px] hover:bg-[#0739EB] font-bold text-xl text-white' type='submit' onClick={onCheckoutPurchase}>
                            Comprar
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Card