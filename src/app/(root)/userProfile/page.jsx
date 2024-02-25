// "use client"
import Profile from "@/components/userProfile/Profile";
import { getUserProfile } from "@/libs/actions/userProfile.action";

const userProfile = async () => {
  const editUserData = await getUserProfile();
  // console.log(editUserData);

  return (

    <div className="min-h-screen mt-32">
      <Profile />
    </div>
  );
};

export default userProfile; 
