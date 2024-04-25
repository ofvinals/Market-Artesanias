import React from 'react'
import NavBar from '../components/NavBar'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function PayPal() {
    const navigate = useNavigate()

    const handleSubmit = () => {
        Swal.fire({
            title: "Excelente!",
            text: "Compra realizada",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
        })
        navigate('/');
    }

    return (
        <>
            <NavBar />
            <div className='flex flex-row mx-[104px] md:gap-[109px] 2xl:justify-evenly mt-5 items-center'>
                <div className='flex flex-col'>
                    <h1 className='text-tlv text-general '>Ingresar datos de Paypal</h1>
                    <form className='flex flex-col mt-9' id='tarjeta' onSubmit={handleSubmit}>
                        <label className='text-xl text-general mb-3'>
                            Número de tarjeta
                        </label>
                        <input className='w-[504px] h-16  text-xl border-2 border-specific mb-7 rounded-xl p-2 ' type='text' />
                        <label className='text-xl text-general mb-3'>
                            Fecha de expiración
                        </label>
                        <input className='w-[504px] h-16  text-xl border-2 border-specific mb-7 rounded-xl p-2 ' type='text' />
                        <label className='text-xl text-general mb-3'>
                            CVV No.
                        </label>
                        <input className='w-[504px] h-16  text-xl border-2 border-specific mb-7 rounded-xl p-2 ' type='text' />
                        <button className='h-16 w-[504px] bg-primary rounded-[10px] hover:bg-[#0739EB] font-bold text-xl text-white' type='submit' >
                            Comprar
                        </button>
                    </form>
                </div>
                <div className='mt-[150px]'>
                    <img src='./payment.svg' alt='payment' />
                </div>
            </div>
        </>
    )
}

export default PayPal