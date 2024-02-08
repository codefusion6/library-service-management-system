import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'Priyanka Das Dipa',
    designation: 'Front End Developer',
    imageUrl: 'https://i.ibb.co/f1R3Wyz/user.jpg',
    linkedin: 'https://www.linkedin.com/in/priyanka-das-dipa-58327b285/',
    facebook: 'https://www.facebook.com/priyankadas.dipa.7',

  },
  {
    id: 2,
    name: 'Arina Huque Rafa',
    designation: 'Front End Developer',
    imageUrl: 'https://i.ibb.co/f1R3Wyz/user.jpg',
    linkedin: '#',
    facebook: '#',

  },
  {
    "id": 3,
    "name": "Sumon Chandra Paul",
    "designation": "Full Stack End Developer",
    "imageUrl": "https://i.ibb.co/gTBx7qs/sumon.png",
    "linkedin": "https://www.linkedin.com/in/sumonpaul5/",
    "facebook": "https://www.facebook.com/sumonpaul55"
  },
  {
    id: 4,
    name: 'Probesh Deb Nath ',
    designation: 'MERN Stack Developer',
    imageUrl: 'https://i.ibb.co/686tyHs/probesh-deb-nath.jpg',
    linkedin: 'https://bd.linkedin.com/in/probeshnath',
    facebook: 'https://www.facebook.com/probeshdebnath20',
  },
  {
    id: 5,
    name: 'Sabbir Ahammed',
    designation: 'Back End Developer',
    imageUrl: 'https://i.ibb.co/VxyDZPj/user2.jpg',
    linkedin: '#',
    facebook: '#',
  },
  {
    id: 6,
    name: 'Ranit Sarker',
    designation: 'Front End Developer',
    imageUrl: 'https://i.ibb.co/FbN1hfC/ranit.png',
    linkedin: 'https://www.facebook.com/Ranit.Sarker',
    facebook: 'https://www.facebook.com/Ranit.Sarker',

  },
];

const AboutTeam = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto relative z-10">
      <h2 className="text-xl font-semibold mb-8 text-center">
        <span className="bg-gradient-to-r from-[#68a74b] to-[#dcde4e] text-transparent text-white px-4 py-2 rounded-sm">
          Meet Our Team
        </span>
      </h2>


      <div className="flex flex-wrap justify-center -mx-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-[#68a74b]">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.designation}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#68a74b] hover:text-green-700 text-xl"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#68a74b] hover:text-green-700 text-xl">
                      <FaFacebook />
                    </a>
                  </div>
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