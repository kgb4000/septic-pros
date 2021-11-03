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
}) {
  return (
    <>
      <Hero
        backgroundImage={backgroundImage}
        backgroundHeight={backgroundHeight}
      >
        <div className="content">
          <h1 className="heroText">{heroText}</h1>
          <p className="subText">{subText}</p>
          {buttonText && (
            <a href={buttonLink}>
              <Button>{buttonText}</Button>
            </a>
          )}
        </div>
      </Hero>
    </>
  )
}

const Hero = styled.div`
  color: #ffffff;
  display: flex;
  align-items: center;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.42),
      rgba(162, 155, 254, 0.65)
    ),
    url(${(props) => props.backgroundImage});
  background-position: center;
  height: ${(props) => props.backgroundHeight};
  background-size: cover;
  margin: 0 auto;
  margin-top: -50px;

  .content {
    max-width: 1000px;
    padding: 0 1.2rem;
    margin: 0 auto;
    text-align: center;
  }

  .heroText {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subText {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    .heroText {
      font-size: 3rem;
    }

    .subText {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1440px) {
    .heroText {
      font-size: 5rem;
    }

    .subText {
      font-size: 2rem;
    }
  }
`
