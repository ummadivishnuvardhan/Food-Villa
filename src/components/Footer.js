import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ummadi-vishnuvardhan-a50b88221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="mailto:ummadivishnuvardhan@gmail.com"
            className="text-white hover:text-red-500 transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Food Villa. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
