import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";


function AboutUsCard({ id, name, role, image, description, linkedin, email }) {
    return (
        <article className='flex flex-row md:w-[608px] md:h-[224px] border-2 border-specific rounded-[10px] p-6 gap-6'>

            <img src={image} alt={name} className='flex justify-center items-center w-[141px] h-[178px] rounded-[10px] object-cover shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]' />
            <div>
                <div className='flex flex-row justify-between'>
                    <h3 className='font-bold text-2xl text-specific'>{name}</h3>
                    <div className='flex flex-row items-center gap-7'>

                        <a href={linkedin} target='_blank'>
                            <FaLinkedin className='text-specific size-6 hover:text-[#0739EB] hover:scale-110' />
                        </a>
                        <a href={`mailto:${email}`}>
                            <HiMail className='text-specific size-9 hover:text-[#0739EB] hover:scale-110' />
                        </a>
                    </div>
                </div>
                <p className=' text-xl text-general'>{role}</p>
                <p className='text-general text-sm text-balance'>{description}</p>
            </div>
        </article>
    )
}

export default AboutUsCard