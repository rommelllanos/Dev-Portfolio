const metrics = [
  { value: '4+', label: 'Years of Experience' },
  { value: '15+', label: 'Countries Served' },
  { value: '50+', label: 'Completed Projects' },
  { value: '100%', label: 'Client Satisfaction' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-text mb-4">About Me</h2>
            <p className="text-primary-text mb-6">
              I am a results-oriented Software Developer based in La Paz, Bolivia, with a strong background in building and managing web and mobile applications. My expertise spans across the entire development lifecycle, from conception to deployment and maintenance. I am passionate about leveraging technology to solve complex problems and deliver exceptional user experiences.
            </p>
            <p className="text-primary-text">
              With a degree in Systems Engineering and a passion for continuous learning, I have successfully delivered projects for clients in over 15 countries. I am always eager to take on new challenges and collaborate with teams to build innovative products.
            </p>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 md:pl-12">
            <div className="grid grid-cols-2 gap-8">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="text-4xl font-bold text-accent">{metric.value}</p>
                  <p className="text-primary-text">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
