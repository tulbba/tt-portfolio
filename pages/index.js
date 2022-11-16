import Link from 'next/link'

import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Tech from '../components/Tech'
import Layout from '../components/Layout'
import NestedLayout from '../components/NestedLayout'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import { useInView } from 'react-intersection-observer'

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
  // ref we hook in to an element we want to monitor
  // inView checks if that element is in view
  const { ref, inView } = useInView({
    triggerOnce: true
  });
  
  const animation = useAnimation();

  useEffect(() => {
    // if inView is in view, start the animation
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: .9 },
      })
    }
    if (!inView) {
      // if it is not in view, do another animation
        animation.start({
          opacity: 0,
          y: 100,
        })
    }
  }, [inView]);

  return (
    <motion.main 
      initial={{ y: '5%', opacity: 0 }}
      animate={{ y:'0%', opacity: 1 }}
      transition={{ duration: .7, ease:'easeOut' }}
      className='mx-auto'
    >
      <Hero />
      <motion.div
         className='container w-full h-full flex flex-col md:flex-row-reverse justify-between mt-28 md:mt-40 p-5 sm:mt-10'
         ref={ref}
         animate={animation}   
      >
          <div>
            <h2 id="project" className='text-white mb-8 font-header text-3xl sm:text-4xl md:text-5xl'>Projects</h2>
          </div>
             <div className='flex flex-col gap-6 w-full'>
                {projects?.map((project) => (
                  <div key={project.id} className='w-full h-1/2 md:w-full lg:w-5/6 2xl:w-2/3 flex flex-col md:flex-row gap-2 md:gap-5'>
                      <Link href={project.slug}>
                        <img className='rounded-t-3xl bw-overlay h-52 sm:h-64 md:h-56 xl:h-80 2xl:h-96 w-screen object-cover' src={project.projectScreenshot.url} />
                      </Link>
                      <div className='text-white font-body md:mt-5 mb-4 md:mb-0'>
                        <p className='w-60 font-bold text-lg md:text-xl tracking-wide'>{project.title}</p>
                        <p className='text-sm w-56 md:text-base tracking-wide'>{project.workDone}</p>
                      </div>
                  </div>
                ))}
               </div>
            </motion.div>  
            <About />   
            <Tech />
            <Contact />
    </motion.main>
  )
}

Home.getLayout = function getLayout(Home) {
  return (
    <Layout>
      <NestedLayout>{Home}</NestedLayout>
    </Layout>
  )
}

