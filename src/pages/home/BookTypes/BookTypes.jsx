import React from "react";

import "./bookType.module.css";
import Link from "next/link";

const BookTypes = () => {
  // const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      subtitle: "Subtitle 1",
      title: "Book Type 1",
      description: "Description for Book Type 1",
    },
    {
      id: 2,
      subtitle: "Subtitle 1",
      title: "Book Type 1",
      description: "Description for Book Type 1",
    },
    {
      id: 3,
      subtitle: "Subtitle 1",
      title: "Book Type 1",
      description: "Description for Book Type 1",
    },
    {
      id: 4,
      subtitle: "Subtitle 1",
      title: "Book Type 1",
      description: "Description for Book Type 1",
    },
  ];

  return (
    <section className="w-full">
      <div
        style={{ backgroundImage: 'url("https://i.ibb.co/X2HZbX8/bb.jpg")' }}
        className="w-full h-[400px] my-10 bg-fixed"
      >
        <div className="bg-black opacity-70 w-full h-full flex flex-col justify-center items-center text-white space-y-4">
          <h2 className="text-3xl md:text-5xl mb-4">Best Books</h2>
          <p>Make your mind refresh and friends a book</p>
          
          {/* <button className="bg-gradient-to-r from-[#68a74b] to-[#dcde4e] rounded-md mt-2 capitalize py-2.5 px-7">
            <span className="font-medium text-white">Become A Member</span>
          </button> */}
          <Link href="/pricing">
          <button className="bg-gradient-to-r from-[#298959] to-[#c9db21]  w-[30vh] hover:scale-95 duration-300 h-16  text-white relative overflow-hidden group z-10 rounded-lg"><span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-gradient-to-r from-[#395f8a] to-[#74aae7] rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-sky-900 rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span><span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">Buy Subcription</span>Become A Member</button>

          </Link>
        </div>
      </div>
    </section>
  );
};

export default BookTypes;
