import Link from 'next/link'
import styled from 'styled-components'
import HeroBox from '../components/HeroBox'
import Button from '../components/Button'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo'
import FreeEstimateForm from '../components/FreeEstimateForm'
import { getPosts } from '../lib/data'

export const getStaticProps = async () => {
  const data = await getPosts()

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  console.log(data.posts)
  return (
    <>
      <DefaultSeo {...SEO} />
      <HeroBox
        heroText="#1 Septic System Service Company in Anne Arundel County Maryland"
        subText="Let us take care of all your septic service needs"
        backgroundHeight="100vh"
        buttonText="Call (443) 456-6893"
        backgroundImage="/images/septic-truck-pumping-wastewater.jpeg"
        serviceForm={<FreeEstimateForm />}
      />
      <Main>
        <div className="container">
          <section>
            <h1>Septic System Service Company</h1>
            <p>
              <b>Home Septic Pros</b> is a septic system service, installation
              and repair company for residential and commercial septic systems.
            </p>
            <p>
              We are a family owned company in Millersville Maryland, and we
              serve customers in Anne Arundel County and other nearby counties.
            </p>
            <p>No job is too big or too small for Home Septic Pros.</p>
            <p>
              We have a dedicated team of employees that get the job right the
              first time.
            </p>
            <p>
              We believe that a happy customer is a satisfied customer, and we
              always go above and beyond to help our customers when they need us
              the most.
            </p>
            <p>
              Whenever you need septic services, trust us and call us at
              (443)234 -2345 today.
            </p>
            <h2>24 Hour Emergency Septic Service</h2>
            <p>
              Some septic system problems happen when you least expect it and
              you just can&apos;t wait till tomorrow. Septic emergencies like
              flooded basements, and plugged sewer lines, pose threats to you
              your property, and the environment.
            </p>
            <p>
              If you suspect you have a major septic problem, we are the{' '}
              <b>emergency septic repair company</b> for you.
            </p>
            <p></p>
            <p>
              Contact us for your emergency reapir, and we&apos;ll dispatch a
              qualified septic technician as soon as possible. We are available{' '}
              <b>24 hours a day 7 days a week for emergencies</b>, so don&apos;t
              hesitate to call us.
            </p>
            <div className="btn">
              <Link href="/septic-services">
                <a>
                  <Button>Call (443) 234-2374</Button>
                </a>
              </Link>
            </div>
          </section>
        </div>
        <section className="septic-services">
          <div className="container">
            <div className="title">
              <h2>Our Septic Services</h2>
              <p>Septic Services We Provide</p>
            </div>
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
                <Link href="/services/septic-tank-pumping">
                  <a>
                    <img
                      src="images/septic-truck-pumping-wastewater.jpeg"
                      alt="concrete septic tank installation"
                    />
                    <h3>Septic Tank Pumping</h3>
                  </a>
                </Link>
              </div>
            </div>
            <div className="btn">
              <Link href="/septic-services">
                <a>
                  <Button>See More Services &#8594;</Button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="smaller-container">
            <div className="title">
              <h2>Why Work With Home Septic Pros</h2>
              <p>Why Work With Us</p>
            </div>
            <div className="why">
              <div className="why-us">
                <p>
                  Trust <b>Home Septic Pros</b> to do the job right the first
                  time. We’re your one-stop shop for all your septic service
                  needs and more. Our expert technicians are ready and able to
                  help you with installations and repairs. There are many
                  reasons you should get your septic services from{' '}
                  <b>Home Septic Pros</b>. Apart from being one of the top
                  septic service companies in Maryland, our company:
                </p>
                <ul>
                  <li>
                    <b>Knowledgeable and Experienced</b>
                  </li>
                  <li>
                    <b>Reliable and Dependable</b>
                  </li>
                  <li>
                    <b>Always perform Quality Work</b>
                  </li>
                  <li>
                    <b>Gives Competitive Pricing</b>
                  </li>
                  <li>
                    <b>Believes in delivering Excellent Customer Service</b>
                  </li>
                </ul>
                <div className="btn">
                  <Link href="/septic-services">
                    <a>
                      <Button>More About Us</Button>
                    </a>
                  </Link>
                </div>
              </div>
              <FreeEstimateForm />
            </div>
          </div>
        </section>
        <section className="our-work">
          <div className="container">
            <div className="title">
              <h2>View Our Work</h2>
              <p>Jobs We Completed For Customers</p>
            </div>
            <div className="our-work">
              <div className="work">
                <img
                  src="images/drain-field-installation.jpeg"
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
                  src="images/drain-field-installation.jpeg"
                  alt="concrete septic tank installation"
                />
                <h3>Septic Tank Cleaning</h3>
              </div>
            </div>
            <div className="btn">
              <Button>See More Pics &#8594;</Button>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="title">
            <h2>Expert Septic System Tips</h2>
            <p>From Our Blog</p>
          </div>
          <div className="blog">
            {data.posts.map((post) => (
              <div className="blog-post" key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <img src={post.coverImage.url} alt={post.title} />
                    <h3>{post.title}</h3>
                    <p>Read more</p>
                  </a>
                </Link>
              </div>
            ))}
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
              <h3>Cesspool vs Septic Tank, the Difference?</h3>
            </div>
          </div>
          <div className="btn">
            <Button as="a" href="/blog">
              More Resources &#8594;
            </Button>
          </div>
        </div>
        <section>
          <div className="smaller-container">
            <div className="title">
              <h2>Customer Testimonials</h2>
              <p>What Our Customers Say</p>
            </div>
            <p>
              Home Septic Pros came out to for a new septic tank installation.
              They were knowledgeable, and professional, and made me feel
              comfortable with the entire process. I use them for all my septic
              needs for my home.
            </p>
            {/* <div className="btn">
              <Button>More Testimonials &#8594;</Button>
            </div> */}
          </div>
        </section>
      </Main>
    </>
  )
}

const Main = styled.main`
  .septic-services,
  .our-work {
    background-color: #ecf0f1;
    ${
      '' /* color: #fff;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(/images/plastic-septic-tanks.jpeg);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center; */
    };
  }

  .service a,
  .blog-post a {
    color: inherit;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    .services,
    .our-work,
    .blog {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .service,
      .work,
      .blog-post {
        max-width: 31%;
        text-align: center;
      }

      .blog-post h3 {
        font-size: 1.6rem;
      }
    }

    .blog-section {
      .btn {
        text-align: left;
      }
    }

    .why {
      max-width: 1140px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .why-us {
        max-width: 50%;
        margin-right: 2rem;
      }

      .service-form {
        max-width: 400px;
      }
    }
  }
`
