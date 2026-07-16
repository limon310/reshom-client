import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { useParams } from 'react-router';

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    fetch('/product.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left: Image */}
        <div className="bg-gray-50 p-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500" 
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-serif text-gray-900">{product.name}</h1>
          <div className="flex items-center gap-4 my-4">
            <span className="text-3xl font-semibold text-gray-800">৳{product.discountPrice}</span>
            <span className="text-xl text-gray-400 line-through">৳{product.price}</span>
            <span className="bg-black text-white px-3 py-1 text-xs uppercase tracking-widest">Save {Math.round(((product.price - product.discountPrice)/product.price)*100)}%</span>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

          {/* Color Selector */}
          <div className="mb-6">
            <h4 className="text-sm font-bold uppercase mb-3">Color</h4>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button key={color} onClick={() => setSelectedColor(color)} className={`px-4 py-2 border ${selectedColor === color ? 'border-black bg-black text-white' : 'border-gray-300'}`}>{color}</button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase mb-3">Size</h4>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button key={size} onClick={() => setSelectedSize(size)} className={`w-12 h-12 border ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300'}`}>{size}</button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-black text-white py-4 uppercase font-medium hover:bg-gray-800 transition-all">Add to Cart</button>
            <button className="px-8 border border-gray-300 hover:bg-gray-100 transition-all"><span><FaRegHeart size={24} /></span></button>
          </div>

          {/* Meta Info */}
          <div className="mt-8 border-t pt-6 text-sm text-gray-500">
            <p>Material: <span className="text-gray-900">{product.material}</span></p>
            <p>Category: <span className="text-gray-900">{product.category}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;