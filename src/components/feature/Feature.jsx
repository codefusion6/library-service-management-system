import Image from 'next/image';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { TypeAnimation } from "react-type-animation";
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-500" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
  }

  return stars;
};

const Feature = ({ books }) => {
  return (
    <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
        <TypeAnimation
            sequence={["", 1000, "Featured Books", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
          
          </h1>
          
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books?.map((book, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md">
            <Image
                src={book.book.image}
                alt={book.book.name}
                className="mb-4 w-full h-auto object-cover"
                layout="responsive"
                height={400}
                width={200}
                />
            <h2 className="text-xl font-bold mb-2">{book.book.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{book.book.type}</p>
            <p className="text-sm text-gray-600 mb-2">Author: {book.book.createdBy}</p>
            <p className="text-sm text-gray-600 mb-2">Price: {book.book.price}</p>
            <div className="flex items-center mb-2">
              {renderStars(book.book.starMarking)}
              <p className="text-sm text-gray-600 ml-1">{book.book.starMarking}</p>
            </div>
            <button className="bg-primaryColor text-white px-4 py-2 rounded-md">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
