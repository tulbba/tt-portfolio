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
                  I orignally started in the hospitality industry, but since decided to change my
                  career to a new direction. I've been coding now for about two years and I've turned
                  my interest specifically to the front-end. I enjoy designing websites and figuring out
                  new ways of developing them.
                  <br /><br />
                  I did a 2 month internship at a Finnish start-up Jemma, where I was introduced to React
                  for the first time. We used React Native solely for creating an mobile app, where people
                  can sell, buy and loan stuff. Year later I did a 5 month internship at an online marketing
                  company, Rock the Web, in the Netherlands. There I was able to better my skills with design
                  and to develop websites independently with WordPress.
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
