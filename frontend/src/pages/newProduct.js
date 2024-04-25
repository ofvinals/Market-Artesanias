import React from 'react';
import '../css/Login.css';
import NewProduct from '../components/Products/NewProduct.jsx';
import NavBar from '../components/NavBar.jsx';


function newProduct  () {
	

	return (
		<>
			<NavBar />
			<NewProduct/>
		</>
	);
};

export default newProduct;
