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
        <section className="mx-5 md:mx-[104px] mt-8">
          {filteredProducts.length === 0 ? (
            <div className='flex flex-col items-center justify-center w-full mt-20'>
              <h2 className='text-general text-lg font-semibold mb-2'>No hay productos en esta categoría</h2>
              <img
                src='/blue magnifying glass with resume sheet.svg'
                alt='Imagen Buscar'
              />
            </div>
          ) : (
            <Cards allProducts={filteredProducts} />
          )}
        </section>
      </div>
    </>
  )
}

export default Categories