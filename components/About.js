import Image from "next/image"

export default function About() {
    return (
        <div className='container mt-20 md:mt-32 w-full flex flex-col-reverse md:flex-row-reverse p-5'>      

              <section className="w-full md:w-1/2 flex items-center">
                <h2 className="text-white font-body text-base lg:text-[1.2rem] md:leading-7">
                  My career in the tech has only began about two years ago, after thinking and
                  trying to figure that what an earth should I do with my life. I have a long working
                  experince in customer service, which is still something I do enjoy doing, but it just 
                  wasn't giving me the fulfillement I was looking for in a career. After I tried some 
                  coding courses that my sister recommended to me, I was blown. You can do SO much with 
                  just a couple lines of code, holy crap! I really started to look into coding and tried
                  to discover now that what I would be interested in. 
                </h2>
              </section>

              <section className='w-full mb-8 md:w-1/2 h-full flex flex-col justify-evenly'>
                <h2 id="about" className='font-header text-white text-3xl sm:text-4xl md:text-5xl'>My story</h2>
              </section>

        </div>
    )
}
