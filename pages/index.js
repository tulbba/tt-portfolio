import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Tech from '../components/Tech'
import Header from '../components/Header'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraphQLClient, gql } from 'graphql-request'

const graphql = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cn9g3h043l01tch3eo5fpe/master"
  );
  
const Query = gql`
  query MyQuery {
    projects {
      slug
      id
      title
      workDone
      projectScreenshot {
        url
      }
    }
  }
`
  
export async function getStaticProps() {
  const {projects} = await graphql.request(Query);

  return {
    props: {
      projects,
    },
    revalidate: 10,
  };
}


export default function Home({ projects }) {
  return (
    <motion.main 
        className='mx-auto'
        initial={{ y: '7%', opacity: 0 }}    
        animate={{ y: '0%', opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .7, ease:'easeOut' }}
        >
      <Header />
      <Hero />
      <div className='container w-full h-full flex flex-col md:flex-row-reverse justify-between mt-28 md:mt-40 p-5 sm:mt-10'>
          <div>
            <h2 id="project" className='text-white mb-8 font-header text-3xl sm:text-4xl md:text-5xl'>Projects</h2>
          </div>
             <div className='flex flex-col gap-5 w-full'>
                {projects?.map((project) => (
                  <div key={project.id} className='w-full md:w-3/6 flex flex-col md:flex-row gap-2 mb-5 md:gap-5'>
                      <Link href={project.slug} scroll={false}>
                      <img className='bw-overlay' src={project.projectScreenshot.url} />
                      </Link>
                      <div className='text-white font-body'>
                        <p className='w-60 font-bold text-lg tracking-wide'>{project.title}</p>
                        <p className='text-sm w-56 tracking-wide'>{project.workDone}</p>
                      </div>
                  </div>
                ))}
               </div>
            </div>  
            <About />   
            <Tech />
            <Contact />
    </motion.main>
  )
}

