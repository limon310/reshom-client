import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.discountPrice * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="title text-center py-20 text-2xl">Your cart is empty!
    <div>
      <Link to="/collection" className="mt-4 text-xl text-blue-600 inline-block underline font-medium">Continue Shopping</Link>
    </div>
    </div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif mb-8">Shopping Cart</h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-6 border-b pb-6">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />

            <div className="flex-1">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-500">৳{item.discountPrice}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 border px-2 py-1">
              <button onClick={() => decreaseQuantity(item.id)} className="px-2 font-bold">-</button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)} className="px-2 font-bold">+</button>
            </div>

            <div className="text-lg font-bold w-24 text-right">
              ৳{item.discountPrice * item.quantity}
            </div>

            <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">Remove</button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-10 border-t pt-6 flex justify-end">
        <div className="w-full md:w-64">
          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total:</span>
            <span>৳{totalPrice}</span>
          </div>
          <button className="w-full bg-black text-white py-4 uppercase hover:bg-gray-800 transition-all">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;