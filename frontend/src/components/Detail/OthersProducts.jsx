import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/Slices/productSlice';



function OthersProducts() {
    const { id } = useParams()
    const numericId = parseInt(id)
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.products.allProducts)
    const productos = useSelector((state) => state.products.product)
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productData = allProducts.filter(product => product.Activo && product.Id !== numericId && product.StoreId === productos.StoreId);
        setProducts(productData);
        setLoading(false)
    }, [allProducts, numericId, productos.StoreId])

    if (loading) {
        return <h2 className='mt-6 text-general text-xl font-bold mb-3'>Cargando...</h2>;
    }

    if (products.length === 0) {
        return (
            <h2 className='mt-6 text-general text-xl font-bold mb-3'>No hay productos diferentes en la tienda</h2>
        )
    }

    return (
        <section className='  mt-6 '>
            <h2 className='text-general text-2xl font-bold mb-3'>Más productos de esta tienda</h2>
            <Swiper
                breakpoints={{
                    1441: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }}

                rewind={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Pagination, Navigation]}
                className='h-[228px]'
            >

                {
                    products.map((product) => (
                        <SwiperSlide key={product.Id} className=''>
                            <Link key={product.Id} to={`/${product.Id}`}>
                                <img src={product.Imagen} alt={product.Nombre} className='rounded-[10px] w-[397px] h-[228px] object-cover' />
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    )
}

export default OthersProducts