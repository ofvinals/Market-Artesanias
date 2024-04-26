import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Cart/Card'

function cart() {
  return (
    <>
      <NavBar />
      <div className='px-4 md:mx-24 2xl:mx-48 mb-2'>
        <Card />
      </div>
    </>
  )
}

export default cart