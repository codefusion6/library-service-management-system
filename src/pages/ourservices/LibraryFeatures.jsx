import { FaBook, FaSearch, FaChalkboardTeacher } from 'react-icons/fa'; // Import relevant icons

const LibraryFeatures = () => {
  const featuresData = [
    {
      id: 1,
      icon: <FaBook className="text-3xl mb-4" />,
      title: 'Extensive Book Collection',
      description: 'Explore our vast collection of books covering various genres. Find your favorite reads and discover new ones.',
    },
    {
      id: 2,
      icon: <FaSearch className="text-3xl mb-4" />,
      title: 'Online Catalog & Search',
      description: 'Access our online catalog to search for books, check availability, and place holds. Easily find the books you want.',
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher className="text-3xl mb-4" />,
      title: 'Dedicated Reading Spaces',
      description: 'Enjoy a quiet and comfortable reading environment in our dedicated reading spaces. Ideal for study or leisure reading.',
    },
    // Add more features as needed
  ];

  return (
    <div className="mx-auto max-w-screen-2xl px-4 mt-10 mb-10">
      <h2 className="text-3xl font-serif text-black bg-green-300 text-center p-4">
        Library Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuresData.map((feature) => (
          <div key={feature.id} className="mt-5">
            <div className="text-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryFeatures;
