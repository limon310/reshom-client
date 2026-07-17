import React, { } from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  const { id } = product;
  
  return (
    <div className="group border border-gray-100 p-2 hover:shadow-lg transition-all duration-500 bg-white cursor-pointer">
      {/* Image Container */}
      <Link to={`/product-details/${id}`}>
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="mt-4 px-2 pb-2">
          <h3 className="text-gray-800 font-medium truncate">{product.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{product.material}</p>

          <div className="flex items-center justify-between mt-3">
            <span className="text-gray-900 font-bold">৳{product.discountPrice}</span>
            <span className="text-gray-400 line-through text-sm">৳{product.price}</span>
          </div>
          <button className="w-full mt-4 border border-black py-2 text-sm uppercase hover:bg-black hover:text-white transition-all cursor-pointer">
            View Details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;