import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Header from '../components/Header'

export default function MyApp({ Component, pageProps, router }) {
  const getLayout = Component.getLayout || ((Home) => Home)

  return getLayout (
        <AnimatePresence>
          <Head>
            <title>Tuuli Torkkeli Portfolio</title>
          </Head>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
    )
  }

