import React from "react";
import { NavLink } from "react-router-dom";
import "../SliderStyles.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import styled from "styled-components";
import Slider from "react-slick";
import { FaGlobe, FaUsers, FaRocket, FaBriefcase } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const About = () => {

  const Wrapper1 = styled.section`
    padding: 3rem 0;
    // background-color: #f8f9fa;

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
        margin-left: 2rem;
      }

      h1.brand-name {
        text-transform: capitalize;
        font-weight: bold;
        font-size: 3rem;
        color: #232f3e;
        margin-bottom: 2rem;
        margin-left: 2rem;
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

  const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem; /* Add margin from bottom */
`;

const CardIcon = styled.div`
  font-size: 3rem;
  color: #232f3e; /* Change icon color */
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
`;

const Button = styled(NavLink)`
  display: inline-block;
  padding: 0.5rem 0.5rem;
  background-color: #232f3e;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: orange;
    color: black;
  }
`;
const Wrapper = styled.section`
  padding: 3rem 0;
  background-color: #f8f9fa;
  margin-bottom: 3rem;
`;
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, // Remove arrow buttons
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Set autoplay speed to 3 seconds
};

const CustomSlider = styled(Slider)`
  width: 75%; /* Set the width to 75% of the screen */
  margin: 0 auto;
`;

  const ock = (e) => {
    e.preventDefault();
    toast.info("No Job Openings Right now", { autoClose: 2000 });
    e.target.elements.email.value = '';
  };
  
  const sectionStyle = {
    paddingTop: '3rem',
    paddingBottom: '1rem',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: "0rem",
  };

  const rowStyle = {
    display: 'flex',
    gap: '1rem',
    margin: '1rem',
  };

  const colStyle = {
    flex: '1',
    maxWidth: '50%',
  };

  const imageStyle = {
    maxWidth: '100%',
    borderRadius: '0.5rem',
  };

  const textStyle = {
    fontFamily: 'Open Sans, sans-serif',
    color: '#6c757d',
  };

  return (
    <>
      <Navbar />
      <Wrapper1>
        <div className="container">
          <div className="grid grid-two-column">
          <div className="hero-section-data" style={{ paddingRight: '20px' }}>
      <h1 className="brand-name">About Us</h1>
      <p style={{ textAlign: "justify" }}>
        Welcome to Decentra, your gateway to the future of
        ecommerce. At Decentra, we are more than just a platform;
        we are a revolution. Our mission is to empower individuals and
        businesses alike, offering a cutting-edge Web 3 experience that
        transcends traditional boundaries. Our ethos is built on
        innovation, trust, and accessibility.
      </p>
      <p style={{ textAlign: "justify" }}>
        Our ethos is built on innovation, trust, and accessibility. We
        believe in harnessing the power of Web 3 technologies to create
        a decentralized marketplace where creativity thrives,
        opportunities abound, and communities flourish. Whether you're a
        visionary entrepreneur, a passionate creator, or a savvy
        shopper, Decentra is your partner in shaping a new era of
        digital commerce.
      </p>
      <NavLink to="/product">{/* <Button>Shop Now</Button> */}</NavLink>
    </div>
            {/* Image */}
            <div className="hero-section-image">
              <figure>
                <img
                  src="images/abt.jpg"
                  alt="hero-section-photo"
                  className="img-style"
                />
              </figure>
            </div>
          </div>
        </div>
      </Wrapper1>
      <Wrapper>
      <Content>
        <CustomSlider {...sliderSettings}>
          <CardContainer>
            <Card>
              <CardIcon>
                <FaGlobe />
              </CardIcon>
              <CardTitle>Our Mission</CardTitle>
              <CardText>
                At Decentra, we're on a mission to revolutionize the digital marketplace by providing innovative solutions that empower individuals and businesses.
              </CardText>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <CardIcon>
                <FaUsers />
              </CardIcon>
              <CardTitle>Our Values</CardTitle>
              <CardText>
                We believe in transparency, integrity, and customer-centricity. Our values drive everything we do, ensuring a positive and meaningful experience for our users.
              </CardText>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <CardIcon>
                <FaRocket />
              </CardIcon>
              <CardTitle>Our Team</CardTitle>
              <CardText>
                We have a dedicated team of experts who are passionate about delivering exceptional services and building strong relationships with our clients and partners.
              </CardText>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card>
              <CardIcon>
                <FaBriefcase />
              </CardIcon>
              <CardTitle>Join Us</CardTitle>
              <CardText>
                Ready to be part of something big? Explore career opportunities and join us.
              </CardText>
              <Button onClick={ock}>View Careers</Button>
            </Card>
          </CardContainer>
        </CustomSlider>
      </Content>
    </Wrapper>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default About;
