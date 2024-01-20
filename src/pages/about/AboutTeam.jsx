import Image from 'next/image';
import React from 'react';

const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'CEO',
      imageUrl: 'https://i.ibb.co/VxyDZPj/user2.jpg',
      linkedin: '#',
      facebook: '#',

    },
    {
      id: 2,
      name: 'Jane Smith',
      designation: 'CTO',
      imageUrl: 'https://i.ibb.co/gv2X0vH/user3.jpg',
      linkedin: '#',
      facebook: '#',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      designation: 'Lead Developer',
      imageUrl: 'https://i.ibb.co/D5CTNN3/user2.jpg',
      linkedin: '#',
      facebook: '#',
    },
    {
      id: 4,
      name: 'Alice Williams',
      designation: 'Marketing Manager',
      imageUrl: 'https://i.ibb.co/VxyDZPj/user2.jpg',
      linkedin: '#',
      facebook: '#',
    },
    {
      id: 5,
      name: 'Mark Davis',
      designation: 'UX/UI Designer',
      imageUrl: 'https://i.ibb.co/VxyDZPj/user2.jpg',
      linkedin: '#',
      facebook: '#',
    },
    {
      id: 6,
      name: 'Emily Taylor',
      designation: 'Content Writer',
      imageUrl: 'https://i.ibb.co/VxyDZPj/user2.jpg',
      linkedin: '#',
      facebook: '#',
    },
  ];
  

const AboutTeam = () => {
  return (
<section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: 'url("/images/about/AboutTeam.jpg")' }}>
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="container mx-auto relative z-10">
    <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Team</h2>

    <div className="flex flex-wrap justify-center -mx-4">
      {teamMembers.map((member) => (
        <div key={member.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
              width={200}
              height={300}
            />
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.designation}</p>
            <div className="flex space-x-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                LinkedIn
              </a>
              <a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                Facebook
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

export default AboutTeam;
