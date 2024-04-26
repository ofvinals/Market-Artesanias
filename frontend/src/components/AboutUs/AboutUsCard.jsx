import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";


function AboutUsCard({ id, name, role, image, description, linkedin, email }) {
    return (
        <article key={id} className='flex flex-col md:flex-row w-full md:h-[230px]  md:w-[608px]  border-2 border-specific rounded-[10px] md:p-6  gap-6'>

            <img src={image} alt={name} className='flex justify-center items-center w-full md:w-[141px] md:h-[178px] rounded-t-lg md:rounded-[10px] object-cover md:shadow-[0_4px_3px_0_rgba(0,0,0,0.25)]' />
            <div className='pl-3 pr-3'>
                <div className='flex flex-row justify-between  md:px-0'>
                    <h3 className='font-bold text-2xl text-specific'>{name}</h3>
                    <div className='flex flex-row items-center gap-7 '>

                        <a href={linkedin} target='_blank'rel="noreferrer">
                            <FaLinkedin className='text-specific size-6 hover:text-[#0739EB] hover:scale-110' />
                        </a>
                        <a href={`mailto:${email}`}>
                            <HiMail className='text-specific size-9 hover:text-[#0739EB] hover:scale-110' />
                        </a>
                    </div>
                </div>
                <p className='text-xl font-normal text-general md:px-0 mb-2'>{role}</p>
                <p className='text-general text-xs md:text-sm text-balance mb-3 md:mb-0 '>{description}</p>
            </div>
        </article>
    )
}

export default AboutUsCard