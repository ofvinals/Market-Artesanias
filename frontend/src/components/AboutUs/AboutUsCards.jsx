import React from 'react'
import AboutUsCard from './AboutUsCard'

function AboutUsCards({ teamMembers }) {
    return (
        <div className='flex flex-wrap md:gap-[29px] 2xl:justify-evenly'>
            {
                teamMembers.map(({ id, name, role, image, description, linkedin, email }) => {
                    return (
                        <AboutUsCard
                            key={id}
                            name={name}
                            role={role}
                            image={image}
                            description={description}
                            linkedin={linkedin}
                            email={email}
                        />
                    )
                })
            }
        </div>
    )
}

export default AboutUsCards