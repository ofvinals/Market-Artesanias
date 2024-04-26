import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deleteDetail, getProductById } from '../../redux/Slices/productSlice';
import { addItem } from '../../redux/Slices/cartSlice';
import Swal from 'sweetalert2';



function Detail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const productDetail = useSelector((state) => state.products.product)
    // const allProducts = useSelector((state) => state.products.allProducts)
    console.log(productDetail);

    useEffect(() => {
        dispatch(getProductById(id))
        return (() => dispatch(deleteDetail()))
    }, [id, dispatch])

    const handleAddandNavigateToCart = () => {
        if (productDetail) {
            dispatch(addItem(productDetail))
            navigate('/cart')
        }
    }

    const handleAddToCart = () => {
        if (productDetail) {
            dispatch(addItem(productDetail))
            Swal.fire({
                title: 'Producto agregado al carrito',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
            })

        }
    }

    if (!productDetail) {

        return <div className='text-general text-2xl font-bold'>Producto no encontrado!</div>;
    }

    if (!productDetail.Store) {
        return <div className='text-general text-2xl font-bold'>Cargando detalles de la tienda...</div>; // O algún otro indicador de carga adecuado
    }

    return (
        <section className='flex flex-col md:grid md:grid-cols-2 mt-9 md:mt-[74px] md:gap-[200px] 2xl:gap-0 '>
            <div key={productDetail.Id} className='flex flex-row mb-4 md:w-[610px] md:h-[461px] md:gap-3 md:mb-0'>
                <img src={productDetail.Imagen} alt={productDetail.Nombre} className=' rounded-[10px] object-cover h-[308px] w-[355px] md:h-[461px] md:w-[622px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]' />
            </div>
            <div className=' '>
                <h2 className='text-xl font-semibold md:font-normal md:text-3tl text-general md:mb-4 2xl:mb-8'>{productDetail.Nombre}</h2>

                <div className='hidden md:flex flex-row items-center gap-7 mb-6 2xl:mb-8 mt-12'>
                    <img src={productDetail.Store.Imagen} alt={productDetail.Store.Nombre} className=' size-[71px] rounded-full' />
                    <p className='text-xl font-bold text-specific'>{productDetail.Store.Nombre}</p>
                </div>

                <p className='text-general md:text-xl mb-[18px] md:mb-2 2xl:mb-4'>{productDetail.Descripcion}</p>
                <p className='text-specific md:text-general text-2xl font-bold'>$ {productDetail.Precio}</p>
                <div className='mt-6 flex flex-row gap-8'>
                    <div className='flex flex-row gap-[65px]'>
                        <p className='text-general text-2xl font-bold'>Disponible: {productDetail.Disponible}</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-[14px] mt-[31px]'>
                    <button className='h-12 md:h-[44px] md:w-[260px] rounded-[5px] bg-specific text-white hover:bg-[#0739EB]' onClick={handleAddandNavigateToCart}>Comprar </button>
                    <button className='h-12 md:h-[44px] md:w-[260px] rounded-[5px] border-2 border-specific text-specific items-center flex justify-center gap-[10px] hover:border-[#0739EB] hover:text-[#0739EB]' onClick={handleAddToCart}>Agregar al carrito <FaShoppingCart /></button>
                </div>
            </div>
        </section>
    )
}

export default Detail