import Swal from 'sweetalert2';
import { AiFillDelete } from 'react-icons/ai';
import { deleteUser } from '@/libs/actions/user.actions';

const UserDeleteBtn = ({ userId }) => {
  const handleDelete = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteUser(userId);
        console.log(res);
        Swal.fire({
          title: 'Deleted!',
          text: 'The user has been deleted.',
          icon: 'success',
        });
      }
    });
  };

  return (
    <button onClick={handleDelete}>
      <AiFillDelete className="text-3xl text-red-700" />
      <span className="text-white">Delete</span>
    </button>
  );
};

export default UserDeleteBtn;
