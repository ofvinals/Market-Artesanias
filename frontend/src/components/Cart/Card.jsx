import { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const products = [
    {
        nombre: 'Vestido Vintage',
        description: 'Talla L',
        price: 16.42,
        image: 'https://images.unsplash.com/photo-1565462905097-5e701c31dcfb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stok: 0
    },
    {
        nombre: 'Botas Vintage',
        description: 'Talla 6',
        price: 66.99,
        image: 'https://plus.unsplash.com/premium_photo-1674719144437-d1c253a8b775?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stok: 2
    },
    {
        nombre: 'Sombrero Vintage',
        description: 'Talla 14',
        price: 20.50,
        image: 'https://images.unsplash.com/photo-1678705385245-ee7b75e35c80?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stok: 3
    }

]


function Card() {
    const [count, setCount] = useState(products.stok)

    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    console.log(count);

    return (
        <section className='flex flex-col mt-[49px]'>
            <h1 className=' text-3tl mb-4 text-general'>Confirmación de compra</h1>
            <div className='flex flex-wrap gap-8'>

                {
                    products.map((product, idx) => (
                        <div key={idx} className='bg-secondary border rounded-lg flex flex-row md:p-4 justify-between md:w-[504px] md:h-[198px]'>
                            <div className='flex flex-row '>
                                <div className='flex flex-col '>
                                    <h3 className='font-bold text-xl text-general'>{product.nombre}</h3>
                                    <p className='mb-4 text-general'>{product.description}</p>
                                    <p className='font-bold text-xl text-specific'>${product.price}</p>
                                    <MdDelete className='text-general size-8  cursor-pointer hover:text-red-500 mt-8' />
                                </div>
                                <div className='flex flex-row gap-6 items-end '>
                                    <AiOutlineMinus onClick={minus} className='text-general cursor-pointer size-6' />
                                    <input type="text" placeholder={product.stok} className='text-general font-bold border border-general rounded-lg w-[49px] h-[36px] pl-4' />
                                    
                                    <AiOutlinePlus onClick={plus} className='text-general cursor-pointer size-6' />
                                </div>
                            </div>
                            <div>
                                <img src={product.image} alt={product.nombre} className='md:w-[145px] md:h-[160px] md:object-cover rounded-md' />
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Card