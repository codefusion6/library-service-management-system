import TableUser from "@/components/allUserTable/Table";
import UserTable from "@/components/allUserTable/userTable";
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
