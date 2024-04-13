import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation';


const OTROSPRODUCTOS = [
    {
        id: 1,
        image1: 'https://i.pinimg.com/564x/7f/01/ac/7f01ac1cd63b2f2e1881531b3182634c.jpg',
        image2: 'https://i.pinimg.com/564x/b4/f3/af/b4f3afe3d4ed4861166e95aefcae24b6.jpg',
        name: 'Vestido Floreado',
        imgProfile: 'https://di2ponv0v5otw.cloudfront.net/posts/2023/05/30/6475f86b81078a89d02fd69e/m_wp_6475f8831645f7a4dc0a7be7.webp',
        nameProfile: 'Indigo Clothing',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis, eget non mauris scelerisque convallis libero augue. Nisl faucibus curae habitant eros vehicula posuere ullamcorper litora massa, varius cubilia.',
        price: 260.75
    },
    {
        id: 2,
        image1: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-2-600x720.jpg',
        image2: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-10.jpg',
        name: 'Camiseta Azul',
        imgProfile: 'https://images.unsplash.com/photo-1544450804-9e5f64cb18de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nameProfile: 'Supah Bass',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis, eget non mauris scelerisque convallis libero augue. Nisl faucibus curae habitant eros vehicula posuere ullamcorper litora massa, varius cubilia.',
        price: 42.99
    },
    {
        id: 3,
        image1: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-2-600x720.jpg',
        image2: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-10.jpg',
        name: 'Camiseta Azul',
        imgProfile: 'https://images.unsplash.com/photo-1544450804-9e5f64cb18de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nameProfile: 'Supah Bass',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis, eget non mauris scelerisque convallis libero augue. Nisl faucibus curae habitant eros vehicula posuere ullamcorper litora massa, varius cubilia.',
        price: 149.99
    },
    {
        id: 4,
        image1: 'https://i.pinimg.com/564x/7f/01/ac/7f01ac1cd63b2f2e1881531b3182634c.jpg',
        image2: 'https://i.pinimg.com/564x/b4/f3/af/b4f3afe3d4ed4861166e95aefcae24b6.jpg',
        name: 'Vestido Floreado',
        imgProfile: 'https://di2ponv0v5otw.cloudfront.net/posts/2023/05/30/6475f86b81078a89d02fd69e/m_wp_6475f8831645f7a4dc0a7be7.webp',
        nameProfile: 'Indigo Clothing',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis, eget non mauris scelerisque convallis libero augue. Nisl faucibus curae habitant eros vehicula posuere ullamcorper litora massa, varius cubilia.',
        price: 260.75
    },
    {
        id: 5,
        image1: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-2-600x720.jpg',
        image2: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-10.jpg',
        name: 'Camiseta Azul',
        imgProfile: 'https://images.unsplash.com/photo-1544450804-9e5f64cb18de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nameProfile: 'Supah Bass',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis, eget non mauris scelerisque convallis libero augue. Nisl faucibus curae habitant eros vehicula posuere ullamcorper litora massa, varius cubilia.',
        price: 42.99
    },
    {
        id: 6,
        image1: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-2-600x720.jpg',
        image2: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-10.jpg',
        name: 'Camiseta Azul',
        imgProfile: 'https://images.unsplash.com/photo-1544450804-9e5f64cb18de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nameProfile: 'Supah Bass',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis, eget non mauris scelerisque convallis libero augue. Nisl faucibus curae habitant eros vehicula posuere ullamcorper litora massa, varius cubilia.',
        price: 149.99
    },

]

function OthersProducts() {
    // const swiper = useSwiper()

    // const nextSlide = () =>{
    //     swiper.slideNext()
    // }
    // const prevSlide = () =>{
    //     swiper.slidePrev()
    // }



    return (
        <section className='  mt-6 '>
            <h2 className='text-general text-2xl font-bold mb-3'>Más productos de esta tienda</h2>
            {/* <button onClick={prevSlide}>
            <TfiArrowCircleLeft className='text-general size-[38px]'  />
            </button> */}
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
                // navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                modules={[Pagination, Navigation]}
                className='h-[228px]'
            >

                {OTROSPRODUCTOS.map((product) => (
                    <SwiperSlide key={product.id} className=''>
                        <Link key={product.id} to={`/store/${product.id}`}>
                            <img src={product.image1} alt={product.name} className='rounded-[10px] w-[397px] h-[228px] object-cover' />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <button onClick={nextSlide}>
            <TfiArrowCircleRight className='text-general size-[38px]'  />
            </button> */}

        </section>
    )
}

export default OthersProducts