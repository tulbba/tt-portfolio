
const images = [
    { src: '/images/gitlogo.png' },
    { src: '/images/nextlogo.png' },
    { src: '/images/phplogo.png' },
    { src: '/images/reactlogo.png' },
    { src: '/images/tailwindlogo.png' },
    { src: '/images/wplogo.png' },
    { src: '/images/sasslogo.png' },
    { src: '/images/jslogo.png' },
]

export default function Tech() {
    return (
        <div className='container h-[70vh] md:h-[50vh] md:mt-20 w-full flex flex-col justify-center gap-12 mb-32 p-5'>        
              <section className="flex justify-center">
                <h2 className="text-white font-header text-3xl sm:text-4xl md:text-5xl leading-10">
                  Tech I like to use
                </h2>
              </section>
              <section className='grid grid-cols-mobile sm:grid-cols-smdesktop md:grid-cols-lgdesktop md:gap-4 2xl:flex 2xl:gap-10 place-items-center place-content-center'>
                {images.map((index) => 
                    <img 
                        src={index.src}
                        className="bw-overlay w-16 sm:w-20 object-contain" 
                    /> 
                )}
              </section>
        </div>
    )
}
