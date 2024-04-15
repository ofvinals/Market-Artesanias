import React from 'react'
import { useParams } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";


const PRODUCTOS = [
    {
        id: 1,
        image1: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2F76%2Fb6767ccc55f4038639ad2cc8cc8056714c3e0bef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        image2: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb8%2Fa5%2Fb8a5c2a8cb2213e04047a5115841b6f8a33bf6de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        name: 'Bandolera con doble cierre',
        imgProfile: 'https://di2ponv0v5otw.cloudfront.net/posts/2023/05/30/6475f86b81078a89d02fd69e/m_wp_6475f8831645f7a4dc0a7be7.webp',
        nameProfile: 'Carola Bags',
        description: 'Bandolera con doble cierre de cremallera, y correa larga regulable. Color ceniza.',
        price: 260.75
    },
    {
        id: 2,
        image1: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb6%2F76%2Fb6767ccc55f4038639ad2cc8cc8056714c3e0bef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        image2: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb8%2Fa5%2Fb8a5c2a8cb2213e04047a5115841b6f8a33bf6de.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_accessories_bags_shouldercrossbags%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
               name: 'Camiseta Azul',
        imgProfile: 'https://images.unsplash.com/photo-1544450804-9e5f64cb18de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nameProfile: 'Supah Bass', 
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis, eget non mauris scelerisque convallis libero augue. Nisl faucibus curae habitant eros vehicula posuere ullamcorper litora massa, varius cubilia.',
        price: 42.99
    },

]

function Detail() {
    const { id } = useParams()

    const selectedProduct = PRODUCTOS.find((product) => product.id === Number(id));

    if (!selectedProduct) {

        return <div>Producto no encontrado!</div>;
    }

    return (
        <section className='grid grid-cols-2 mt-[74px] gap-[91px] 2xl:gap-0 '>
            <div key={selectedProduct.id} className='flex flex-row w-[610px] h-[461px] gap-3 '>
                <img src={selectedProduct.image1} alt={selectedProduct.name} className=' rounded-[10px] object-cover h-[452px] w-[304px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]' />
                <img src={selectedProduct.image2} alt={selectedProduct.name} className='rounded-[10px] object-cover h-[452px] w-[304px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]' />
            </div>
            <div className=' '>
                <h2 className='text-3tl text-general mb-4 2xl:mb-8'>{selectedProduct.name}</h2>
                <div className='flex flex-row items-center gap-7 mb-6 2xl:mb-8'>
                    <img src={selectedProduct.imgProfile} alt={selectedProduct.nameProfile} className=' size-[71px] rounded-full' />
                    <p className='text-xl font-bold text-specific'>{selectedProduct.nameProfile}</p>
                </div>
                <p className='text-general text-xl mb-2 2xl:mb-4'>{selectedProduct.description}</p>
                <p className='text-specific text-2xl font-bold'>$ {selectedProduct.price}</p>
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
                    <button className='h-[44px] w-[260px] rounded-[5px] border-2 border-primary text-specific items-center flex justify-center gap-[10px]'>Agregar al carrito <FaShoppingCart/></button>
                </div>
            </div>
        </section> 
    )
}

export default Detail