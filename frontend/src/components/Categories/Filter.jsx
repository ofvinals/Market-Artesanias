import React from 'react'
import { Link } from 'react-router-dom'

function Filter() {
    

    return (
        <nav className='flex flex-row justify-center items-center mt-[45px] '>
            <ul className='flex justify-center items-center border-2 border-primary w-[639px] h-[44px] rounded-[5px] '>
                <li className=' border-r-[0.5px] border-primary w-[128px] justify-center flex text-specific'><Link>Vestimenta</Link> </li>
                <li className=' border-r-[0.5px] border-primary w-[128px] justify-center flex text-specific'><Link>Cerámica</Link> </li>
                <li className=' border-r-[0.5px] border-primary w-[128px] justify-center flex text-specific'><Link>Muebles</Link> </li>
                <li className=' border-r-[0.5px] border-primary w-[128px] justify-center flex text-specific'><Link>Pastelería</Link> </li>
                <li className=' w-[128px] justify-center flex text-specific'><Link>Accesorios</Link> </li>

            </ul>
        </nav>
    )
}

export default Filter