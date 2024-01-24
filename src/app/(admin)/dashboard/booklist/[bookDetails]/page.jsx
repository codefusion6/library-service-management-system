import Link from "next/link";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

const BookDetails = () => {
  return (
    <div>
      <h2 className="text-3xl text-center my-5 font-medium text-green-700">
        Details Page
      </h2>
      <div>
        <Card className="p-6 border hover:border-green-600 text-center shadow-xl rounded-lg">
          <div className="flex">
            <CardBody className="overflow-visible">
              <Image
                alt="Card Image"
                className="object-cover rounded-xl"
                src="https://i.ibb.co/7KTnVdz/book1.gif"
                width={270}
                height={270}
              />
            </CardBody>
            <CardHeader className=" flex-col items-start">
              <p className="text-lg uppercase font-bold">
                ছোটদের নির্বাচিত নজরুল
              </p>

              <h4 className="font-bold text-large">
                <span className="text-base font-normal">Writer: </span>Kazi
                Nazrul Islam
              </h4>
            </CardHeader>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BookDetails;
