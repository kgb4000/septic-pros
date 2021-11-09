import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/Header'
import HeroBox from '../components/HeroBox'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <HeroBox
        heroText="Septic System Services"
        subText="Septic System Installation and Repair"
        backgroundHeight="70vh"
        buttonText="Call 240 333-2345"
        backgroundImage="/images/plastic-septic-tanks.jpeg"
      />
      <Main>
        <section>
          <div className="container">
            <h1>Septic System Services</h1>
            <p>
              These are the septic system services we offer to our customers.
              Feel free to call us with any special requests.
            </p>
            <h2>Emergency Service</h2>
            <p>
              Call us 24/7 for any emergency service. We are always ready and
              able to do the job to protect you, and our environment.
            </p>
            <div className="septic-services">
              <div className="service">
                <Link href="/services/septic-tank-installation">
                  <a>
                    <img src="images/septic-truck-pumping-wastewater.jpeg" />
                    <h3>Septic Tank Installation</h3>
                    <p>Learn more</p>
                  </a>
                </Link>
              </div>
              <div className="service">
                <img src="images/septic-truck-pumping-wastewater.jpeg" />
                <h3>Septic Tank Inspection</h3>
                <p>Learn more</p>
              </div>
              <div className="service">
                <img src="images/septic-truck-pumping-wastewater.jpeg" />
                <h3>Septic Tank Repair</h3>
                <p>Learn more</p>
              </div>
              <div className="service">
                <img src="images/septic-truck-pumping-wastewater.jpeg" />
                <h3>Septic System Installation</h3>
                <p>Learn more</p>
              </div>
              <div className="service">
                <img src="images/septic-truck-pumping-wastewater.jpeg" />
                <h3>Septic System Repair</h3>
                <p>Learn more</p>
              </div>
              <div className="service">
                <img src="images/drain-field-installation.jpeg" />
                <h3>Drain Field Installation</h3>
                <p>Learn more</p>
              </div>
              <div className="service">
                <img src="images/drain-field-installation.jpeg" />
                <h3>Drain Field Repair</h3>
                <p>Learn more</p>
              </div>
              {/* <div className="service">
                <img src="images/septic-truck-pumping-wastewater.jpeg" />
                <h3>Well Installation</h3>
                <p>Learn more</p>
              </div> */}
              <div className="service">
                <img src="images/septic-truck-pumping-wastewater.jpeg" />
                <h3>Distribution Box Replacement</h3>
                <p>Learn more</p>
              </div>
              <div className="service">
                <Link href="/services/septic-perc-test">
                  <a>
                    <img src="images/septic-truck-pumping-wastewater.jpeg" />
                    <h3>Septic Perc Test</h3>
                    <p>Learn more</p>
                  </a>
                </Link>
              </div>
              <div className="service">
                <img src="images/septic-truck-pumping-wastewater.jpeg" />
                <h3>Aerobic Treatment Unit Installation</h3>
                <p>Learn more</p>
              </div>
            </div>
          </div>
        </section>
      </Main>
    </>
  )
}

const Main = styled.main`
  .service {
    border: 1px solid #ddd;
    border-radius: 20px;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    text-align: center;
    max-width: 100%;
    box-shadow: 0 0 50px #ccc;

    h3 {
      margin: 1.5rem 1rem;
    }

    img {
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
    }

    p {
    }
  }

  @media (min-width: 480px) {
    .septic-services {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .service {
        max-width: 20rem;
        margin: 1rem;
      }
    }
  }
`
