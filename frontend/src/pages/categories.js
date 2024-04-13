import Content from '../components/Categories/Content'
import Filter from '../components/Categories/Filter'
import NavBar from '../components/Navbar'
const PRODUCTOS = [
  {
      id: 1,
      category: 'Vestimenta',
      image1: 'https://i.pinimg.com/564x/7f/01/ac/7f01ac1cd63b2f2e1881531b3182634c.jpg',
      name: 'Vestido Floreado',
      description: 'Boho Chic Talle M, L, XL, XXL',
      price: 260.75
  },
  {
      id: 2,
      category: 'Cerámica',
      image1: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-2-600x720.jpg',
      name: 'Camiseta Azul',
      description: 'Lorem ipsum dolor',
      price: 42.99
  },
  {
      id: 3,
      category: 'Muebles',
      image1: 'https://i.pinimg.com/564x/7f/01/ac/7f01ac1cd63b2f2e1881531b3182634c.jpg',
      name: 'Vestido Floreado',
      description: 'Boho Chic Talle M, L, XL, XXL',
      price: 260.75
  },
  {
      id: 4,
      category: 'Pastelería',
      image1: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-2-600x720.jpg',
      name: 'Camiseta Azul',
      description: 'Lorem ipsum dolor',
      price: 42.99
  },
  {
      id: 5,
      category: 'Accesorios',
      image1: 'https://wranglerjeans.com.ar/wp-content/uploads/2023/04/10030WM003-2-600x720.jpg',
      name: 'Camiseta Azul',
      description: 'Lorem ipsum dolor',
      price: 42.99
  },

]
function categories() {
  return (
    <>
    <NavBar/>
    <div>
      <Filter/>
      <Content productos={PRODUCTOS}/>
    </div>
    </>
  )
}

export default categories