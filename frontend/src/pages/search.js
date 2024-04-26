import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import SearchCard from '../components/SearchCard';
import { searchItemsInDatabase } from '../hooks/useSearch.js';

function Search() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const loadSearchResults = async () => {
			console.log(searchTerm)
			const results = await searchItemsInDatabase(searchTerm);
			setSearchResults(results);
			console.log(results)
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
						className='flex-1 px-2 py-2 hover:outline-none w-9/12'
						placeholder='Buscar producto, tienda, categoria...'
						value={searchTerm}
						onChange={handleSearchChange}
					/>
					<i className='fas fa-search text-gray-700 p-2 cursor-pointer'></i>
				</div>
			</header>
			<SearchCard items={searchResults} />
		</main>
	);
}

export default Search;
