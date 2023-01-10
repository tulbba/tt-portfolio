import Image from "next/image";

export default function Hero() {
  return (
    <div className="container flex flex-col h-full md:flex-row md:h-screen gap-10 md:gap-0 p-5">
      <section className="relative w-full mt-20 md:mt-34 lg:mt-14 2xl:mt-36">
        <h1 className="font-header text-white mb-5 text-5xl sm:text-8xl md:text-8xl lg:text-9xl uppercase break-words">
          Tuuli Torkkeli
        </h1>
        <h2 className="font-body text-white text-lg w-full leading-6 md:text-2xl md:pt-5 md:pr-6 lg:pr-0 md:leading-8 md:w-full">
          Hello! My name is Tuuli, originally from Finland, but based currently
          in the Netherlands. I am a developer finished with school and now
          looking for new opportunities where I can show and improve my skills
          as a designer and front-end developer.
        </h2>
        <div className="mt-10">
          <a
            href="mailto:tuuli.torkkeli@gmail.com"
            className="border border-white mt-5 md:mt-10 py-4 px-6 rounded-full w-2/6 sm:w-1/3 xl:w-1/4 hover:bg-white text-white font-bold text-[1.3rem] sm:text-2xl hover:text-black"
          >
            <button>Let's talk</button>
          </a>
        </div>
      </section>
      <section className="min-[425px]:h-[60vh] min-[525px]:h-[65vh] w-full md:h-full flex flex-col items-center md:items-end md:justify-end">
        <div className="w-4/6 sm:w-1/3 h-full sm:h-3/4 md:h-1/2 md:w-full xl:w-1/2 relative">
          <Image
            className="object-cover rounded-t-full"
            src="/images/tuuli-img.jpg"
            fill
          />
        </div>
      </section>
    </div>
  );
}
