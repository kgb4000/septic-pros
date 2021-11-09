import styled from 'styled-components'
import Link from 'next/link'
import Footer from '../../components/Footer'
import HeroBox from '../../components/HeroBox'
import Button from '../../components/Button'
import { NextSeo } from 'next-seo'

export default function Installation() {
  const SEO = {
    title: 'Home Septic Pros',
    titleTemplate: '#1 Septic Tank Installation in Anne Arundel County | %s',
    description:
      'Need new Septic Tank Installation for your home? We can do it right. We are Home Septic Pros.',
    canonical: 'https://homesepticpros.com/services/septic-tank-installation',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://https://homesepticpros.com/services/septic-tank-installation',
      site_name: 'Home Septic Pros',
    },
  }
  return (
    <>
      <NextSeo
        {...SEO}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
      <HeroBox
        heroText="Septic Tank Installation "
        subText="Septic Tank Installation Near You in Maryland"
        backgroundHeight="70vh"
        buttonText="Call (443) 235-1546"
        backgroundImage="/images/plastic-septic-tanks.jpeg"
      />
      <Main>
        <div className="container">
          <section>
            <h2>Septic Tank System Installation</h2>
            <p>
              Home Septic Pros are professionals at installing septic tanks and
              septic systems.
            </p>
            <p>
              A septic tank system is necessary for any homeowner in Anne
              Arundel County who cannot connect to the city sewage network.
            </p>
            <div className="btn">
              <Button>Call us (443) 234-5693</Button>
            </div>
            <h2>How Your Septic Tank System Works</h2>
            <p>
              Your septic system is an efficient, self-contained, underground
              wastewater treatment solution.
            </p>
            <p>
              Wastewater leaves your house through a septic pipe and enters the
              septic tank through the inlet baffle.
            </p>
            <p>
              Solids in the wastewater settle at the bottom of the tank, while
              grease, oil, soaps, and other lighter solids float to the top of
              the tank as scum.
            </p>
            <p>
              Compartments inside the tank prevent sludge and the scum from
              escaping the tank and going into the drain field.
            </p>
            <p>
              Clear effluent is discharged by hydraulic gravity through the
              outlet baffle into the discharge pipe in the septic tank.
            </p>
            <p>
              The effluent is then evenly distributed to the drainfield through
              the distribution box.
            </p>
            <p>
              Water from the wastewater is percolated and purified through the
              earth and added to the water in the ground.
            </p>
            <h2>Benefits of a Septic Tank System</h2>
            <ul>
              <li>Septic systems are environmentally friendly.</li>
              <li>They use less energy to decompose wastewater.</li>
              <li>
                They save you tons of money by not paying for sewage treatment
                from the city or manicipal.
              </li>
              <li>
                Septic systems are low maintenance and only need pumping every
                three to five years. Cleaning and pumping your tank regularly
                will keep your tank working great.
              </li>
              <li>
                With proper care and maintenance the lifespan of a septic tank
                system is between 20 to 40 years.
              </li>
              <li>
                You save money on property tax since you are not using the city
                sewer.
              </li>
            </ul>
            <h2>Types of Septic Systems</h2>
            <p>There are ten different types of septic systems. They are:</p>
            <ul>
              <li>Septic Tank</li>
              <li>Conventional System</li>
              <li>Chamber System</li>
              <li>Drip Distribution System</li>
              <li>Aerobic Treatment Unit</li>
              <li>Mound Systems</li>
              <li>Recirculating Sand Filter System</li>
              <li>Evapotranspiration System</li>
              <li>Constructed Wetland System</li>
              <li>Cluster / Community System</li>
            </ul>
            <h2>Parts of Your Septic Tank System</h2>
            <p>
              There are three main parts of a septic tank system. These parts
              are:
            </p>
            <ol>
              <li>Pipes</li>
              <li>Septic tank</li>
              <li>Drain field</li>
            </ol>
            <h3>Pipes</h3>
            <p>
              Pipes are simply the wastewater pipes from your kitchen,
              bathrooms, toilets and laundry room that lead to your septic tank.
            </p>
            <h3>Septic Tank</h3>
            <p>
              A septic tank is a watertight tank that is designed and designated
              to treat wastewater from your home. It is an essential component
              of your septic system because it holds the wastewater, and
              prevents untreated wastewater from escaping into the environment.
            </p>
            <p>
              There are mainly four different types of septic tanks. These four
              types are:
            </p>
            <ul>
              <li>Concrete septic tanks</li>
              <li>Steel septic tanks</li>
              <li>Plastic septic tanks</li>
              <li>Fiberglass septic tanks</li>
            </ul>

            <h4>Concrete Septic Tanks</h4>
            <p>
              A concrete septic tank is one of the most durable septic tanks
              available for septic tank systems. They are low maintenance,
              resilient, and are not affected by changes in the weather, or
              changes in the soil.
            </p>
            <p>
              A concrete tank can also last up to 40 years with proper
              maintenance and pumping.
            </p>
            <p>
              Concrete tanks are also very heavy, and require heavy machinery to
              install, which can drive up the labor costs.{' '}
            </p>
            <h4>Steel Septic Tanks</h4>
            <p>
              Although steel septic tanks are durable, they do&apos;t last as
              long as tanks built with other concrete. They rust, and this
              lowers the lifespan. Steel tanks start to deteriorate after
              between 20 and 25 years.
            </p>
            <p>
              If the top of the tank deteriorates, it can collapse and people
              and animals can get hurt.
            </p>
            <p>
              It is also hard to remove these tanks from the ground when they
              start to rust. A rusted tank can be dangerous for the environment.
            </p>
            <p>
              Steel and metal septic tanks are not allowed in Anne Arundel
              County.
            </p>

            <h3>Drain field</h3>
            <p>A drain field is the other essential part of a septic system.</p>
            <h2>Septic Tank Size - What Size Septic Tank Do You Need?</h2>
            <p>There are different size septic tanks to buy.</p>
            <p>But how do you choose the right one?</p>
            <p>
              Generally, you determine the size of your septic tank by the
              number of bedrooms you have in your house.{' '}
            </p>
            <ul>
              <li>
                1-2 bedroom home with less than 1.500 sq. ft. = 750-gallon tank
              </li>
              <li>
                3 bedroom home with less than 2,500 sq. ft. = 1,000-gallon tank
              </li>
              <li>
                4 bedroom home with less than 3,500 sq. ft. = 1,250-gallon tank
              </li>
              <li>
                5 bedroom home with less than 4,500 sq. ft. = 1,250-gallon tank
              </li>
              <li>
                6 bedroom home with less than 5,500 sq. ft. = 1,315-gallon tank
              </li>
            </ul>
            <p>
              You don&apos;t usually determine the size of your tank by the
              number of people living in your house because the number of people
              living in the home can change.
            </p>
            <p>
              But on the other hand, if you have a large family and a small
              septic tank, it will not handle the volume of wastewater from your
              house.{' '}
            </p>
            <p>
              In this case, we estimate the amount of water used in the home
            </p>
            <ul>
              <li>Less than 500 gallons a day: 900 gallon septic tank</li>
              <li>Less than 700 gallons a day: 1,200 gallon septic tank</li>
              <li>Less than 900 gallons a day: 1,500 gallon septic tank</li>
              <li>Less than 1,240 gallons a day: 1,900 gallon septic tank</li>
            </ul>
            <p>
              It is generally better to choose a bigger septic tank in case.
            </p>
            <p>
              Selecting a smaller septic tank can cause problems since the tank
              will not handle the amount of wastewater coming in.
            </p>
            <p>
              Contact us to determine the best size septic tank for your home.
            </p>
            <div className="btn">
              <Link href="/contact">
                <a>
                  <Button>Contact Us</Button>
                </a>
              </Link>
            </div>
            <h2>Septic Tank System Installation Process</h2>
            <h3>Septic Tank System Design</h3>
            <p>
              The first step in installing a septic system is to do a site
              survey and a percolation test. The survey is necessary to
              determine where the septic tank and the drain field is placed.
            </p>
            <p>
              A percolation test, also known as a{' '}
              <Link href="/services/septic-perc-test">
                <a>perc test</a>
              </Link>
              , is necessary to test the soil composition. It tests the
              soil&apos;s ability to drain and filter the wastewater in the
              drain field.
            </p>
            <p>The design of the septic system is determined by:</p>
            <ul>
              <li>The amount of space available</li>
              <li>Topography</li>
              <li>The location of your well and neighboring wells</li>
              <li>
                The type of soil, layering of the soil (sand, clay, rock), and
                the depth of the soil
              </li>
              <li>The perc test</li>
            </ul>
            <p>
              A licensed local septic system company must submit an application
              and get approval to install the septic system.
            </p>
            <p>
              A drawing of the septic system installation or an approved site
              plan, plus an application fee must be submitted with the
              application.
            </p>
            <p>
              After the application is approved, the septic system installation
              can begin.
            </p>
            <p>
              After we get approval and permits, we are ready to install your
              new septic tank system.
            </p>
            <p>
              Before we install your system, we first inspect all the materials
              for defects.{' '}
            </p>
            <p>
              We do this as a precaution to prevent any problems during the
              installation, the inspection, and to protect the environment and
              your health.
            </p>
            <p>We install your new septic system.</p>
            <h2>Septic Tank System Inspection</h2>
            <p>
              Before we complete your septic system installation, your system
              must be inspected by the local county officials to ensure that the
              installation is up to state and county standards.
            </p>
            <p>
              After we get the green light form the inspector, we close your
              system and your septic tank installation is complete.
            </p>
            <p>
              You now have a brand new septic tank system that will last you for
              many years to come.
            </p>
            <h2>Septic System Cost</h2>
            <p>
              The septic system cost will vary according to the type of septic
              system installed.
            </p>
            <p>Septic tank installation can take a long time.</p>
            <p>
              It can take time to get approval to start a new septic system
              installation, septic tank permits, perform the survey, and perform
              the perc test.
            </p>
            <h2>Hire Home Septic Pros</h2>
          </section>
        </div>
      </Main>
    </>
  )
}

const Main = styled.main``
