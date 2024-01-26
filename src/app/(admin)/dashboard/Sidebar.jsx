import Image from "next/image";
import logo from "../../../../public/images/bookflow.png";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

const Sidebar = ({ children }) => {
  return (
    <div>
      <aside className="min-h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-md">
          <div className="p-4 pb-2 flex justify-between items-start">
            <Image
              src={logo}
              alt="Image"
              width={200}
              height={100}
              className="w-32"
            ></Image>
            <button className="p-3 rounded-lg bg-gray-50 hover:bg-slate-100">
              <FaArrowRightArrowLeft className="text-black" />
            </button>
          </div>
          <ul className="flex-1 px-6">{children}</ul>
          <div className="border-r flex p-3">
            <Image
              src="https://i.ibb.co/QNQ491S/tahmima.jpg"
              alt="profile image"
              width={50}
              height={30}
              className="rounded-md"
            />
            <div className="flex justify-between items-center text-black px-3 bg-red-50 w-80 ml-3">
              <div className="leading-4">
                <h2 className="font-semibold ">Priyanka</h2>
                <span classname="text-sm">priyanka@gmail.com</span>
              </div>
              <BsThreeDotsVertical size={20} className="" />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
