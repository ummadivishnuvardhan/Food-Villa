import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/food_villa.jpg";
import { FaSignOutAlt } from "react-icons/fa"; // Import logout icon from react-icons

const Title = () => {
  return (
    <Link to="/">
      <img className="h-20 w-auto rounded-full shadow-lg" alt="logo" src={Logo} />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  // Check if the user is logged in by looking for the stored user in local storage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
      setUserEmail(storedUser.email);
    }
  }, []);

  // Handle the logout process
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserEmail("");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="bg-gray-100 shadow-md py-4 px-8 flex items-center justify-between">
      <Title />
      <div className="nav-items">
        <ul className="flex space-x-6 text-lg font-medium text-gray-700">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
          <li><Link to="/cart" className="hover:text-blue-500">Cart</Link></li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <span className="text-lg text-gray-700">{userEmail}</span>
            <button
              onClick={handleLogout}
              className="text-2xl text-gray-700 hover:text-blue-500 cursor-pointer"
            >
              <FaSignOutAlt /> {/* Logout icon */}
            </button>
          </>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-md">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow-md">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
