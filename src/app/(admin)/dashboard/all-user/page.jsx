import UserTable from "@/components/allUserTable/userTable";
import UserPage from "@/components/modal/UserPage";
import React from "react";

const AllUsers = () => {
  return (
    <div className="p-4">
      <div className="">
        <UserTable></UserTable>
      </div>
    </div>
  );
};

export default AllUsers;
