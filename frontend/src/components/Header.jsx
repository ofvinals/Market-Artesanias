import React from "react";

function Header() {
  return (
    <header className="bg-cover bg-center bg-indigo-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-8">Nombre la Empresa</h1>
          <p className="text-lg text-white mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero quis tellus convallis mattis.
          </p>
          <div className="flex justify-center items-center max-w-3xl mx-auto bg-white rounded-lg overflow-hidden">
            <input type="text" className="flex-1 px-4 py-2" placeholder="Buscar producto, tienda, categoria..." />
            <i className="fas fa-search text-gray-700 p-2 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


