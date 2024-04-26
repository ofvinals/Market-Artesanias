
import NavBar from '../components/NavBar'
import Detail from '../components/Discount/Detail'
import Counter from '../components/Discount/Counter'


function discount() {


  return (
    <>
      <NavBar />
      <div className='md:px-[106px]'>
        <Counter />
        <div className='mx-4 md:mx-0'>
          <Detail />
        </div>
      </div>
    </>
  )
}

export default discount;