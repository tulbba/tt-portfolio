import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Header from '../components/Header'

function MyApp({ Component, pageProps, router }) {
  return (
      <AnimatePresence mode='wait'>
        <Header />
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
  )
}

export default MyApp
