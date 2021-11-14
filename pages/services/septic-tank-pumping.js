import styled from 'styled-components'
import Link from 'next/link'
import Footer from '../../components/Footer'
import HeroBox from '../../components/HeroBox'
import Button from '../../components/Button'
import { NextSeo } from 'next-seo'

export default function Pumping() {
  const SEO = {
    title: 'Home Septic Pros',
    titleTemplate: '#1 Septic Tank Pumping in Anne Arundel County | %s',
    description:
      'Need septic tank pumping for your home? We can do it right. We are Home Septic Pros.',
    canonical: 'https://homesepticpros.com/services/septic-tank-pumping',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://https://homesepticpros.com/services/septic-tank-pumping',
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
        heroText="#1 Septic Tank Pumping Service in Anne Arundel County"
        subText="Get Your Septic tank Pumped by professionals at Home Septic pros"
        backgroundHeight="100vh"
        buttonText="Call (443) 235-1546"
        backgroundImage="/images/plastic-septic-tanks.jpeg"
      />
      <Main>
        <div className="container">
          <section>
            <h2>What is Septic Tank Pumping</h2>
            <p>
              Pumping your septic tank is the process of sucking out and
              removing all the scum, liquid, and sludge that forms in your
              septic tank.
            </p>
            <p>
              Your septic tank is a container that stores sewage and other
              wastewater from your home. Its primary duty is to collect the
              wastewater and separate the solids from the liquids.
            </p>
            <p>
              The solids, fats, oils, and greases, also known as FOG, float to
              the top of the tank and form scum. The heavier solids, like human
              waste, sink to the bottom and become sludge.
            </p>
            <div className="btn">
              <Button>Call us (443) 234-5693</Button>
            </div>
            <h2>How are Septic Tanks Pumped?</h2>
            <p>
              When you hire our company to pump your septic tank, we come with a
              large truck with a giant tank attached.
            </p>
            <p>
              A big suction hose attached to our truck sucks up all the solid
              and liquid waste from your septic tank. The waste we suck out is
              stored in the truck and transported to a sewage processing site
              for proper treatment.
            </p>
            <h2>Why Should You Pump Your Septic Tank?</h2>
            <p>
              Your septic system is an efficient, self-contained, underground
              wastewater treatment solution. If your home uses a septic tank
              system, you should schedule and pump your septic tank.
            </p>
            <p>It would help if you pumped your septic tank because:</p>
            <ol>
              <li>Septic tanks are not self-cleaning.</li>
              <li>
                Septic tanks are not designed to last forever and need pumping
                out regularly.
              </li>
              <li>
                Pumping your septic tank will not only keep it running smoothly
                but also save you money on expensive septic tank repairs.
              </li>
              <li>
                If you don't pump it, the sludge can build up enough to reach
                and clog the outlet pipe to the drain field.
              </li>
              <li>
                If you don't pump your septic tank regularly, you'll end up with
                sewage backups in your house, which lead to expensive repairs
                and possibly even health hazards for you, your family, and the
                environment.
              </li>
              <li>
                Pumping your septic tank will keep it from overflowing and
                spilling sewage into the ground, which can contaminate the
                groundwater.
              </li>
              <li>
                Pumping your septic tank prevents your septic system from
                becoming overloaded or damaged.
              </li>
              <li>
                Pumping out your septic tank is the only way to remove sludge
                and scum from inside the tank.
              </li>
              <li>
                You can tell when your septic system needs pumping by looking
                for any of these signs - sewage backing up through drains,
                toilets filling with water, foul odors coming from drains or
                vents, cloudy water draining from sinks and tubs.
              </li>
              <li>
                Overflowing or leaking septic tanks can contaminate groundwater
                and nearby lakes, rivers, streams, and wells.
              </li>
              <li>
                The sludge in your septic tank will back up into your home's
                plumbing.
              </li>
            </ol>
            <h2>How Often Should You Pump Your Septic Tank?</h2>
            <p>
              The{' '}
              <a
                href="https://www.epa.gov/septic/how-care-your-septic-system"
                target="_blank"
                rel="noreferrer"
              >
                environmental protection agency (EPA)
              </a>{' '}
              suggests that you pump your septic tank every three to five years.{' '}
            </p>
            <p>
              The EPA's suggestion and an excellent schedule to start with, but
              how often you pump your septic tank depends on five factors. These
              factors are:
            </p>
            <ol>
              <li>
                The size of your household: how many bedrooms are in your house.
              </li>
              <li>
                The size of your septic tank: do you have a small tank or a
                large tank?
              </li>
              <li>
                How much water do you use: do you tank long showers, do you take
                baths all the time, and do you use the washing machine all day
                on Saturday.
              </li>
              <li>
                The number of solids in the wastewater: do you have a garbage
                disposal hooked up?
              </li>
              <li>
                What you flush down your toilets and drains: items like paper
                towels, condoms, tampons, and dental floss down the toilet, or
                even food from the garbage disposal. These items do not break
                down fast enough for your septic system to work effectively.{' '}
              </li>
            </ol>
            <p>
              If you still have questions about when you should pump your septic
              tank, give us a call, and we'll be happy to talk to you about your
              septic system needs.
            </p>
            <h2>What Does Septic Tank Pumping Cost?</h2>
            <p>
              The cost of pumping a septic tank is not as expensive as you might
              think - it can cost between <b>$200 to $500</b> for one service
              call.
            </p>
            <p>The cost depends on:</p>
            <ul>
              <li>The size of your septic tank</li>
              <li>How long does it take to pump it out?</li>
              <li>How easy is your septic tank to reach?</li>
              <li>How long does it take to pump it properly?</li>
            </ul>
            <p>In most cases, it takes about one hour to pump a tank.</p>
            <p>
              If you don't have your tank pumped regularly, you take a chance of
              your septic system failing.
            </p>
            <h2>Can You Pump Your Septic Tank Yourself?</h2>
            <p>
              You can pump your septic tank out yourself, but we don't recommend
              you do it. It is easier and cheaper for you to pay for our
              services than to do it yourself.
            </p>
            <p>
              First, you need to be licensed by the state and the county, and
              you also need to be trained by a licensed company to handle any
              septic waste.
            </p>
            <p>
              Second, you must remember that your septic tank collects all the
              wastewater coming from your household, and it contains millions of
              nasty bacteria. This wastewater is hazardous to you, your family,
              and the environment, and you must transport it to a sanitary
              treatment facility for proper disposal.
            </p>
            <p>
              Third, you may not have all the tools and equipment necessary to
              pump your septic tank, and the truck alone costs $20,000 to 30,000
              dollars.
            </p>
            <h2>Get Professional Septic Tank Pumping Service</h2>
            <p>
              When you need a professional septic tank service, get it from the
              professional at Home Septic Pros. We are ready, willing and able
              to handle regular septic tank pumping, and any emergency septic
              tank pumping you might need. Call us at (443) 345-3457 to schedule
              your next pump out.
            </p>
          </section>
        </div>
      </Main>
    </>
  )
}

const Main = styled.main``
