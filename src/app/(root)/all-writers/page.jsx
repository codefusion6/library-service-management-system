import { getAllWriters } from "@/libs/actions/writer.action";
import React from "react";
import WritersCard from "./WritersCard";

const Allwriters = async () => {
  const allWriters = await getAllWriters();
  // console.log(allWriters);
  return (
    <section>
      <div className="container mx-auto min-h-screen p-5 lg:p-0">
        <h2 className="text-3xl text-center my-5">Our All Writer&apos;s</h2>
        <div className="my-10">
          <WritersCard allWriters={allWriters}></WritersCard>
        </div>
      </div>
    </section>
  );
};

export default Allwriters;
