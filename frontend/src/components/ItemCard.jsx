import React from "react";
import { Link } from "react-router-dom";



function ItemCard({ id, category, name, image, price, description }) {
    return (
        <article className="flex flex-col border w-[296px] h-[261px] rounded-[10px] shadow-[0_4px_3px_0_rgba(0,0,0,0.25)] hover:scale-110 hover:transition-all">
            <Link to={`/store/${id}`}>
                <div>
                    <img src={image} alt={name} className="w-[296px] h-[157px] object-cover rounded-t-[10px]" />
                </div>
                <div className="pl-5 pt-3 pb-3 bg-[#D9D9D94A]">
                    <h2 className='text-xl font-bold text-general '>{name}</h2>
                    <p className="text-general">{description}</p>
                    <p className="text-specific text-xl font-bold">$ {price}</p>
                </div>
            </Link>
        </article>
    )
}

export default ItemCard;