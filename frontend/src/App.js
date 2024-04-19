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
import AboutUs from './pages/aboutUs';
import Cart from './pages/cart';
import Search from './pages/search';
import Categories from './pages/Categories'
import Dashboard from './pages/dashboard';
import Discount from './pages/discount';
import NewProduct from './pages/newProduct';
import EditProduct from './components/Products/EditProduct';

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
				

			</Routes>
		</>
	);
}

export default App;
