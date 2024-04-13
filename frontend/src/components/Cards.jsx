import ItemCard from './ItemCard'

function Cards({ productos }) {
    return (
        <div className='flex flex-wrap justify-between gap-x-5 gap-y-8'>
            {
                productos.map(({ id, category, name, image1, description, price }) => {
                    return (
                        <ItemCard
                            key={id}
                            id={id}
                            category={category}
                            name={name}
                            image={image1}
                            description={description}
                            price={price}
                        />
                    )
                })
            }
        </div>
    )
}

export default Cards