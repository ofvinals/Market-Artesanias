import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/Slices/categoriesSlice'; // Asegúrate de que la ruta sea correcta

const categorias = [
    'Vestimenta',
    'Cerámica',
    'Muebles',
    'Cuadros',
    'Accesorios'
];

function Filter({ onCategoryChange }) {
    const dispatch = useDispatch();
    const categoriaSeleccionada = useSelector((state) => state.categoria.categoriaSeleccionada);
    


    const handleClick = (categoria) => {
        dispatch(setCategory(categoria));
        onCategoryChange(categoria)
    };


    return (
        <div>
            <nav className="flex flex-row justify-center items-center mt-[45px] ">
                <ul className="flex justify-center items-center border-2 border-primary w-[639px] h-[44px] rounded-[5px] ">
                    {categorias.map(categoria => (
                        <li key={categoria}
                            className='justify-center flex border-r-[0.5px] border-primary w-[128px]'
                            onClick={() => handleClick(categoria)}>
                            <button className='   text-specific hover:text-[#0739EB] hover:scale-110 '>
                                {categoria}
                            </button></li>
                    ))}
                </ul>
            </nav>

            <h1 className="text-general text-3xl mx-[104px] mt-8">{categoriaSeleccionada}</h1>
        </div>
    );
}

export default Filter;