import ItemCard from './ItemCard'

function Cards({ allProducts }) {
    return (
        <div className='flex flex-wrap justify-between gap-x-5 gap-y-8'>
            {
                allProducts.map(({ Id, Nombre, Imagen, Precio, Descripcion, Category }) => {
                    return (
                        <ItemCard
                            key={Id}
                            id={Id}
                            category={Category}
                            name={Nombre}
                            image={Imagen}
                            description={Descripcion}
                            price={Precio}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards