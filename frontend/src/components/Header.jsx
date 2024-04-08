import React from "react";

function Header() {
  return (
    <header className="bg-cover bg-center bg-[#E98C00] py-2 " style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex items-start">
          <div className=" mr-12">
            <img src='/logo.jpg' alt="Logo" className="h-25" />
          </div>
          <div className="flex-grow">
            <h1 className="text-2xl font-inter text-white mb-8">
              El espacio ideal para artistas que quieran comercializar sus productos de manera fácil y eficaz.
            </h1><br></br>
            <div className="flex justify-center items-center max-w-3xl mx-auto bg-white  overflow-hidden">
              <input
                type="text"
                className="flex-1 px-4 py-2"
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


