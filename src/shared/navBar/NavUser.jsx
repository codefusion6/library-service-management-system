'use client'
import { UserAuth } from '@/app/provider/context/AuthContext'
import { Image } from '@nextui-org/react';
import React, { } from 'react'
// import { CgProfile } from 'react-icons/cg';

const NavUser = () => {
    const { user, loading } = UserAuth();
    // console.log(user)
    return (
        <>

            {
                !loading && <Image className='size-10 py-0 px-0 rounded-full' rel="noreferrer" style={{ opacity: "1" }} src={user?.photoURL} width={100} alt={user.displayName} height={100} />
            }

            {/* <CgProfile className="text-4xl" /> */}
        </>
    )
}

export default NavUser