import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Tech from '../components/Tech'
import Header from '../components/Header'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraphQLClient, gql } from 'graphql-request'


export default function test() {
  return (
    <main className='mx-auto'>
        <motion.div
            className='bg-orange h-screen w-screen'
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{ duration: .9, ease:'easeInOut' }}
        >
        </motion.div>
    </main>
  )
}

