import { IMG_CDN_URL } from "../Config";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, locality, avgRating, cloudinaryImageId } =
    restaurant.info;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/restaurant/${name.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div
      className="rounded-lg w-72 mx-auto cursor-pointer hover:shadow-lg"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="h-48 w-full overflow-hidden rounded-t-lg">
        <img
          alt={name}
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Info Container */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-extrabold text-gray-900 mb-2">{name}</h2>
        <h3 className="text-sm text-gray-700 font-semibold mb-1">{locality}</h3>
        <h3 className="text-sm text-gray-600 font-medium mb-3">
          {cuisines.join(", ")}
        </h3>
        <h4 className="flex items-center justify-center gap-1 text-yellow-500 font-semibold">
          {Array.from({ length: Math.round(avgRating) }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-900 text-sm font-bold ml-1">
            {avgRating} Stars
          </span>
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
