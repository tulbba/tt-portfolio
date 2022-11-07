import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const images = [
    { id: '1', src: '/images/gitlogo.png' },
    { id: '2', src: '/images/nextlogo.png' },
    { id: '4', src: '/images/reactlogo.png' },
    { id: '5', src: '/images/tailwindlogo.png' },
    { id: '6', src: '/images/wplogo.png' },
    { id: '7', src: '/images/sasslogo.png' },
    { id: '8', src: '/images/jslogo.png' },
    { id: '8', src: '/images/angularlogo.png' },
]

export default function Tech() {
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
           className='container h-[70vh] md:h-[50vh] md:mt-20 w-full flex flex-col justify-center gap-12 p-5 md:mb-24'
           ref={ref}
           animate={animation}
        >        
              <section className="flex justify-center">
                <h2 className="text-white font-header text-3xl sm:text-4xl md:text-5xl leading-10">
                  Tech I like to use
                </h2>
              </section>
              <section className='grid grid-cols-mobile sm:grid-cols-smdesktop md:grid-cols-lgdesktop md:gap-4 2xl:flex 2xl:gap-10 place-items-center place-content-center'>
                {images.map((index) => 
                    <img 
                        key={index.id}
                        src={index.src}
                        className="bw-overlay w-16 sm:w-20 object-contain" 
                    /> 
                )}
              </section>
        </motion.div>
    )
}
