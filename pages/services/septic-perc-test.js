import Link from 'next/link'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HeroBox from '../../components/HeroBox'
import Button from '../../components/Button'
import { NextSeo } from 'next-seo'

export default function SepticPercTest() {
  const SEO = {
    title: 'Home Septic Pros',
    titleTemplate: 'Top Septic Perc Tests in Maryland | %s',
    description:
      'Buying land and new a Perc Test?. Or do you need to repair or replace your septic tank? Let us help.',
    canonical: 'https://homesepticpros.com/septic-perc-test',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://homesepticpros.com/septic-perc-test',
      site_name: 'Home Septic Pros',
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Header />
      <HeroBox
        heroText="Septic Perc Tests"
        subText="We Perform Percolation Tests Near You in Maryland"
        backgroundHeight="70vh"
        buttonText="Call (443) 235-3972"
        backgroundImage="/images/plastic-septic-tanks.jpeg"
      />
      <Main>
        <section>
          <div className="container">
            <h2>Septic Perc Testing Company</h2>
            <p>
              At Home Septic we perform septic perc test for both residences and
              businesses in Maryland.
            </p>
            <p>Contact us for all you septic prec testing needs.</p>
            <div className="btn">
              <Link href="/septic-services">
                <a>
                  <Button>Call (443)234-2374</Button>
                </a>
              </Link>
            </div>
            <h2>What is a Perc Test?</h2>
            <p>
              Perc, short for percolation, is the process of a liquid slowly
              moving through a filter.
            </p>
            <p>Just think of making coffee with an old coffee maker.</p>
            <p>
              The hot water hits the ground coffee in the coffee maker and only
              the color and the flavor of the coffee move through the filter.
            </p>
            <p>
              When buying land that needs a septic system installation, a perc
              test is a test that simulates operating a septic tank system.
            </p>
            <p>
              A perc test is a test that determines the rate that liquid moves
              through soil.
            </p>
            <p>
              In the case of a septic system, it is a test to see how long
              wastewater form your home, takes to disolve in the soil.
            </p>
            <h2>Why is a Perc Test is Necessary?</h2>
            <p>
              Before installing a septic system in the ground, it is necessary
              to perform a percolation test.
            </p>
            <p>
              A perc test is necessary in order to determine where to place the
              septic system&apos;s drain field, and also if you fail the test,
              it will let you know what alternative septic systems are available
              for you.
            </p>
            <p>
              If the soil tested is sandy and drains quickly, the soil will not
              filter the waste in the water, and the ground can become
              contaminated.
            </p>
            <p>
              Or if the soil is mostly clay and drains slowly, raw sewage water
              will remain near the ground level and form pools of sewage water.
            </p>
            <p>That will be terrible.</p>
            <p>
              Sewage water puddles anywhere on your property will not be good
              for you, or the environment. This is where alternative septic
              systems come in to play.
            </p>
            <h2>How a Septic System Works</h2>
            <p>
              Although there are different types of septic systems, they all
              have the same parts and functions.
            </p>
            <p>The main parts of a septic system include:</p>
            <ul>
              <li>Septic pipes</li>
              <li>Septic tank</li>
              <li>Drain field</li>
            </ul>
            <p>
              Wastewater from your bathrooms, toilets, kitchens, and laundry
              room leave your house through a septic pipe which is connected to
              the septic tank.
            </p>
            <p>
              The septic tank acts as a separator and separates heavy solids
              form lighter solid particles.
            </p>
            <p>
              Solid particles from the wastewater sink to the bottom of the tank
              and form sludge.
            </p>
            <p>
              Lighter particles, like soap, oils, and grease, float to the top
              of the wastewater to form a layer called scum.
            </p>
            <p>The liquid that remains in the middle is called effluent.</p>
            <p>
              The effluent in the middle of the septic tank is discharged into
              the drain field. This is where the liquid effluent gets released
              back into the earth where it is absorbed by the soil and returned
              to the ground.
            </p>
            <h2>How to Do a Perc Test for a Septic System in Maryland?</h2>
            <p>A perc test for a septic system requires several steps.</p>
            <p>
              These steps include{' '}
              <ul>
                <li>
                  filling out the perc test application for your county and
                  paying the appropriate fees
                </li>
                <li>contacting your local county health department</li>
                <li>
                  hiring a backhoe operator to dig the holes for the perc test
                </li>
              </ul>
            </p>
            <p>
              Here are links to Perc Test applications for different counties in
              Maryland.
            </p>
            <ul>
              <li>
                <a
                  href="https://www.aahealth.org/wp-content/uploads/2017/10/perc-app.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Anne Arundel County Perc Test Application
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://resources.baltimorecountymd.gov/Documents/Environment/groundwatermanagement/forms/a1soilpercolationtests.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Baltimore County Perc Test Application
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://www.calverthealth.org/community/environmentalhealthservices/PDF/snconapp.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Calvert County Perc Test Application
                </a>
              </li>
              <li>
                <a
                  href=" http://www.charlescountyhealth.org/wp-content/uploads/2014/07/PercApp.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Charles County Perc Test Application
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://health.frederickcountymd.gov/DocumentCenter/View/3444/Request-for-Information-2019"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frederick County Perc Test Application
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://www.howardcountymd.gov/health/resource/22-perc-apprevised-102618"
                  target="_blank"
                  rel="noreferrer"
                >
                  Howard County Test Application
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://www.montgomerycountymd.gov/DPS/Resources/Files/Land_Development/ApplicationForWellAndSepticPermit.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Montgomery County Perc Test Application
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://www.princegeorgescountymd.gov/DocumentCenter/View/4375/Percolation-Test-Application-PDF?bidId="
                  target="_blank"
                  rel="noreferrer"
                >
                  Prince George's County Perc Test Application
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://www.stmarysmd.com/docs/Perc%20Test%20Application%202020.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  St Mary's County Perc Test Application
                </a>
              </li>
            </ul>
          </div>
          <div className="container">
            <h2>Cost of a Perc Test in Maryland</h2>
            <p>The cost of a perc test will depend on a couple of things.</p>
            <p>These things are:</p>
            <ol>
              <li>The cost of the county perc test application</li>
              <li>The size of the property</li>
              <li>The property's accessibility</li>
              <li>The cost of the backhoe operator</li>
            </ol>
          </div>
          <div className="container">
            <h2>Perc Testing Company</h2>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main``
