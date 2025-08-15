const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'GraphQL',
  'SQL & NoSQL',
  'Docker',
  'AWS',
  'CI/CD',
];

const Skills = () => {
  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="bg-gray-700 text-primary-text px-4 py-2 rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
