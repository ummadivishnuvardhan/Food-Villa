import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { filterData } from "../utils/helper";
import { FETCH_MENU_URL } from "../Config";
import useOnline from "../utils/useOnline";
import { FaStar } from "react-icons/fa"; 
// Ensure the package is installed for star icons

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(FETCH_MENU_URL);
      const json = await data.json();
      const fetchedRestaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setAllRestaurants(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  }

  const online = useOnline();

  if (!online) {
    return (
      <h1 className="text-center text-xl font-semibold text-red-600 mt-4">
        Please Check your Internet Connection
      </h1>
    );
  }

  if (!restaurants) return null;

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* Search Bar */}
      <div className="search-container flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-orange-100 to-gray-100 shadow-lg rounded-lg">
        <input
          type="text"
          className="search-input w-full max-w-lg px-4 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn px-6 py-2 text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-orange-400"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      {/* Restaurant List */}
      <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 bg-gray-50">
        {filteredRestaurants.length === 0 ? (
          <h2 className="col-span-full text-center text-2xl font-semibold text-gray-500">
            No Restaurants Found
          </h2>
        ) : (
          filteredRestaurants.map((restaurant) => {
            const { cloudinaryImageId, name, avgRating } = restaurant.info;

            // Generate image URL
            const imageUrl =
             `https://res.cloudinary.com/demo/image/upload/${cloudinaryImageId}`

            return (
              <div
                key={restaurant.info.id}
                className="restaurant-card bg-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                

                <RestaurantCard restaurant={restaurant} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
