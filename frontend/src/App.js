// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Store from './pages/store';
import CreateStore from './pages/createStore';
import Detail from './pages/detail';
import MyStore from './pages/myStore';
import Profile from './pages/profile';
import AboutUs from './pages/AboutUs';
import Cart from './pages/cart';
import Search from './pages/search';
import Categories from './pages/categories';
import Dashboard from './pages/dashboard';
import Discount from './pages/discount';
import NewProduct from './pages/newProduct';
import EditProduct from './pages/editProduct';
import Welcome from './pages/welcome';
import CheckUser from './pages/checkUser';
import PublishedProduct from './pages/publishedProduct';
import DeletedProduct from './pages/deletedProduct';
import Tarjeta from './pages/Tarjeta';
import PayPal from './pages/PayPal'
function App() {
	return (
		<>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/' element={<Homepage />} />
				<Route path='/store' element={<Store />} />
				<Route path='/mi-tienda' element={<MyStore />} />
				<Route path='/:id' element={<Detail />} />
				<Route path='/discount/:id' element={<Discount />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/aboutUs' element={<AboutUs />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/search' element={<Search />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/createStore' element={<CreateStore />} />
				<Route path='/newProduct' element={<NewProduct />} />
				<Route path='/editproduct/:id' element={<EditProduct />} />
				<Route path='/welcome' element={<Welcome />} />
				<Route path='/checkuser' element={<CheckUser />} />
				<Route path='/publishedproduct' element={<PublishedProduct />} />
				<Route path='/deletedproduct' element={<DeletedProduct />} />
				<Route path='/tarjeta' element={<Tarjeta />} />
				<Route path='/paypal' element={<PayPal />} />

			</Routes>
		</>
	);
}

export default App;
