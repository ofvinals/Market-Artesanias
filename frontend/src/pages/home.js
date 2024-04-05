import React from 'react';
import Categorias from '../components/Categorias';
import Descuentos from '../components/Descuentos';
import NavBar from '../components/Navbar';
import Header from '../components/Header';



function HomePage() {
    return (
        <>
            <NavBar />
            <Header />
            <div className='px-4 md:px-24'>
                <Categorias />
                <Descuentos />
            </div>
        </>
    );
}

export default HomePage;