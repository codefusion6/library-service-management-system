// // Import the Image component from next/image
// import Image from 'next/image';
// import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

// const renderStars = (rating) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;

//   const stars = [];
//   for (let i = 0; i < fullStars; i++) {
//     stars.push(<FaStar key={i} className="text-yellow-500" />);
//   }

//   if (hasHalfStar) {
//     stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
//   }

//   return stars;
// };

// const Feature = ({ books }) => {
//   return (
//     <section className='py-8'>
//       <div className="container mx-auto">
//         <h1 className="text-3xl font-bold text-center mb-8">Featured Books</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {books?.map((book, index) => (
//             <div key={index} className="p-4 border border-gray-300 rounded-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 relative">
//               <div className="aspect-w-4 aspect-h-5">
//                 <Image
//                   src={book.book.image}
//                   alt={book.book.name}
//                   className="rounded-xl object-cover max-h-96"
//                   layout="responsive"
//                   width={250}
//                   height={384}
//                 />
//               </div>
//               <h2 className="text-xl font-bold mb-2 pt-2">{book.book.name}</h2>
//               <p className="text-sm mb-2">{book.book.type}</p>
//               <p className="text-sm mb-2">Author: {book.book.createdBy}</p>
//               <p className="text-sm mb-2">Price: {book.book.price}</p>
//               <div className="flex items-center mb-2">
//                 {renderStars(book.book.starMarking)}
//                 <p className="text-sm ml-1">{book.book.starMarking}</p>
//               </div>
//               <button className="text-white bg-gradient-to-r from-[#68a74b] to-[#dcde4e] rounded-md mt-2 capitalize py-2.5 px-7 transition duration-300 transform hover:scale-105">Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Feature;
