
import AboutBanner from '@/pages/about/AboutBanner';
import AboutMission from '@/pages/about/AboutMission';
import AboutTeam from '@/pages/about/AboutTeam';
import React from 'react';
import User from '@/libs/database/models/userModel/user';
import { connectDB } from '@/libs/database/MongoConnect';
import toast from 'react-hot-toast';
import { revalidatePath } from 'next/cache';
const AboutPage = async () => {
    const addDemoUser = async (formData) => {
      "use server"
      try {
        await connectDB();
        // const user = {
        //   name: formData.get("user"),
        //   email: formData.get("email"),
        // }
        const result = await User.find();
        // if (result.success) {
        //   toast.success("Success")
        // }
        console.log(result);
        return {
          success: true,
        }
      } catch (error) {
        console.log(error);
      }
    }
  

  console.log(addDemoUser);
  return (
    <div>
      <AboutBanner></AboutBanner>
      <AboutMission></AboutMission>
      <AboutTeam></AboutTeam>
      <form action={addDemoUser}>
        <input type="text" name="user" id="" />
        <input type="email" name="email" id="" />
        <button className='px-5 py-2.5 bg-red-500 rounded-sm' type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AboutPage;