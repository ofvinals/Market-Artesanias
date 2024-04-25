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
  console.log(productDetail);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])



  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <section className='flex bg-gradient-to-t from-[#FFE1B5] to-[#FFC062] rounded-xl shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]'>
      <div className="flex flex-row md:p-8">
        <div className="flex flex-col md:mr-8 2xl:mr-0 2xl:p-0 2xl:w-[1081px] ">
          <h2 className=' text-3xl mb-4 md:mb-0  md:text-5xl font-bold text-general md:w-[420px] 2xl:w-full '>No te pierdas estos descuentos increibles</h2>
          <Swiper
            rewind={true}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            modules={[Pagination, Navigation, Controller]}
            className="md:w-[420px] 2xl:w-[980px] 2xl:m-0 2xl:p-0 h-full "


          >
            {
              productDetail.map((producto) => (

                <SwiperSlide key={producto.Id} >
                  <Link key={producto.Id} to={`/${producto.Id}`}>
                    <div className="flex flex-col mt-9 ">
                      <h3 className="text-2xl text-general">{producto.Nombre}</h3>
                      <div className="md:h-[120px] 2xl:h-[200px] ">
                        <p className="text-general font-light text-lg  mt-9">{producto.Descripcion}</p>
                      </div>
                      <p className="text-2xl text-specific font-bold pt-9">${producto.Precio - (producto.Precio*0.2)}</p>
                    </div>
                  </Link>

                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

        <Swiper
          rewind={true}
          navigation={true}
          pagination={{ clickable: true }}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          modules={[Pagination, Navigation, Controller]}
          className="md:w-[726px] 2xl:w-[564px] h-[409px] rounded-[10px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]"


        >
          {
            productDetail.map((producto) => (

              <SwiperSlide key={producto.Id} className="">
                <Link key={producto.Id} to={`/discount/${producto.Id}`}>
                  <img src={producto.Imagen} alt={producto.Nombre} className='rounded-[10px] md:w-[726px] 2xl:w-[564px] h-[409px] object-cover ' />
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Descuentos;