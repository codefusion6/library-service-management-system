import UserTable from "@/components/allUserTable/userTable";
import { getAllUser } from "@/libs/actions/user.actions";
import React from "react";

const AllUsers = async () => {
  const allUser = await getAllUser();
  return (
    <div className="p-4">
      <div className="">
        <UserTable allUser={allUser}></UserTable>
      </div>
    </div>
  );
};

export default AllUsers;
