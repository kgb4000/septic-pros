import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroBox from '../components/HeroBox'
import Button from '../components/Button'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'
import FreeEstimateForm from '../components/FreeEstimateForm'

export default function Home() {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <HeroBox
        heroText="#1 Septic System Service Company in Anne Arundel County Maryland"
        subText="We Get ..it Done"
        backgroundHeight="80vh"
        buttonText="Get Your Free Estimate &#8594;"
        backgroundImage="/images/septic-truck-pumping-wastewater.jpeg"
      />
      <div className="main-container">
        <Main>
          <div className="container">
            <section>
              <h1>Septic System Service Company</h1>
              <p>
                Home Septic Pros is a septic system service, installation and
                repair for the wonderful residents and businesses in Maryland.
              </p>
              <p>
                We are a family owned septic tank installation company in
                Millersville Maryland, but we serve customers all over the
                state.
              </p>
              <p>No job is too big or too small.</p>
              <p>
                We have a dedicated team of employees that get the job right the
                first time.
              </p>
              <p>
                We believe that a happy customer is a satisfied customer, and we
                always try to go above and beyond to help our customers when
                they need us the most.
              </p>
              <h2>24 Hour Emergency Septic Service</h2>
              <p>
                Some septic system problems happen when you least expect it and
                you just can&apos;t wait till tomorrow.
              </p>
              <p>
                Septic emergencies like flooded basements with sewage, and
                plugged sewer lines pose threats to you, your property, and the
                environment.
              </p>
              <p>
                If you suspect you have a major septic problem, we are the
                emergency septic company for you.
              </p>
              <p>
                Contact us for your emergency reapir, and we&apos;ll dispatch a
                qualified septic technician as soon as possible.
              </p>
              <p>
                We are available 24 hours a day 7 days a week for emergencies,
                so don&apos;t hesitate to call us.
              </p>
              <div className="btn">
                <Link href="/septic-services">
                  <a>
                    <Button as="a">Call (443)234-2374</Button>
                  </a>
                </Link>
              </div>
            </section>
          </div>
          <div className="container">
            <section>
              <h2>Our Septic Services</h2>
              <div className="services">
                <div className="service">
                  <Link href="/services/septic-tank-installation">
                    <a>
                      <img
                        src="images/concrete-septic-tank.jpeg"
                        alt="concrete septic tank installation"
                      />
                      <h3>Septic Tank Installation</h3>
                    </a>
                  </Link>
                </div>
                <div className="service">
                  <img
                    src="images/concrete-septic-tank.jpeg"
                    alt="concrete septic tank installation"
                  />
                  <h3>Septic Tank Replacement</h3>
                </div>
                <div className="service">
                  <img
                    src="images/septic-truck-pumping-wastewater.jpeg"
                    alt="concrete septic tank installation"
                  />
                  <h3>Septic Tank Pumping</h3>
                </div>
              </div>
              <div className="btn">
                <Link href="/septic-services">
                  <a>
                    <Button>See More Services &#8594;</Button>
                  </a>
                </Link>
              </div>
            </section>
          </div>
          <div className="container">
            <section>
              <h2>Why Work With Home Septic Pros</h2>
              <p>
                Home Septic Pros is a septic tank repair company in Maryland.
              </p>
              <ul>
                <li>Experience</li>
                <li>Quality Work</li>
                <li>Excellent Customer Service</li>
              </ul>
            </section>
          </div>
          <div className="container">
            <section>
              <h2>View Our Work</h2>
              <div className="our-work">
                <div className="work">
                  <img
                    src="images/concrete-septic-tank.jpeg"
                    alt="concrete septic tank installation"
                  />
                  <h3>Concrete Tank Installation</h3>
                </div>
                <div className="work">
                  <img
                    src="images/drain-field-installation.jpeg"
                    alt="concrete septic tank installation"
                  />
                  <h3>Septic Tank Repair</h3>
                </div>
                <div className="work">
                  <img
                    src="images/plastic-septic-tanks.jpeg"
                    alt="concrete septic tank installation"
                  />
                  <h3>Grease Trap Cleaning</h3>
                </div>
              </div>
              <div className="btn">
                <Button>See More Pictures &#8594;</Button>
              </div>
            </section>
          </div>
          <div className="container">
            <section>
              <h2>Our Dirty Blog</h2>
              <div className="blog-section">
                <div className="blog-post">
                  <img
                    src="images/drain-field-installation.jpeg"
                    alt="concrete septic tank installation"
                  />
                  <h3>What if My Septic Tank is Full, Oh ...</h3>
                </div>
                <div className="blog-post">
                  <img
                    src="images/drain-field-installation.jpeg"
                    alt="concrete septic tank installation"
                  />
                  <h3>My Septic Tank is Gurgling, Now What</h3>
                </div>
                <div className="blog-post">
                  <img
                    src="images/drain-field-installation.jpeg"
                    alt="concrete septic tank installation"
                  />
                  <h3>
                    A Cesspool vs Septic Tank, What&apos;s the Difference?
                  </h3>
                </div>
              </div>
              <div className="btn">
                <Button>More Resources &#8594;</Button>
              </div>
            </section>
          </div>
          <div className="container">
            <section>
              <h2>Customer Testimonials</h2>
              <p>
                Home Septic Pros came out to for a new septic tank installation.
                They were knowledgeable, and professional, and made me feel
                comfortable with the entire process.
              </p>
              <div className="btn">
                <Button>More Testimonials &#8594;</Button>
              </div>
            </section>
          </div>
          <div className="container">
            <section>
              <FreeEstimateForm />
            </section>
          </div>
        </Main>
        <Sidebar>
          <FreeEstimateForm />
        </Sidebar>
      </div>
      <Footer />
    </>
  )
}

const Main = styled.main`
  @media (min-width: 768px) {
    .services,
    .our-work {
      display: flex;
      justify-content: space-between;

      .service,
      .work {
        max-width: 32%;
        text-align: center;
      }
    }

    .blog-section {
      margin: 4rem 0;
      .blog-post {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 4rem;

        h3 {
          margin: 0;
          max-width: 30rem;
          text-align: start;
        }

        img {
          width: 20rem;
          margin-right: 2rem;
        }
      }
    }
  }
`

const Sidebar = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-top: 3rem;
    max-width: 300px;

`
