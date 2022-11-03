import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Header from '../components/Header'

function MyApp({ Component, pageProps, router}) {
  return (
        <AnimatePresence>
          <Header />
          <Head>
            <title>Tuuli Torkkeli Portfolio</title>
          </Head>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
    )
  }

export default MyApp
