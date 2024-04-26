import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../../redux/Slices/categoriesSlice';

const categorias = ['Vestimenta', 'Cerámica', 'Muebles', 'Cuadros', 'Accesorios'];

function Filter({ onCategoryChange }) {
    const dispatch = useDispatch();
    const categoriaSeleccionada = useSelector((state) => state.categoria.categoriaSeleccionada);

    const handleClick = (categoria) => {
        dispatch(setCategory(categoria));
        onCategoryChange(categoria);
    };

    return (
        <div className='mx-4 md:mx-0'>
            <nav className="flex flex-row justify-center items-center mt-[45px]">
                <ul className="flex justify-center items-center border-2 border-specific md:w-[639px] h-[44px] rounded-[5px]">
                    {categorias.map((categoria, index) => (
                        <li key={categoria} className={`flex justify-center ${index !== categorias.length - 1 ? 'border-r-[0.5px]' : ''} border-specific p-1 md:w-[128px]`} onClick={() => handleClick(categoria)}>
                            <button className='text-specific hover:text-[#0739EB] md:hover:scale-110 text-sm md:text-base'>
                                {categoria}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <h1 className="text-general text-3xl md:mx-[104px] mt-8">{categoriaSeleccionada}</h1>
        </div>
    );
}

export default Filter;
