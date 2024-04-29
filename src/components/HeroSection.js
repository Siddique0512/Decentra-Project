import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          {/* Text content */}
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink to="/">
              <Button>Shop now</Button>
            </NavLink>
          </div>
          
          {/* Image */}
          <div className="hero-section-image">
            <img
              src="images/hero.jpg"
              alt="hero-section-photo"
              className="img-style"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;

  .grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
  }

  .hero-section-data {
    width: 45%;
    max-width: 600px;
    margin-right: 2rem;
  }

  .hero-section-image {
    width: 45%;
    max-width: 600px;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    .grid {
      flex-direction: column;
    }

    .hero-section-data,
    .hero-section-image {
      width: 100%;
      margin-right: 0;
    }

    .hero-section-data {
      margin-bottom: 2rem;
    }
  }
`;

export default HeroSection;
