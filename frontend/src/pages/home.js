import React from 'react';
import Categorias from '../components/Categorias';
import Descuentos from '../components/Descuentos';
import Interes from '../components/Interes';



function HomePage() {
    return (
        <div className='px-4 md:px-24'>
            <Categorias />
            <Descuentos />
            <Interes/>
        </div>
    );
}

export default HomePage;