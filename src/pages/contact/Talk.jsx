import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
const Talk = () => {
  return (
    <div className="container flex flex-col items-center gap-16">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center gap-3 px-8 py-8 bg-white rounded-3xl shadow-main">
          <span>
          <HiOutlineMailOpen className="h-8 w-40 " />
           
          </span>
          <p className="text-2xl font-extrabold text-dark-grey-900">Email</p>
          <p className="text-base leading-7 text-dark-grey-600">
            Contact us at
          </p>
          <a
            className="text-lg font-bold text-purple-blue-500"
            href="mailto: hello@loopple.com"
          >
            teamcodefuision24@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
          <span>
          <FaPhone className="h-8 w-40 " />
            
          </span>
          <p className="text-2xl font-extrabold text-dark-grey-900">Phone</p>
          <p className="text-base leading-7 text-dark-grey-600">
            Reach out to us by phone
          </p>
          <a
            className="text-lg font-bold text-purple-blue-500"
            href="tel:+516-486-5135"
          >
            +088 013072629**
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
          <span>
          <IoLocation  className="h-8 w-40 "/>
            
          </span>
          <p className="text-2xl font-extrabold text-dark-grey-900">Location</p>
          <p className="text-base leading-7 text-dark-grey-600">
            Find us at our office
          </p>
          <a
            className="text-lg font-bold text-purple-blue-500"
            target="_blank"
            href="https://goo.gl/maps/QcWzYETAh4FS3KTD7"
          >
            Dhaka , Bangladesh
          </a>
        </div>
      </div>
    </div>
  );
};

export default Talk;