import { useEffect } from 'react'
import Cards from '../components/Cards'
import Filter from '../components/Categories/Filter'
import NavBar from '../components/NavBar'
import { getProducts, filterProductsByCategory } from '../redux/Slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/Slices/categoriesSlice'
function Categories() {
  const dispatch = useDispatch()
  const filteredProducts = useSelector((state) => state.products.filteredProducts)

  const categoriaSeleccionada = useSelector((state) => state.categoria.categoriaSeleccionada);


  useEffect(() => {
    dispatch(getProducts())
    if (categoriaSeleccionada) {
      dispatch(filterProductsByCategory(categoriaSeleccionada));
    }
  }, [categoriaSeleccionada, dispatch])

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <>
      <NavBar />
      <div>
        <Filter onCategoryChange={handleCategoryChange} />
        <section className="mx-[104px] mt-8">
          <Cards allProducts={filteredProducts} />
        </section>
      </div>
    </>
  )
}

export default Categories