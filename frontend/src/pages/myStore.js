import React from 'react';
import NavBar from '../components/Navbar';
import { Detail } from '../components/MyStore/Detail';
import { Products } from '../components/MyStore/Products';
import { List } from '../components/MyStore/List';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MyStore() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const navigate = useNavigate();

	if (!isLoggedIn) {
		navigate('/login');
	}

	return (
		<>
			<NavBar />
			<Detail />
			<Products />
			<List />
		</>
	);
}

export default MyStore;
