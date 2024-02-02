import React from 'react';

const PoliciesAchievements = () => {
  const policies = [
    'Membership Policy',
    'Borrowing Rules',
    'Code of Conduct',
    // Add more policies as needed
  ];

  const achievements = [
    'Increased Circulation by 20% in the Last Year',
    'Digital Catalog Launch',
    'Community Engagement Award 2021',
    // Add more achievements as needed
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#68a74b] to-[#dcde4e] text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Policies and Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hover:bg-white hover:text-black transition duration-300 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Library Policies</h3>
            <ul className="list-disc pl-4">
              {policies.map((policy, index) => (
                <li key={index} className="mb-2">{policy}</li>
              ))}
            </ul>
          </div>
          <div className="hover:bg-white hover:text-black transition duration-300 p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Achievements</h3>
            <ul className="list-disc pl-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="mb-2">{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliciesAchievements;
