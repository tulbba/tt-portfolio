import Image from 'next/image'

export default function Contact() {
    return (
        <div id='contact' className="h-full bg-white container">   
            <section className='w-full flex flex-col items-center p-10 2xl:mb-10'>
                <h2 className='text-black font-header text-2xl md:text-4xl p-5 text-center mb-5'>Thank you for your time :)</h2>
                <p className='font-body text-center'>Send me a message if you want, I'd like that!</p>
                <div className='font-body text-lg flex flex-row gap-10 mt-10'>
                    <a className='hover:font-bold' href="mailto:tuuli.torkkeli@gmail.com">Email</a>
                    <a className='hover:font-bold' target="blank" href="https://www.linkedin.com/in/tuulitorkkeli/">Linkedin</a>
                    <a className='hover:font-bold' target="blank" href="https://github.com/tulbba">GitHub</a>
                </div>
            </section>
        </div>
    )
}


  
