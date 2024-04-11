
import NavBar from '../components/Navbar'
import Detail from '../components/Detail/Detail'
import OthersProducts from '../components/Detail/OthersProducts'


function detail() {


  return (
    <>
      <NavBar />
      <div className='px-[106px]'>
      <Detail />
      <OthersProducts />
      </div>
    </>
  )
}

export default detail