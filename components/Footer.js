import Link from 'next/link'
import styled from 'styled-components'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

const cities = [
  { title: 'Maryland', path: '/' },
  { title: 'Annapolis', path: '/annapolis' },
  { title: 'Bethesda', path: '/bethesda' },
  { title: 'Bowie', path: '/bowie' },
  { title: 'Chevy Chase', path: '/chevy-chase' },
  { title: 'Crofton', path: '/crofton' },
  { title: 'Davidsonville', path: '/davidsonville' },
  { title: 'Glenn Dale', path: '/glenn-dale' },
  { title: 'Mitchellville', path: '/mitchellville' },
  { title: 'Potomac', path: '/potomac' },
  { title: 'Rockville', path: '/rockville' },
  { title: 'Severna Park', path: '/severna-park' },
  { title: 'Silver Spring', path: '/silver-spring' },
  { title: 'Washington DC', path: '/washington-dc' },
  { title: 'Woodmore', path: '/woodmore' },
]

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Decription>
          <h3>Home Septic Pros</h3>
          <p></p>
          {/* <p>
            {cities.map((city) =>
              router.pathname === city.path ? (
                `Monica Browne Weddings is a wedding planning company in Maryland serving all couples in ${city.title}. We offer Full Service and Partial Wedding Planning services, as well as providing Day-of Coordination, Wedding Decoration, and Custom Wedding Floral Design Services. If you are a busy couple and need help planning your wedding, or if you just need some help and guidance, please don't hesitate to reach out to us. You can book a call with us when you are ready.`
              ) : (
                <p>Yo</p>
              )
            )}
          </p> */}
        </Decription>
        <FooterFoot>
          <FooterHours>
            <h3>Hours</h3>
            <div className="office-hours">
              <span itemProp="openingHours" content="Mo 8:00-20:00">
                Monday: 8:00am - 8:00pm
              </span>
            </div>
            <div className="office-hours">
              <span itemProp="openingHours" content="Tu 8:00-20:00">
                Tuesday: 8:00am - 8:00pm
              </span>
            </div>
            <div className="office-hours">
              <span itemProp="openingHours" content="We 8:00-20:00">
                Wednesday: 8:00am - 8:00pm
              </span>
            </div>
            <div className="office-hours">
              <span itemProp="openingHours" content="Th 8:00-20:00">
                Thursday: 8:00am - 8:00pm
              </span>
            </div>
            <div className="office-hours">
              <span itemProp="openingHours" content="Fr 8:00-20:00">
                Friday: 8:00am - 8:00pm
              </span>
            </div>
            <div className="office-hours">
              <span itemProp="openingHours" content="Sa 8:00-20:00">
                Saturday: 8:00am - 8:00pm
              </span>
            </div>
            <div className="office-hours">
              <span itemProp="openingHours" content="Closed">
                Sunday: Closed
              </span>
            </div>
          </FooterHours>
          <FooterMenu>
            <h3>Menu</h3>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/septic-tank-installation" passHref>
                    <a>Septic Tank Installation</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/septic-perc-test" passHref>
                    <a>Septic Perc Test</a>
                  </Link>
                </li>
                <li>
                  <Link href="/free-resources" passHref>
                    <a>Free Resources</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" passHref>
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" passHref>
                    <a>Contact us</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </FooterMenu>
          <Locations>
            <h3>Locations</h3>
            <ul>
              <li>
                <Link href="/annapolis" passHref>
                  <a>Baltimore, MD</a>
                </Link>
              </li>
              <li>
                <Link href="/millersville" passHref>
                  <a>Millersville, MD</a>
                </Link>
              </li>
              <li>
                <Link href="/pasadena" passHref>
                  <a>Pasadena, MD</a>
                </Link>
              </li>
              <li>
                <Link href="/annapolis" passHref>
                  <a>Annapolis, MD</a>
                </Link>
              </li>
              <li>
                <Link href="/severan-park" passHref>
                  <a>Severna park, MD</a>
                </Link>
              </li>
            </ul>
          </Locations>

          <FooterContact>
            <h3>Contact</h3>
            <p>
              <a href="mailto:monica@monicabrowneweddings.com" itemProp="email">
                Email us
              </a>
            </p>
            <p>
              <a itemProp="telephone" href="tel:240-234-2345">
                Call (240) 234-2345
              </a>
            </p>
            <p
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="addressLocality">Bowie, MD</span>
              <span itemProp="postalCode"> 20720</span>
            </p>
          </FooterContact>
        </FooterFoot>
        <LowerFooter>
          <p>Home Septic Pros &copy; {new Date().getFullYear()}</p>
        </LowerFooter>
      </div>
    </>
  )
}

const FooterFoot = styled.footer`
  a {
    color: inherit;
    text-decoration: none;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  padding: 2rem;
  background-color: #dfe6e9;

  .footer-menu nav li {
    list-style: none;
    margin: 0.5rem 0;
  }

  @media (min-width: 768px) {
    display: flex;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
    grid-gap: 20px;
    margin: 0 auto;
    margin-bottom: 0;

    .main-footer {
      display: flex;
      justify-content: space-evenly;
    }
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(6, 1fr);
  }

  .address {
    display: flex;
    justify-content: space-evenly;
    margin: 0.5rem 0;
  }
`

const Decription = styled.div`
  h3 {
    font-size: 1.4rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  max-width: 1140px;
  padding: 2rem 2rem 0 2rem;

  a {
    color: #a29bfe;
    font-weight: 700;

    &:hover {
      color: #101010;
      background-color: #a29bfe;
    }
  }

  p {
    font-size: 1rem;
    text-align: left;
    line-height: 1.6;
  }
`

const FooterMenu = styled('div')`
  max-width: 320px;

  a {
    color: #101010;
    font-weight: 100;
  }

  margin: 2rem 0;

  ul {
    margin: 0;
  }

  li {
    list-style-type: none;
    font-size: 0.9rem;
    margin: 0.5rem 0;
    font-weight: 100;

    a:hover {
      font-weight: 700;
    }
  }

  li @media (min-width: 768px) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  @media (min-width: 1024px) {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }

  @media (min-width: 1440px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`

const FooterHours = styled.div`
  max-width: 360px;

  margin: 2rem 0;

  .office-hours {
    margin-bottom: 1rem;
    display: flex;
    font-size: 0.9rem;
    font-weight: 100;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  @media (min-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  @media (min-width: 1440px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`

const Locations = styled.div`
  width: 180px;

  margin: 2rem 0;

  ul {
    margin: 0;
  }

  li {
    list-style-type: none;
    font-size: 0.9rem;
    margin: 0.5rem 0;
    font-weight: 100;
    width: 150px;
  }

  a:hover {
    font-weight: 700;
  }

  @media (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
`

const FooterContact = styled('div')`
  width: 180px;

  margin: 2rem 0;

  a {
    color: #101010;
    font-weight: 100;
  }

  a:hover {
    font-weight: 700;
    text-decoration: underline;
  }

  p {
    text-align: left;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  @media (min-width: 768px) {
    grid-column: 5 / 7;
    grid-row: 2 / 3;
  }

  @media (min-width: 1024px) {
    grid-column: 5 / 7;
    grid-row: 2 / 3;
  }

  @media (min-width: 1440px) {
    grid-column: 6 / 8;
    grid-row: 2 / 3;
  }
`

const LowerFooter = styled.div`
  padding: 2rem 0;
  background-color: black;
  text-align: center;
  color: #fff;

  p {
    font-size: 1rem;
    margin: 0;
  }
`

export default Footer
