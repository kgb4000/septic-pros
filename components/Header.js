import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  const [click, SetClick] = useState(false)

  return (
    <>
      <Head>
        <div className="logo">
          <Link href="/">
            <a>Home Septic Pros</a>
          </Link>
        </div>
        <div className="menu-btn">
          <Link href="#">
            <a>Menu</a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <Link href="/septic-services">
                <a>Sevices</a>
              </Link>
            </li>
            <li>
              <a>Resources</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </nav>
      </Head>
    </>
  )
}

const Head = styled.header`
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;

  max-width: 1500px;
  padding: 0 1.2rem;
  margin: 0 auto;

  .logo {
    font-weight: 700;
    letter-spacing: 1px;
  }

  nav {
    display: none;
  }

  ${
    '' /* nav ul {
    display: none;
    margin: 0;

    li {
      list-style-type: none;
      margin-left: 1rem;
      margin-bottom: 0;
      line-height: inherit;
      font-size: 1.2rem;
      color: #fff;
    }
  } */
  }

  @media (min-width: 768px) {
    .logo {
      font-size: 2rem;
      font-weight: 900;
    }

    nav ul {
      display: flex;
      margin: 0;

      li {
        list-style-type: none;
        margin-left: 1rem;
      }
    }
  }
`
