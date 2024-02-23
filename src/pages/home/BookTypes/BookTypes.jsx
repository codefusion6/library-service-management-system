// BookTypes.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./bookType.module.css"

const BookTypes = () => {
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
          <p>Make your mind refresh and friends a book</p>
          <button className='bg-gradient-to-r from-[#68a74b] to-[#dcde4e] rounded-md mt-2 capitalize py-2.5 px-7'><span className="font-medium text-white">Become A Member</span></button>
        </div>
      </div>
      {/* <div className='grid grid-cols-2 gap-4'>
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            className='bg-blue-200 p-4 cursor-pointer'
            onClick={() => setSelectedId(item.id)}
          >
            <h5>{item.subtitle}</h5>
            <h2>{item.title}</h2>
          </motion.div>
        ))}
      </div> */}

      {/* <AnimatePresence>
        {selectedId && (
          <motion.div
            key={selectedId}
            className='modal-overlay'
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={selectedId}
              layoutId={selectedId}
              className='modal-content'
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicked inside
            >
              <h5>{items.find((item) => item.id === selectedId)?.subtitle}</h5>
              <h2>{items.find((item) => item.id === selectedId)?.title}</h2>
              <p>{items.find((item) => item.id === selectedId)?.description}</p>
              <button onClick={() => setSelectedId(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
};

export default BookTypes;
