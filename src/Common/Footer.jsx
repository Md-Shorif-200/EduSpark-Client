// components/Footer.jsx
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaBookOpen,
  FaChalkboardTeacher,
  FaLifeRing
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#F4B400]">EduSpark</h2>
          <p className="mt-4 text-sm text-gray-300">
            Empowering learners with quality online education. Learn anywhere, anytime.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2 hover:text-[#F4B400] cursor-pointer">
              <FaInfoCircle /> About Us
            </li>
            <li className="flex items-center gap-2 hover:text-[#F4B400] cursor-pointer">
              <FaBookOpen /> Courses
            </li>
            <li className="flex items-center gap-2 hover:text-[#F4B400] cursor-pointer">
              <FaChalkboardTeacher /> Instructors
            </li>
            <li className="flex items-center gap-2 hover:text-[#F4B400] cursor-pointer">
              <FaLifeRing /> Support
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#F4B400]" /> support@ecademix.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#F4B400]" /> +123 456 7890
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#F4B400]" /> Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-white text-xl">
            <a
              href="#"
              className="hover:text-[#F4B400] transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-[#F4B400] transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-[#F4B400] transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} ECADEMIX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
