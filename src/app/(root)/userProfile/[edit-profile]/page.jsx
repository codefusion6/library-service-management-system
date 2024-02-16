import EditProfileForm from "@/components/userProfile/editProfile/EditProfileForm";

const page = async ({ params }) => {

  console.log(params);

  return (
    <div>
      <EditProfileForm></EditProfileForm>
    </div>
  );
};

export default page;
