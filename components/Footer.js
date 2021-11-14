import Link from 'next/link'
import styled from 'styled-components'
import FreeEstimateForm from '../components/FreeEstimateForm'

const Footer = () => {
  return (
    <>
      <MainFooter>
        <div className="container">
          <section className="footer">
            <div className="footer-menu">
              <h2>Call us</h2>
              <p>Phone: (443) 456-6784</p>
              <h2>Hours of Operation</h2>
              <p>7 Days a Week, 8:00am - 8:00pm</p>
              <h2>Menu</h2>
              <nav>
                <ul>
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/septic-services">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Resources</a>
                    </Link>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Contact us</a>
                  </li>
                </ul>
              </nav>
            </div>
            <FreeEstimateForm />
          </section>
        </div>
      </MainFooter>
      <LowerFooter>
        <div>
          <h5>
            Contact us to discuss all your septic service needs. We serve:
          </h5>
          <p>
            <small>
              Anne Arundel County, Baltimore County, Carroll County, Calvert
              County, Charles County, Howard County, Hartford County, Montgomery
              County, St.Mary’s County, and Prince George’s County
            </small>
          </p>
          <p>Home Septic Pros &copy; {new Date().getFullYear()}</p>
        </div>
      </LowerFooter>
    </>
  )
}

const MainFooter = styled.div`
  color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/images/pipes.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-menu {
    margin-bottom: 3rem;
  }

  ul {
    margin: 0 0 0 1rem;
  }

  li {
    margin-bottom: 1rem;
    a {
      color: #fff;
      text-decoration: none;
    }
  }

  .service-form {
    max-width: 100%;
  }

  @media (min-width: 862px) {
    .footer {
      max-width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 4rem;

      .footer-menu {
        max-width: 600px;
        margin-bottom: 0;
        margin-right: 2rem;

        h2 {
          margin: 1rem 0;
        }
      }

      .service-form {
        max-width: 400px;
      }
    }
  }
`

const LowerFooter = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: black;
  color: #fff;

  div {
    max-width: 90%;
    margin: 0 auto;
    @media (min-width: 768px) {
      max-width: 60%;
    }
  }

  p {
    font-size: 1rem;
    margin: 1rem 0;
  }

  @media (min0width: 768px) {
    div {
      max-width: 60%;
      margin: 0 auto;
    }
  }
`

export default Footer
