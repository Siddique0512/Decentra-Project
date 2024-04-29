import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="wrapper" style={{ marginTop: "5rem" }}>
    <div className="container">
      <div className="grid grid-four-column">
        <div className="service">
          <TbTruckDelivery className="icon" />
          <h3>Super Fast and Free Delivery</h3>
        </div>

        <div className="service">
          <MdSecurity className="icon" />
          <h3>Non-contact Shipping</h3>
        </div>

        <div className="service">
          <GiReceiveMoney className="icon" />
          <h3>Money-back Guaranteed</h3>
        </div>

        <div className="service">
          <RiSecurePaymentLine className="icon" />
          <h3>Super Secure Payment System</h3>
        </div>
      </div>
    </div>

    <style>
      {`
.wrapper {
padding: 3rem 0;
background-color: #f9f9f9;
}

.container {
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
}

.grid {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

.service {
flex-basis: calc(25% - 20px);
margin-bottom: 20px;
padding: 1.5rem;
background-color: #ffffff;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.service:hover {
transform: translateY(-5px);
}

.icon {
font-size: 2.5rem;
color: #001f3f; /* Dark blue color */
margin-bottom: 1rem;
}

h3 {
margin: 0;
font-size: 1.4rem;
color: #333333;
}

.split-container {
display: flex;
gap: 2rem; /* Adjust the gap as needed */
}

.left-section,
.right-section {
flex: 1;
}

.left-section {
/* Styles for the left section */
}

.right-section {
/* Styles for the right section */
}

@media (max-width: 768px) {
.service {
  flex-basis: calc(50% - 20px);
}

.split-container {
  flex-direction: column;
  gap: 3rem; /* Adjust the gap for smaller screens */
}

.left-section,
.right-section {
  width: 100%;
}
}

@media (max-width: 480px) {
.service {
  flex-basis: calc(100% - 20px);
}
}
`}
    </style>
  </div>
  );
};

export default Services;
