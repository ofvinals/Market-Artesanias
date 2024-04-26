import React, { useEffect} from 'react'
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


    useEffect(() => {
        dispatch(getProductById(id))
        return (() => dispatch(deleteDetail()))
    }, [id, dispatch])

    const handleAddandNavigateToCart = () => {
        if (productDetail) {
            dispatch(addItem(productDetail))

        }
        navigate('/cart')
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

        return <div>Producto no encontrado!</div>;
    }

    return (
        <section className='flex flex-col xl:grid xl:grid-cols-2 xl:mt-[74px] xl:gap-[91px] 2xl:gap-0 mb-10'>
            <img src={productDetail.Imagen} alt={productDetail.Nombre} className=' rounded-[10px] object-cover h-[308px] xl:h-[461px] xl:w-[622px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)] mt-4 xl:mt-0' />
            <div className=' '>
                <h2 className='text-xl xl:text-3tl mt-3 xl:mt-0 font-semibold xl:font-normal text-general xl:mb-4 2xl:mb-8'>{productDetail.Nombre}</h2>
                <p className='text-general mt-2 xl:mt-0 xl:text-xl xl:mb-2 2xl:mb-4'>{productDetail.Descripcion}</p>
                <p className='text-specific xl:text-general mt-4 xl:mt-0 text-2xl font-bold'>$ {productDetail.Precio - (productDetail.Precio * 0.2)}</p>
                <div className='mt-6 flex flex-row gap-8'>
                    <div className='flex flex-row gap-[65px]'>
                        <p className='text-general text-2xl font-bold'>Disponible: {productDetail.Disponible}</p>
                    </div>
                </div>
                <div className='flex flex-col xl:flex-row gap-[14px] mt-[31px]'>
                    <button className='h-[44px] xl:w-[260px] rounded-[5px] bg-specific text-white' onClick={handleAddandNavigateToCart}>Comprar </button>
                    <button className='h-[44px] xl:w-[260px] rounded-[5px] border-2 border-specific text-specific items-center flex justify-center gap-[10px]' onClick={handleAddToCart}>Agregar al carrito <FaShoppingCart /></button>
                </div>
            </div>
        </section>
    )
}

export default Detail