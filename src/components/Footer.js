import React from "react";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
    // Clear email input field
    e.target.elements.email.value = "";
  };
  return (

    <>
     <footer className="footer bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Left Section */}
            <div className="footer-left">
              <h3 className="text-2xl font-bold" style={{ color: "white" }}>
                Decentra
              </h3>
              <p className="mt-2">Your trusted decentralized marketplace.</p>
            </div>
            {/* Middle Section */}
            <div className="footer-middle">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: "white" }}
              >
                Subscribe to get important updates
              </h3>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="rounded-l-lg px-4 py-2 w-full" />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-black rounded-r-lg px-4 py-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
            {/* Right Section */}
            <div className="footer-right">
              <p>
                &copy; {new Date().getFullYear()} Decentra. All rights
                reserved.
              </p>
              <div className="flex mt-4">
                <a href="#" className="mr-4 text-gray-400 hover:text-white">
                  <FaDiscord className="w-6 h-6" />
                </a>
                <a href="#" className="mr-4 text-gray-400 hover:text-white">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="mr-4 text-gray-400 hover:text-white">
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </footer><div className="footer-bottom--section py-6 bg-gray-800 text-white">
          <div className="container mx-auto px-6 grid grid-two-column">
            <div>
              <p>
                <a href="#" className="text-gray-400 hover:text-white">
                  PRIVACY POLICY
                </a>
              </p>
              <p>
                <a href="#" className="text-gray-400 hover:text-white">
                  TERMS & CONDITIONS
                </a>
              </p>
            </div>
          </div>
        </div></>
  
  );
};

export default Footer;
