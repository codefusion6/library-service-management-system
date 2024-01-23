"use client"

import { usePathname } from 'next/navigation';
import React from 'react';
import { Navbar } from '@/shared/Navbar';
import Footer from '@/shared/Footer';

const NavFootProvider = ({ children }) => {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default NavFootProvider;