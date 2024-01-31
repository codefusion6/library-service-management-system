"use client"
import { Image } from "@nextui-org/react";
import PricingSection from "./PricingSection";
import LibraryServicesSection from "./LibraryServicesSection";
import LibraryFeatures from "./LibraryFeatures";

const servicesData = [
  {
    id: 1,
    title: "Book Borrowing",
    imageSrc: "https://i.ibb.co/pZdhZdJ/Aled-Lewis.jpg",
    description: "Explore our vast collection of books covering various genres. Borrow books for a specified period and enjoy reading at your own pace.",
  },
  {
    id: 2,
    title: "Online Catalog",
    imageSrc: "https://i.ibb.co/Syyy8fP/image-placeholder-title.jpg",
    description: "Access our online catalog to search for books, check availability, and place holds. Our user-friendly catalog makes it easy to discover and reserve your favorite titles.",
  },
  {
    id: 3,
    title: "Reading Spaces",
    imageSrc: "https://i.ibb.co/DCsQhgF/323d5128-0b87-488d-b0a3-162d947a92e6.jpg",
    description: "Enjoy a quiet and comfortable reading environment in our dedicated reading spaces. Whether you need a focused study area or a cozy spot for leisure reading, we have you covered.",
  },
];

const Ourservices = () => {
  return (
<<<<<<< HEAD
    <div className="mt-10 mb-[10vh] dark:bg-black dark:text-white">
      <ServicesSection></ServicesSection>
      <div>
        <div className="text-3xl flex text-center ml-[90vh] mt-[20vh] w-[39vh] mb-10 font-serif text-black bg-green-300">
          <h2 className=" text-center mt-5 mb-2 ml-2">Our best Featured</h2>
          <BsBook className="mt-5 ml-4"></BsBook>
        </div>
        <div className="mx-auto  ml-[15vh] gap-5">
          <div className="grid grid-cols-3 mb-5">
            <div>
              <div>
                <div className="relative group cursor-pointer overflow-hidden duration-500 w-[40vh] h-[40vh] bg-zinc-800 text-gray-50 p-5 transform hover:scale-105 transition-transform ease-in-out">
                  <div className="group-hover:scale-110 w-full h-60 duration-500">
                    <Image
                      className="ml-3"
                      style={{ opacity: 100 }}
                      width={250}
                      height={200}
                      src="https://i.ibb.co/tQzfq6b/main-qimg-ab9f8f3bc0faca483d9d82bb518da7ca-lq.jpg"
                      alt="pic1"
                    />
                  </div>
                  <div className="absolute w-56 left-3 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
                    <div className="absolute -z-10 left-0 w-64 h-60 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
                    <span className="text-xl font-bold text-indigo-500">
                      Our Missing Hearts, Celeste Ng
                    </span>
                    <p className="group-hover:opacity-100 w-56 duration-500 opacity-0 text-gray-300">
                      In a disquietingly familiar dystopian world, a son
                      struggles to find his missing mother, a poet. Celeste Ng
                      tackles bigotry and hatred and in the process demonstrates
                      the necessity of art and love.
                    </p>
                  </div>
                </div>
=======
    <div className="mx-auto max-w-screen-2xl px-4 mt-10 mb-10">
      <h2 className="text-3xl font-serif text-black bg-green-300 text-center p-4">
        Our Services
      </h2>
      <LibraryServicesSection></LibraryServicesSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {servicesData.map((service) => (
          <div key={service.id} className="mt-5">
            <div className="group relative cursor-pointer overflow-hidden duration-300 transform hover:scale-105">
              <div className="group-hover:scale-110">
                <Image
                height={300}
                width={500}
                style={{opacity:100}}
                  className="w-full h-60 object-cover"
                  src={service.imageSrc}
                  alt="img1"
                />
>>>>>>> dc9cffae9103359b38bb7444407727df4a4836d6
              </div>
              <div className="absolute w-full left-0 bottom-0 p-5 bg-black bg-opacity-50 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-xl font-bold">{service.title}</span>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PricingSection></PricingSection>
      <LibraryFeatures></LibraryFeatures>
    </div>
  );
};

export default Ourservices;
