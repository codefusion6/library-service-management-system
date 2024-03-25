import { FaPenNib,FaUserGraduate  } from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { SiHatenabookmark } from "react-icons/si";

const HowHelp = () => {
    return (
        <section className='container mx-auto py-5 mb-10'>
            <h2 className="text-center text-3xl font-semibold pb-10">How Can We Help?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-10">
                <div className="text-center">
                    <div className="bg-gray-100 mx-auto flex justify-center items-center w-28 h-28 rounded-full">
                        <FaUserGraduate  className="text-4xl text-green-400" />
                    </div>
                    <p className="py-2 font-semibold">I want to become write </p>
                </div>
                <div className="text-center">
                    <div className="bg-gray-100 mx-auto flex justify-center items-center w-28 h-28 rounded-full">
                        <FaBookReader className="text-4xl text-green-400" />
                    </div>
                    <p className="py-2 font-semibold">I want to write Book</p>
                </div>
                <div className="text-center">
                    <div className="bg-gray-100 mx-auto flex justify-center items-center w-28 h-28 rounded-full">
                        <GiBookCover  className="text-4xl text-green-400" />
                    </div>
                    <p className="py-2 font-semibold">I want to be Member</p>
                </div>
                <div className="text-center">
                    <div className="bg-gray-100 mx-auto flex justify-center items-center w-28 h-28 rounded-full">

                        <SiHatenabookmark className="text-4xl text-green-400" />
                    </div>
                    <p className="py-2 font-semibold">I want to write Blog</p>
                </div>
                <div className="text-center">
                    <div className="bg-gray-100 mx-auto flex justify-center items-center w-28 h-28 rounded-full">

                        <FaPenNib className="text-4xl text-green-400" />
                    </div>
                    <p className="py-2 font-semibold">I want to write for peoples</p>
                </div>
                <div className="text-center">
                    <div className="bg-gray-100 mx-auto flex justify-center items-center w-28 h-28 rounded-full">

                        <FaPenNib className="text-4xl text-green-400" />
                    </div>
                    <p className="py-2 font-semibold">I want to write for peoples</p>
                </div>
                <div className="text-center">
                    <div className="bg-gray-100 mx-auto flex justify-center items-center w-28 h-28 rounded-full">

                        <FaPenNib className="text-4xl text-green-400" />
                    </div>
                    <p className="py-2 font-semibold">I want to write for peoples</p>
                </div>
                <div className="text-center">
                    <div className="bg-gray-100 mx-auto flex justify-center items-center w-28 h-28 rounded-full">

                        <FaPenNib className="text-4xl text-green-400" />
                    </div>
                    <p className="py-2 font-semibold">I want to write for peoples</p>
                </div>
            </div>
        </section>
    )
}

export default HowHelp