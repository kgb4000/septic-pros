import styled from 'styled-components'
import Button from '../components/Button'
import FreeEstimateForm from '../components/FreeEstimateForm'

export default function HeroBox({
  backgroundImage,
  heroText,
  subText,
  buttonText,
  backgroundHeight,
  buttonLink,
  serviceForm,
}) {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
      >
        <div className="content">
          <div className="hero-info">
            <h1 className="heroText">{heroText}</h1>
            <p className="subText">{subText}</p>
            {buttonText && (
              <a href={buttonLink}>
                <Button>{buttonText}</Button>
              </a>
            )}
          </div>
          {serviceForm && <div>{serviceForm}</div>}
        </div>
      </Hero>
    </>
  )
}

const Hero = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.backgroundImage});
  background-position: center;
  height: ${(props) => props.backgroundHeight};
  background-size: cover;
  margin: 0 auto;
  margin-top: -70px;

  .content {
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 1.2rem;
  }

  .heroText {
    font-size: 2.8rem;
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: left;
  }

  .subText {
    font-size: 1.2rem;
    text-transform: uppercase;
    text-align: left;
  }

  .service-form {
    display: none;
    max-width: 400px;
    background: red;
    padding: 1rem 2rem 2rem 2rem;

    h3 {
      margin: 1rem 0;
    }

    button {
      background-color: red;
      width: 100%;
      height: 50px;
      border: none;
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    margin-top: -100px;
    .content {
      text-align: center;

      .heroText,
      .subText {
        text-align: center;
      }
    }
    .heroText {
      font-size: 3.5rem;
    }

    .subText {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1240px) {
    .content {
      max-width: 90%;
      text-align: left;
      .hero-info {
        max-width: 600px;
        margin-right: 2rem;
      }
      .heroText,
      .subText {
        text-align: left;
      }
    }

    .service-form {
      display: block;
      max-width: 400px;
      background: #01254c;
      padding: 1rem 2rem 2rem 2rem;
      margin-left: 2rem;

      h3 {
        margin: 1rem 0;
      }
    }
  }

  @media (min-width: 1440px) {
  }
`
