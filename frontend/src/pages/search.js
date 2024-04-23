import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Itemcard from '../components/ItemCard';
import { searchItemsInDatabase } from '../hooks/useSearch.js';

function Search() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const loadSearchResults = async () => {
			const results = await searchItemsInDatabase(searchTerm);
			setSearchResults(results);
		};

		if (searchTerm !== '') {
			loadSearchResults();
		} else {
			setSearchResults([]);
		}
	}, [searchTerm]);

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<main>
			<NavBar />
			<header className='bg-cover bg-center bg-[#E98C00] py-2 '>
				<div className='flex justify-center items-center max-w-3xl mx-auto bg-white w-9/12 overflow-hidden rounded-lg'>
					<input
						type='text'
						className='flex-1 px-4 py-2'
						placeholder='Buscar producto, tienda, categoria...'
						value={searchTerm}
						onChange={handleSearchChange}
					/>
					<i className='fas fa-search text-gray-700 p-2 cursor-pointer'></i>
				</div>
			</header>
			<Itemcard items={searchResults} />
		</main>
	);
}

export default Search;
