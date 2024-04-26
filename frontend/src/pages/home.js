import React from 'react';
import Categorias from '../components/Categorias';
import Descuentos from '../components/Descuentos';
import NavBar from '../components/NavBar.jsx';
import Header from '../components/Header';
import Interes from '../components/Interes';
import Footer from '../components/Footer';


function HomePage() {
    return (
        <>
            <NavBar />
            <Header />
            <div className=' md:px-[70px]'>
                <Categorias />
                <Descuentos />
                <Interes />
            </div>
            <Footer />
        </>
    );
}

export default HomePage;