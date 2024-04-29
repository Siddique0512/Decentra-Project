import React from "react";
import Navbar from "../Navbar"; // Updated import statement

import ContactForm from "./ContactForm"; // Import the ContactForm component
import Footer from "../Footer";
// import Navbar from "./Navbar";
import styled from "styled-components";
const ContactCard = ({ icon, title, detail }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
          {icon}
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{detail}</p>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const Wrapper = styled.section`
  padding: 3rem 0;
  background-color: #f8f9fa;
  margin-bottom: 3rem;
`;
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
    // Clear email input field
    e.target.elements.email.value = "";
  };

  return (
    <>
     <Navbar/>
      <style>
        {`
          .contact-wrapper {
            padding: 3rem 0 5rem 0;
            text-align: center;
            margin-top: 1rem;
          }
          .contact-container {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
          }
          .contact-form-container {
            max-width: 50rem;
            margin: auto;
          }
          .contact-inputs {
            display: flex;
            flex-direction: column;
            gap: 3rem;
          }
          .contact-submit-button {
            cursor: pointer;
            transition: all 0.2s;
          }
          .contact-submit-button:hover {
            background-color: #ffffff;
            border: 1px solid #3b82f6;
            color: #3b82f6;
            transform: scale(0.9);
          }
          .iframe-container {
            margin-top: 1rem; /* Adjust the margin as needed */
          }
          .common-heading{
            margin-top: 1rem;
          }
        `}
      </style>
      <div className="contact-wrapper">
        <h2 className="common-heading">Reach Us</h2>
        <div className="iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7231.481025303046!2d72.57136242423799!3d23.02250573921516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848e54e07df1%3A0x95a4a0a71f934d7f!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-container">
          <div className="contact-form-container">
            {/* Integrate the ContactForm component here */}
           <Wrapper><ContactForm /></Wrapper>
            
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default ContactPage;
