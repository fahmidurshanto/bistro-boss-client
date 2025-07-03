import React from 'react';

const FoodCard = ({ item }) => {
    // Destructure the item object for easier access
    const { name, image, price, recipe } = item;

    return (
        <div className="card bg-base-100 shadow-xl relative">
            <figure>
                <img src={image} alt={name} className="w-full h-64 object-cover" />
            </figure>
            {/* Price badge absolutely positioned in the top-right corner */}
            <p className="absolute top-4 right-4 bg-slate-900 text-white py-1 px-3 rounded-md">${price}</p>
            
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    {/* A modern button style with a bottom border accent */}
                    <button 
                        className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-orange-400 hover:bg-slate-800 hover:text-white hover:border-orange-400"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;