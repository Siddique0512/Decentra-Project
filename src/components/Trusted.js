import styled from "styled-components";

const Trusted = () => {
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
  `;

  return (
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
  );
};

export default Trusted;
