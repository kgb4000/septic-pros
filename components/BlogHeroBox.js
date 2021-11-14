import styled from 'styled-components'

export default function BlogHeroBox({
  backgroundImage,
  backgroundHeight,
  heroText,
  image,
  name,
  date,
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
            {name && (
              <div className="author-info">
                <img className="avatar" src={image} />
                <span>{name}</span>
                <span>
                  <em>
                    {new Date(date).toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </em>
                </span>
              </div>
            )}
          </div>
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

  .author-info {
    display: flex;
    align-items: center;

    span {
      margin-left: 1rem;
    }

    .avatar {
      max-width: 50px;
      display: inline-block;
      border: 2px solid #e67e22;
      border-radius: 50%;
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
  }

  @media (min-width: 1440px) {
  }
`
