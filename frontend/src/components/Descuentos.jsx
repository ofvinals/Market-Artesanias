import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Controller } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation';
import { useState } from "react";


const PRODUCTOS = [
  {
    id: 1,
    nombre: 'Bandolera con doble cierre',
    description: 'Bandolera don doble cierre de cremallera, y correa larga regulable.',
    precio: 20.75,
    imagen: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2F76%2Fb6767ccc55f4038639ad2cc8cc8056714c3e0bef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    imagen2: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb8%2Fa5%2Fb8a5c2a8cb2213e04047a5115841b6f8a33bf6de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D'
  },
  {
    id: 2,
    nombre: 'Triciclo de 2da mano',
    description: 'Bandolera don doble cierre de cremallera, y correa larga regulable. Color ceniza',
    precio: 12.99,
    imagen: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2F76%2Fb6767ccc55f4038639ad2cc8cc8056714c3e0bef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    imagen2: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb8%2Fa5%2Fb8a5c2a8cb2213e04047a5115841b6f8a33bf6de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D'
  },
  {
    id: 3,
    nombre: 'Tetera de cristal',
    description: 'Bandolera don doble cierre de cremallera, y correa larga regulable. Color ceniza',
    precio: 27.99,
    imagen: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2F76%2Fb6767ccc55f4038639ad2cc8cc8056714c3e0bef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
    imagen2: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb8%2Fa5%2Fb8a5c2a8cb2213e04047a5115841b6f8a33bf6de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D'
  },

]

function Descuentos() {

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <section className='flex bg-gradient-to-t from-[#FFE1B5] to-[#FFC062] rounded-xl '>
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
              PRODUCTOS.map((producto) => (

                <SwiperSlide key={producto.id} >
                  <Link key={producto.id} to={`/discount/${producto.id}`}>
                    <div className="flex flex-col mt-9 ">
                      <h3 className="text-2xl text-general">{producto.nombre}</h3>
                      <div className="md:h-[120px] 2xl:h-[200px] ">
                        <p className="text-general font-light text-lg  mt-9">{producto.description}</p>
                      </div>
                      <p className="text-2xl text-specific font-bold pt-9">${producto.precio}</p>
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
          className="md:w-[726px] 2xl:w-[564px] h-[409px]"


        >
          {
            PRODUCTOS.map((producto) => (

              <SwiperSlide key={producto.id} >
                <Link key={producto.id} to={`/discount/${producto.id}`}>
                  <div className="flex flex-row gap-5 ">
                    <img src={producto.imagen} alt={producto.nombre} className='rounded-[10px] md:w-[363px] 2xl:w-[282px] h-[409px] object-cover' />
                    <img src={producto.imagen2} alt={producto.nombre} className='rounded-[10px] md:w-[363px] 2xl:w-[282px] h-[409px] object-cover' />
                  </div>
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