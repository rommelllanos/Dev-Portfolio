import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-background text-primary-text pt-20">
      <div className="container mx-auto px-6 text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-secondary-text mb-4">
          Hi, I'm Rommel Llanos
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          A passionate Software Developer with a knack for creating elegant and efficient solutions.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#contact"
            className="bg-accent text-secondary-text px-6 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="/Rommel Llanos CV - 230625 ENG.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent text-accent px-6 py-3 rounded-md hover:bg-accent hover:text-secondary-text transition-colors duration-300"
          >
            My Resume
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden shadow-lg">
          <Image
            src="/profile.jpg" // Placeholder for profile image
            alt="Rommel Llanos"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
