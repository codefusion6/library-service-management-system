import React from 'react';

const TechnologyStack = () => {
  const technologies = [
    'Next.js',
    'React',
    'MongoDB',
    'Mongoose',
    'Tanstack Query',
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Technology Stack</h2>
        <ul className="flex flex-wrap justify-center">
          {technologies.map((tech, index) => (
            <li
              key={index}
              className="bg-white text-gray-800 px-6 py-3 m-2 rounded-full shadow-md"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechnologyStack;
