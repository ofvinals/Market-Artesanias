import React from 'react'
import NavBar from '../components/NavBar'
import Card from '../components/Cart/Card'
import Payment from '../components/Cart/Payment'

function cart() {
  return (
    <>
      <NavBar />
      <div className='px-4 md:px-24'>
        <Card />
        <Payment />
      </div>
    </>
  )
}

export default cart