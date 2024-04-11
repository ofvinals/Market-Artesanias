import React from 'react';
import NavBar from '../components/NavBar';
import Itemcard from '../components/ItemCard';

function search() {
  return (
    <main>
      <NavBar />
      <header className="bg-cover bg-center bg-[#E98C00] py-2 ">
        <div className="flex justify-center items-center max-w-3xl mx-auto bg-white  overflow-hidden rounded-lg">
          <input
            type="text"
            className="flex-1 px-4 py-2"
            placeholder="Buscar producto, tienda, categoria..."
            
          />
          <i className="fas fa-search text-gray-700 p-2 cursor-pointer"></i>
        </div>
      </header>
      <Itemcard />
    </main>
  )
}

export default search