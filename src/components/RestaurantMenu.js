import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import menuData from "../utils/restaurant_menu.json";
import { IMG_CDN_URL } from "../Config";
import { useCart } from "./CartContext"; // Access Cart context

const RestaurentMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // To navigate to Cart page

  const [restaurant, setRestaurant] = useState(null);
  const [selectedItems, setSelectedItems] = useState({}); // Keep track of selected items and their counts
  const { addToCart } = useCart(); // Access addToCart function

  useEffect(() => {
    const fetchedRestaurant = menuData.find((rest) => {
      const normalizedName = rest.name.toLowerCase().replace(/\s+/g, "-");
      return normalizedName === id.toLowerCase();
    });

    setRestaurant(fetchedRestaurant || null);
  }, [id]);

  if (!restaurant) {
    return <Shimmer />;
  }

  const { name, cuisines, locality, avgRating, cloudinaryImageId, address, menu } = restaurant;

  // Handle item increment
  const incrementItem = (item) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [item]: (prevItems[item] || 0) + 1,
    }));
  };

  // Handle item decrement
  const decrementItem = (item) => {
    setSelectedItems((prevItems) => {
      if (prevItems[item] > 1) {
        return {
          ...prevItems,
          [item]: prevItems[item] - 1,
        };
      } else {
        const { [item]: _, ...rest } = prevItems;
        return rest;
      }
    });
  };

  // Handle "Add to Cart" button click
  const handleAddToCart = () => {
    Object.entries(selectedItems).forEach(([item, count]) => {
      for (let i = 0; i < count; i++) {
        addToCart(item); // Add each selected item to the cart
      }
    });
    navigate("/cart"); // Navigate to the Cart page
  };

  const totalItems = Object.values(selectedItems).reduce((sum, count) => sum + count, 0);

  return (
    <div className="mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">{name}</h1>
          <p className="text-lg text-gray-600 mb-1">{locality}</p>
          <p className="text-md text-gray-500 mb-4">{address}</p>
          <div className="flex justify-center items-center text-yellow-500">
            <span className="text-gray-800 font-semibold ml-2">{avgRating}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu && menu.length > 0 ? (
            menu.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white to-gray-100 border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition text-center"
              >
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{item}</h3>
                <div className="flex justify-center items-center mt-2">
                  <button
                    onClick={() => decrementItem(item)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 mx-2"
                  >
                    -
                  </button>
                  <span className="text-gray-700 font-semibold">
                    {selectedItems[item] || 0}
                  </span>
                  <button
                    onClick={() => incrementItem(item)}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mx-2"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No menu available</p>
          )}
        </div>

        {/* Add to Cart button */}
        <div className="text-center mt-6 font-bold">
        {totalItems } items  selected
        </div>
        
        <div className="text-center mt-6">
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
          >
            Add to Cart 
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurentMenu;
