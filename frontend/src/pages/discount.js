
import NavBar from '../components/NavBar'
import Detail from '../components/Discount/Detail'
import Counter from '../components/Discount/Counter'


function discount() {


  return (
    <>
      <NavBar />
      <div className='px-[106px]'>
      <Counter />
      <Detail />
      </div>
    </>
  )
}

export default discount;