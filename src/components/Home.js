import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./SliderStyles.css";
import Footer from "./Footer";
import Services from "./Services";
import Navbar from "./Navbar";

const Home = (props) => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return <FaArrowLeft className="slick-arrow prev-arrow" onClick={onClick} />;
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <FaArrowRight className="slick-arrow next-arrow" onClick={onClick} />
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Function to handle successful login
  const handleLogin = (username) => {
    // Perform login logic, set isLoggedIn to true and set user name
    setIsLoggedIn(true);
    setUserName(username);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout logic, set isLoggedIn to false and clear user name
    setIsLoggedIn(false);
    setUserName("");
  };

  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleSignUp = () => {
    setShowRegistrationForm(true);
  };

  const handleCloseRegistrationForm = () => {
    setShowRegistrationForm(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed successfully!");
    // Clear email input field
    e.target.elements.email.value = "";

    const domain = "dev-7lit3cfm1ihepaza.us.auth0.com";
    const clientId = "ykn5UWUEKCisJpHcI7EwJwOvuapeCXrS";
  };

  const [userAddress, setUserAddress] = useState(null);
  const [account, setAccount] = useState(null);

  const connectToMetaMask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0]; // User's Ethereum address
      setUserAddress(address);
    } catch (error) {
      console.error("MetaMask authentication error:", error);
    }
  };

  const Wrapper = styled.section`
    padding: 9rem 0;
    background-color: #yourBackgroundColor;

    .brand-section {
      padding: 12rem 0 0 0;
    }

    h3 {
      text-align: center;
      text-transform: capitalize;
      color: #yourTextColor;
      font-size: 2rem;
      font-weight: bold;
    }

    .brand-section-slider {
      margin-top: 3.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }

    @media (max-width: 768px) {
      .brand-section-slider {
        margin-top: 3.2rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
      }
    }

    .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .hero-section-data {
      flex: 1;
      margin-right: 2rem;

      p {
        margin: 2rem 0;
      }

      h1.brand-name {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 3rem;
        color: #232f3e;
        margin-bottom: 1rem;
      }

      .intro-data {
        margin-bottom: 0;
      }

      @media (max-width: 768px) {
        margin-right: 0;
      }
    }

    .hero-section-image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
      }

      figure {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;

        ::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }
      }
    }

    @media (max-width: 768px) {
      .grid {
        flex-direction: column;
      }
    }

    h3.text-2xl.font-bold {
      color: white;
    }
  `;

  return (
    <>
      {/* <Navbar userAddress={userAddress} connectToMetaMask={connectToMetaMask} /> */}
      <>
      <Navbar/>
        <div className="slider-container">
          <Slider {...sliderSettings}>
            <div>
              <img src="images/image1.jpg" alt="Slide 1" />
            </div>
            <div>
              <img src="images/image2.jpg" alt="Slide 2" />
            </div>
            <div>
              <img src="images/image3.jpg" alt="Slide 3" />
            </div>
          </Slider>
        </div>
        <div className="container mx-auto px-4 py-8">
          {/* <h1 className="text-3xl font-bold mb-8">Welcome to Decentral Cart</h1> */}

          <Wrapper>
            <div className="container">
              <div className="grid grid-two-column">
                {/* Text content */}
                <div className="hero-section-data">
                  <p className="intro-data">Welcome to</p>
                  <h1 className="brand-name">Decentra</h1>
                  <p>
                    Decentra represents the future of e-commerce, where
                    decentralization, transparency, and user empowerment are the
                    cornerstones of the shopping experience. By harnessing the
                    power of blockchain technology, Decentra is paving the
                    way for a more secure, efficient, and inclusive online
                    marketplace.
                  </p>
                  <NavLink to="/product">
                    <Button>Shop Now</Button>
                  </NavLink>
                </div>

                {/* Image */}
                <div className="hero-section-image">
                  <figure>
                    <img
                      src="images/hero (2).jpg"
                      alt="hero-section-photo"
                      className="img-style"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </Wrapper>

          <div className="our-product">
            <h2>Our Products</h2>
          </div>
          <div className="custom-slider-container">
            <Slider {...sliderSettings}>
              <div>
                <img src="images/watch.jpg" alt="Slide 1" />
              </div>
              <div>
                <img src="images/sunglasses.jpg" alt="Slide 2" />
              </div>
              <div>
                <img src="images/train.jpg" alt="Slide 3" />
              </div>
            </Slider>
          </div>
          {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
          <Services />
          <Wrapper className="brand-section">
            <div className="container">
              <h3>Trusted By 1000+ Companies</h3>
              <div className="brand-section-slider">
                {/* my 1st img  */}
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                    alt="trusted-brands"
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                    alt="trusted-brands"
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                    alt="trusted-brands"
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                    alt="trusted-brands"
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                    alt="trusted-brands"
                  />
                </div>
              </div>
            </div>
          </Wrapper>
          {/* Benefits */}
        </div>
        <Footer />
      </>
    </>
  );
};

export default Home;
