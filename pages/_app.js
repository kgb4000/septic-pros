import { useEffect } from 'react'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TagManager from 'react-gtm-module'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5JTDWML' })
  }, [])
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
