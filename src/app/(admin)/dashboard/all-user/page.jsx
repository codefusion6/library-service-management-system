
import UserPage from "@/components/modal/UserPage";
import withAuth from "@/middleware/withAuth";
import React from "react";

const AllUser = () => {
  return (
    <div>
      <UserPage></UserPage>
    </div>
  );
};

export default AllUser;
