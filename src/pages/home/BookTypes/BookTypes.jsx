
import React from "react";

import "./bookType.module.css";

const BookTypes = () => {
<<<<<<< HEAD
  // const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      subtitle: 'Subtitle 1',
      title: 'Book Type 1',
      description: 'Description for Book Type 1',
    },
    {
      id: 2,
      subtitle: 'Subtitle 1',
      title: 'Book Type 1',
      description: 'Description for Book Type 1',
    },
    {
      id: 3,
      subtitle: 'Subtitle 1',
      title: 'Book Type 1',
      description: 'Description for Book Type 1',
    },
    {
      id: 4,
      subtitle: 'Subtitle 1',
      title: 'Book Type 1',
      description: 'Description for Book Type 1',
    },

  ];

  return (
    <section className='w-full'>
      <div style={{ backgroundImage: 'url("https://i.ibb.co/X2HZbX8/bb.jpg")' }} className='w-full h-[400px] my-10 bg-fixed'>
        <div className='bg-black opacity-70 w-full h-full flex flex-col justify-center items-center text-white space-y-4'>
          <h2 className='text-3xl md:text-5xl mb-4'>Best Books</h2>
=======
  return (
    <section className="w-full pb-5">
      <div
        style={{ backgroundImage: 'url("https://i.ibb.co/X2HZbX8/bb.jpg")' }}
        className="w-full h-[350px] my-10"
      >
        <div className="bg-black opacity-80 w-full h-full flex flex-col justify-center items-center text-white ">
          <h2 className="text-3xl md:text-5xl mb-4">Best Books</h2>
>>>>>>> 96d5fdff2b36c174749b220deeac908a2bd019fb
          <p>Make your mind refresh and friends a book</p>
          <button className="bg-gradient-to-r from-[#68a74b] to-[#dcde4e] rounded-md mt-2 capitalize py-2.5 px-7">
            <span className="font-medium text-white">Become A Member</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookTypes;
