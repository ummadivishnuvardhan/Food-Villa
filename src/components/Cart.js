import React from "react";
import { useCart } from "./CartContext";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Access cart and removeFromCart

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 mt-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">Your Cart</h2>

        {cart.length > 0 ? (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 rounded-lg shadow-md p-4 mb-4 hover:bg-gray-100 transition duration-200"
              >
                <div className="text-lg font-semibold text-gray-700">{item}</div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700 transition duration-200"
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty. Start adding items!</p>
        )}

        {cart.length > 0 && (
          <div className="mt-6 text-center">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
