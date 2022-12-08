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
                  I originally started in the hospitality industry back in 2012, but later decided to do a complete 
                  one-eighty with my career. I enjoy the excitement and endless possibilities of web development and how learned
                  technigues can be utilized with different projects. I concentrate on making websites visually attractive, responsive and browser
                  compatible. I am also interested in digital marketing and love to learn more about it.
                  I especially enjoy using Figma for the design, WordPress or React for developing and Vercel for deployment (React.js/Next.js projects mostly). 
                  <br /><br />
                  If I'm not making websites, I'm probably playing guitar or spending time with my dog, Murphy.
                  Playing video games is also my passion. Games that I've really enjoyed recently are Red Dead Redemption 2,
                  Detroit: Become Human and Horizon Zero Dawn, but my all-time favorite is the Spyro series.
                </h2>
              </section>

              <section className='w-full mb-8 md:w-1/2 h-full flex flex-col justify-evenly'>
                <h2 id="about" className='font-header text-white text-3xl sm:text-4xl md:text-5xl'>About me</h2>
              </section>

        </motion.div>
    )
}
