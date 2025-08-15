import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a custom CMS and payment gateway integration.',
    image: '/project1.jpg', // Placeholder image
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively.',
    image: '/project2.jpg', // Placeholder image
    tags: ['Next.js', 'GraphQL', 'TypeScript', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile app for a leading financial institution.',
    image: '/project3.jpg', // Placeholder image
    tags: ['React Native', 'Firebase', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-text mb-12">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-56 w-full">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary-text mb-2">{project.title}</h3>
                <p className="text-primary-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-xs text-primary-text px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.liveUrl} className="text-accent hover:underline">
                    Live Demo
                  </a>
                  <a href={project.repoUrl} className="text-accent hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
