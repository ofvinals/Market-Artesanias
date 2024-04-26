import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Tarjeta() {
    const navigate = useNavigate()
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [fechaExpiracion, setFechaExpiracion] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()

        if (numeroTarjeta.trim() === '' || fechaExpiracion.trim() === '' || cvv.trim() === '') {

            Swal.fire({
                title: 'Error',
                text: 'Por favor completa todos los campos',
                icon: 'error',
            })
        } else {
            Swal.fire({
                title: 'Excelente!',
                text: 'Compra realizada',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000,
            })
            navigate('/');
        }

    }

    return (
        <>
            <NavBar />
            <div className='flex flex-col md:flex-row px-5  md:mx-[104px] md:gap-[109px] 2xl:justify-evenly mt-5 items-center'>
                <div className='flex flex-col'>
                    <h1 className='text-xl  md:text-tlv text-general '>Ingresar datos de Paypal</h1>
                    <form className='flex flex-col mt-4 md:mt-9' id='tarjeta' onSubmit={handleSubmit}>
                        <label className=' text-sm md:text-xl text-general mb-2 md:mb-3'>
                            Número de tarjeta
                        </label>
                        <input className='w-[366px] md:w-[504px] h-12 md:h-16 text-sm md:text-xl border-2 border-specific mb-7 rounded-md md:rounded-[10px] p-2 ' type='text' value={numeroTarjeta} onChange={(event) => setNumeroTarjeta(event.target.value)} />
                        <label className=' text-sm md:text-xl text-general mb-2 md:mb-3'>
                            Fecha de expiración
                        </label>
                        <input className='w-[366px] md:w-[504px] h-12 md:h-16 text-sm md:text-xl border-2 border-specific mb-7 rounded-md md:rounded-[10px] p-2 ' type='text' value={fechaExpiracion} onChange={(event) => setFechaExpiracion(event.target.value)} />
                        <label className=' text-sm md:text-xl text-general mb-2 md:mb-3'>
                            CVV No.
                        </label>
                        <input className='w-[366px] md:w-[504px] h-12 md:h-16 text-sm md:text-xl border-2 border-specific mb-7 rounded-md md:rounded-[10px] p-2 ' type='text' value={cvv} onChange={(event) => setCvv(event.target.value)} />
                        <button className='h-12 md:h-16 w-[366px] md:w-[504px] bg-specific rounded-md md:rounded-[10px] hover:bg-[#0739EB] font-bold  text-sm md:text-xl text-white' type='submit' >
                            Comprar
                        </button>
                    </form>
                </div>
                <div className='mt-[150px] hidden md:flex'>
                    <img src='./payment.svg' alt='payment' />
                </div>
            </div>
        </>
    )
}

export default Tarjeta