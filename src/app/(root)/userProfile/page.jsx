// "use client"
/* eslint-disable react-hooks/rules-of-hooks */
import Profile from "@/components/userProfile/Profile";
import { getUserProfile } from "@/libs/actions/userProfile.action";

const userProfile = async() => {
  const editUserData = await getUserProfile();
  console.log(editUserData);
  // const [editUserData, setEditUserData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userData = await getUserProfile();
  //       setEditUserData(userData);
  //       console.log(userData);
  //     } catch (error) {
  //       console.error("Error fetching user profile:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    // <div className="min-h-screen mt-32">
    //   <Profile editUserData={editUserData}></Profile>
    // </div>
    <div className="min-h-screen mt-32">
      <Profile />
    </div>
  );
};

export default userProfile; 
