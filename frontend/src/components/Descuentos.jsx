import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Controller } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/Slices/productSlice";


function Descuentos() {
  const dispatch = useDispatch()
  const productDetail = useSelector((state) => state.products.allProducts.slice(0, 3))

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])



  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <section className='flex bg-gradient-to-t from-[#FFE1B5] to-[#FFC062] rounded-xl shadow-[0_4px_3px_0_rgba(0,0,0,0.25)] px-[18px] xl:px-0'>
      <div className="flex flex-col xl:flex-row xl:p-8 xl:gap-[220px]">
        <h2 className='flex xl:hidden text-3xl w-[310px] mt-3 xl:mt-0 2xl:mb-4 xl:mb-0 xl:text-5xl font-bold text-general xl:w-[420px] 2xl:w-[600px] mb-3'>No te pierdas estas increibles ofertas</h2>
        <div className="flex flex-col xl:mr-8 2xl:mr-0 2xl:p-0  order-last xl:order-first ">
          <h2 className='hidden xl:flex text-3xl w-[310px] mt-3 xl:mt-0 2xl:mb-4 xl:mb-0 xl:text-5xl font-bold text-general xl:w-[420px] 2xl:w-[600px] '>No te pierdas estos descuentos increibles</h2>
          {/* texto */}
          <Swiper
            rewind={true}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            modules={[Pagination, Navigation, Controller]}
            className="w-[350px] h-[230px] xl:w-[420px]  2xl:m-0 2xl:p-0 xl:h-full flex "


          >
            {
              productDetail.map((producto) => (

                <SwiperSlide key={producto.Id} >
                  <Link key={producto.Id} to={`/${producto.Id}`}>
                    <div className="flex flex-col mt-9 ">
                      <h3 className="text-xl xl:text-2xl text-general">{producto.Nombre}</h3>
                      <div className="xl:h-[120px] 2xl:h-[150px] ">
                        <p className="text-general font-light text-xl mt-7 xl:mt-9">{producto.Descripcion}</p>
                      </div>
                      <p className="text-2xl text-specific font-bold pt-3 xl:pt-9">${producto.Precio - (producto.Precio * 0.2)}</p>
                    </div>
                  </Link>

                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        <div className="order-frist xl:order-last">
          {/* imagen */}
          <Swiper
            rewind={true}
            navigation={true}
            pagination={{ clickable: true }}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            modules={[Pagination, Navigation, Controller]}
            className="w-[350px] h-[308px] 2lg:w-[565px] xl:w-[460px] 2xl:w-[880px] xl:h-[409px] rounded-[10px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]"


          >
            {
              productDetail.map((producto) => (

                <SwiperSlide key={producto.Id} className="">
                  <Link key={producto.Id} to={`/discount/${producto.Id}`}>
                    <img src={producto.Imagen} alt={producto.Nombre} className='rounded-[10px] w-[350px] h-[308px] xl:w-[565px] 2xl:w-[880px] xl:h-[409px] object-cover ' />
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Descuentos;