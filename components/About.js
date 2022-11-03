import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export default function About() {
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
        transition: { duration: .9 }
      })
    }
    if (!inView) {
        animation.start({
          opacity: 0,
          y: 100
        })
    }
  }, [inView]);

    return (
        <motion.div 
            ref={ref} 
            className='container mt-20 md:mt-32 w-full flex flex-col-reverse md:flex-row-reverse p-5'
            animate={animation}
        >      

              <section className="w-full md:w-1/2 flex items-center">
                <h2 className="text-white font-body text-base lg:text-[1.2rem] md:leading-7">
                  My career in the tech has only began about two years ago, after thinking and
                  trying to figure that what an earth should I do with my life. I have a long working
                  experince in customer service, which is still something I do enjoy doing, but it just 
                  wasn't giving me the fulfillement I was looking for in a career. After I tried some 
                  coding courses that my sister recommended to me, I was blown. You can do SO much with 
                  just a couple lines of code, holy crap! I really started to look into coding and tried
                  to discover now that what I would be interested in. 
                  <br /><br/>
                  I did a 2 month internship at a Finnish start-up Jemma, where I was introduced to React
                  for the first time. We used React Native solely for creating an mobile app, where people
                  can sell, buy and loan stuff. Year later I did a 5 month internship at a online marketing
                  company, Rock the Web, in the Netherlands. There I was able to better my skills with design
                  and to develop websites independently with WordPress.
                </h2>
              </section>

              <section className='w-full mb-8 md:w-1/2 h-full flex flex-col justify-evenly'>
                <h2 id="about" className='font-header text-white text-3xl sm:text-4xl md:text-5xl'>About me</h2>
              </section>

        </motion.div>
    )
}
