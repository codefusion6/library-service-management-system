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
                  style={{ opacity: 100 }}
                  className="w-full h-60 object-cover"
                  src={service.imageSrc}
                  alt="img1"
                />
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
