
import NavBar from '../components/NavBar'
import Detail from '../components/Detail/Detail'
import OthersProducts from '../components/Detail/OthersProducts'


function detail() {


  return (
    <>
      <NavBar />
      <div className='px-4 mb-4 md:mx-24 md:mb-10'>
        <Detail />
        <OthersProducts />
      </div>
    </>
  )
}

export default detail;