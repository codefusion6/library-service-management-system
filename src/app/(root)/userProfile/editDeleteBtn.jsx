"use client"
import Swal from 'sweetalert2'
import { AiFillDelete } from "react-icons/ai";
import { deleteEditProfile } from "../../../libs/actions/userProfile.action";

const EditDeleteBtn = ({ id }) => {
  const handleEditDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteEditProfile(id);
        console.log(res);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <button onClick={handleEditDelete}>
        <AiFillDelete className="text-3xl text-red-700" />
        <span className="text-white">Delete</span>
      </button>
    </div>
  );
};

export default EditDeleteBtn;
