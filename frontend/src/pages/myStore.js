import React from 'react';
import NavBar from '../components/Navbar';
import { Detail } from '../components/MyStore/Detail';
import { Products } from '../components/MyStore/Products';
import { List } from '../components/MyStore/List';

function myStore() {

	return (
		<>
			<NavBar />
			<Detail />
			<Products />
			<List/>
		</>
	);
}

export default myStore;
