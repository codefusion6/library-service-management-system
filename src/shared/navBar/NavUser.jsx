'use client'
import { UserAuth } from '@/app/provider/context/AuthContext'
import { getOneUser } from '@/libs/actions/user.actions';
import { Image } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'

const NavUser = () => {
  const { user, loading } = UserAuth();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const fetchedUserDetails = await getOneUser(user?.email);
        // Update state with the user details from the database
        setUserDetails(fetchedUserDetails);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    // Fetch user details when the component mounts
    if (user?.email) {
      fetchUserDetails();
    }
  }, [user]);

  return (
    <>
      {!loading && (
        <Image
          className='size-10 py-0 px-0 rounded-full'
          rel="noreferrer"
          style={{ opacity: "1" }}
          src={user?.photoURL || userDetails?.photoURL}
          width={100}
          alt={user?.displayName || userDetails?.name}
          height={100}
        />
      )}
    </>
  );
};

export default NavUser;
