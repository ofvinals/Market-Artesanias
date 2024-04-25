import React from "react";

function Header() {
  return (
    <header className="bg-cover bg-center bg-[#E98C00] py-2 " style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-start">
          <div className="ml-0 mt-0 mr-20 hidden md:flex">
            <img src='/Logo.jpg' alt="Logo" className="h-23" />
          </div>
          <div className="flex-grow ml-6">
            <h1 className="text-3xl font-thin text-white mb-8 w-full text-center">
            El espacio ideal para comprar y vender productos únicos de manera facil y eficaz.
            </h1><br></br>
            <div className="flex justify-center items-center mx-auto bg-white  overflow-hidden rounded-lg mb-5 -mt-5">
              <input
                type="text"
                className="flex-1 px-4 py-4 hover:outline-none w-full"
                placeholder="Buscar producto, tienda, categoria..."
              />
              <i className="fas fa-search text-gray-700 p-2 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


