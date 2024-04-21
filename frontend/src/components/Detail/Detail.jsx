import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../redux/Slices/productSlice';



function Detail() {
    const { id } = useParams()

    const dispatch = useDispatch()
    const productDetail = useSelector((state) => state.products.product)
    useEffect(() => {
        dispatch(getProductById(id))
        console.log(productDetail);
    }, [id, dispatch])

    if (!productDetail) {

        return <div>Producto no encontrado!</div>;
    }

    return (
        <section className='grid grid-cols-2 mt-[74px] gap-[91px] 2xl:gap-0 '>
            <div key={productDetail.Id} className='flex flex-row w-[610px] h-[461px] gap-3'>
                <img src={productDetail.Imagen} alt={productDetail.Nombre} className='rounded-[10px] object-cover h-[461px] w-[194px]' />
                <img src={productDetail.Imagen} alt={productDetail.Nombre} className=' rounded-[10px] object-cover h-[461px] w-[416px] ' />
            </div>
            <div className=' '>
                <h2 className='text-3tl text-general mb-4 2xl:mb-8'>{productDetail.Nombre}</h2>
                <Link to='/'>
                    <div className='flex flex-row items-center gap-7 mb-6 2xl:mb-8'>
                        {/* <img src={productDetail.Store.Imagen} alt={productDetail.Store.Nombre} className=' size-[71px] rounded-full' /> */}
                        {/* <p className='text-xl font-bold text-specific'>{productDetail.Store.Nombre}</p> */}
                    </div>
                </Link>
                <p className='text-general text-xl mb-2 2xl:mb-4'>{productDetail.Descripcion}</p>
                <p className='text-general text-2xl font-bold'>$ {productDetail.Precio}</p>
                <div className='mt-6 flex flex-row gap-8'>
                    <MdDelete className='text-general size-8 cursor-pointer hover:text-red-500' />
                    <div className='flex flex-row gap-[65px]'>
                        <AiOutlineMinus className='text-general cursor-pointer size-6' />
                        <input type="text" className='text-general font-bold border border-general rounded-lg w-[49px] h-[36px] pl-4' />
                        <AiOutlinePlus className='text-general cursor-pointer size-6' />
                    </div>
                </div>
                <div className='flex flex-row gap-[14px] mt-[31px]'>
                    <button className='h-[44px] w-[260px] rounded-[5px] bg-primary text-white'>Comprar </button>
                    <button className='h-[44px] w-[260px] rounded-[5px] border-2 border-primary text-specific items-center flex justify-center gap-[10px]'>Agregar al carrito <FaShoppingCart /></button>
                </div>
            </div>
        </section>
    )
}

export default Detail