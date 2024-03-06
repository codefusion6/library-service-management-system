import React from 'react';

const TechnologyStack = () => {
  const technologies = [
    'React',
    'Next.JS',
    'Tailwind CSS',
    'FireBase Authentication',
    'MongoDB',
    'Mongoose',
    'Tanstack Query',
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
          <h2 className="text-xl font-semibold mb-8 text-center">
              <span className="bg-gradient-to-r from-[#4b79a7] to-[#4ebcde] text-transparent text-white px-4 py-2 rounded-sm">Technology Stack</span>
            </h2>
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
