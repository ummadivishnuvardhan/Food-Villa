import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-r min-h-screen flex flex-col items-center p-8">
        <div className="bg-white shadow-xl rounded-xl max-w-4xl w-full p-10">
          <h1 className="text-5xl font-bold text-blue-800 mb-8 text-center">About Us</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to Food Villa! We are passionate about providing the best dining experience through our carefully curated menu and exceptional service. Whether you're here for a quick bite or a fine dining experience, we aim to offer a variety of delicious dishes made from the freshest ingredients.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our team at Food Villa consists of culinary experts and dedicated staff who are committed to creating memorable experiences for every guest. From classic favorites to innovative new flavors, our menu is designed to satisfy every palate.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Food Villa, we believe in the power of food to bring people together. Join us in our journey as we continue to grow and evolve, always putting our customers at the heart of everything we do.
          </p>
          <div className="mt-8 flex justify-center">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
