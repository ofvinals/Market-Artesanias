import React from 'react';
import NavBar from '../components/NavBar.jsx';
import CreateStore from '../components/MyStore/CreateStore.jsx';

function createStore() {
	return (
		<>
			<NavBar />
			<CreateStore />
		</>
	);
}
export default createStore;
