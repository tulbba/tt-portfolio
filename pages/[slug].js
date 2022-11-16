import { GraphQLClient, gql } from 'graphql-request'
import Link from 'next/link';
import { motion } from 'framer-motion'
import Head from 'next/head'
import { useState } from 'react';

const images = [
  { id: '2', src: '/images/jemma2.jpg' },
  { id: '3', src: '/images/jemma3.jpg' },
  { id: '4', src: '/images/jemma4.png' },
  { id: '5', src: '/images/jemma5.png' },
  { id: '6', src: '/images/jemma6.jpg' },
  { id: '7', src: '/images/jemma7.png' },
  { id: '8', src: '/images/jemma8.jpg' },
  { id: '9', src: '/images/jemma9.png' },
]

const graphql = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cn9g3h043l01tch3eo5fpe/master"
  );
  
const Query = gql`
  query Post($slug: String!) {
    project(where: {slug: $slug}) {
        id
        websiteUrl
        title
        description {
          text
        }
        usedTech
        workDone
        slug
        projectScreenshot {
          url
        }
    }
}
`

const sluglist = gql`
  {
    projects {
        slug
    }
  }
`

export async function getStaticPaths() {
  const { projects } = await graphql.request(sluglist);

  return {
      paths: projects.map((project) => ({ params: {slug: project.slug} })),
      fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphql.request(Query, {slug});
  const project = data.project;

  return {
    props: {
      project
    },
    revalidate: 10,
  };
}

export default function Post({ project }) {
    return (
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease:'easeOut' }}
        className='p-5 container'
        >
          <Head>
            <title>{project.title} | Tuuli Torkkeli</title>
          </Head>
          
          <Link 
            className='uppercase font-bold text-white'
            href="/"
          >
            Go back
          </Link>

        <div className="container mx-auto">

            <section className='mt-14'>
              <h1 className='font-header break-words text-white mb-3 text-4xl sm:text-5xl md:text-6xl'>{project.title}</h1>
              <Link href={project.websiteUrl} target="blank">
                <img className='w-full' src={project.projectScreenshot.url} />
              </Link>
              <p className='border-t-[1px] mt-5 font-body text-white text-1xl sm:text-lg py-4'>
                  {project.workDone}
                </p>
                <p className='border-t-[1px] font-body text-white text-1xl sm:text-lg py-4'>
                  {project.usedTech}
                </p>
                <p className='border-y-[1px] font-body text-white text-1xl sm:text-lg py-4'>
                  {project.description.text}
                </p>
                <Link href={project.websiteUrl}
                      target="blank"
                    >
                  <p className='border-b-[1px] font-body text-white text-1xl sm:text-lg py-4'>Go to the website</p>
              </Link>
            </section>
            {(() => {
              if (project.slug === 'jemma') {
                return (
                  <div>
                    <div className='mt-10 grid md:grid-cols-jemma-desktop gap-6'>
                      {images.map((index) => 
                        <img 
                         // onClick={(event) => handleClick(event, 'hello')} <-- inline arrow function
                          key={index.id}
                          src={index.src}
                          className="object-contain md:object-cover w-full h-72 md:h-96" 
                        /> 
                      )}
                    </div>
                  </div>
                )
              } 
         })()}
          </div>
        </motion.main>
    )
}