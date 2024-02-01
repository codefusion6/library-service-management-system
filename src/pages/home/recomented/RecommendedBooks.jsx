import Image from "next/image";
import React from "react";
import "./card.styles.css";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";

const RecommendedBooks = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <p className="text-2xl font-bold pb-2">Recommenced Book&apos;s </p>
        <hr />
        <div className="">
          <Card className="py-1 border">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl p-10"
                src="https://i.ibb.co/ZHNxKhm/image1.jpg"
                width={270}
                height={250}
              />
            </CardBody>
            <div className="border-b-2 pb-2 border-black"></div>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold"><FaStar></FaStar></p>
              <h4 className="font-bold text-large">Frontend Radio</h4>
              <p className="text-default-500 font-bold">$ 90.00</p>
            </CardHeader>
            <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">hdjsdh</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RecommendedBooks;
{
  /* <div>
            <div className="p-4 border border-gray-300 rounded-md">
              <div class="">
                <div class="">
                  <Image
                    src="https://i.ibb.co/ZHNxKhm/image1.jpg"
                    alt="book"
                    className="mb-4 w-full h-auto object-cover"
                    width={200}
                    height={400}
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-2">Agnibina</h2>
              <p className="text-sm text-gray-600 mb-2">Kabbo Grantha</p>
              <p className="text-sm text-gray-600 mb-2">
                Author: Kazi Nazrul Islam
              </p>
              <div className="flex items-center mb-2"></div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div> */
}
