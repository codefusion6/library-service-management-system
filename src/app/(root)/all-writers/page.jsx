import { getAllWriters } from "@/libs/actions/writer.action";
import React from "react";

const Allwriters = async () => {
  const allWriters = await getAllWriters()
  console.log(allWriters);
  return (
    <div className="mt-5">
      <h2 className="text-3xl text-center">All Writers With Us</h2>
    </div>
  );
};

export default Allwriters;
