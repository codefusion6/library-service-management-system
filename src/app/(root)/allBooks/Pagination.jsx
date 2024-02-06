import { Button } from "@nextui-org/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({ totalPage = 5 }) => {
  return (
    <div className="flex justify-center text-center gap-5 my-5">
      <IoIosArrowBack className="text-4xl font-bold" />
      {[...Array(totalPage)].map((element, index) => (
        <Button
          key={index}
          size="sm"
          className="text-xl bg-green-400 hover:bg-green-700 px-3 rounded-md"
        >
          {index + 1}
        </Button>
      ))}

      <IoIosArrowForward className="text-4xl font-bold" />
    </div>
  );
};

export default Pagination;
