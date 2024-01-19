/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link'
import { FaBars } from "react-icons/fa6";
import logo from '../../public/images/bookflow.png'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scroll) {
        setScroll(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  const user = false;

  return (
    <div className={`fixed w-full z-50 ${scroll ? 'bg-black shadow-md text-white' : 'bg-transparent'}`}>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-3 py-3'>
        <Link href="/">
          <Image className="max-w-[200px]" src={logo} alt="our logo" width={200} height={100} />
        </Link>
        <div>
          <ul className='gap-6 hidden md:flex'>
            <li><Link href="/" className='text-white'>Home</Link></li>
            <li><Link href="/about" className='text-white'>About Us</Link></li>
            <li><Link href="/contact" className='text-white'>Contact</Link></li>
          </ul>
        </div>
        <div className='flex gap-4 relative items-center'>
          {user ? (
            <img className='w-10 h-10 rounded-full' src="https://reputationprotectiononline.com/wp-content/uploads/2022/04/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" />
          ) : (
            <>
              <button className={`py-2 px-3 rounded-3xl text-md ${scroll ? 'bg-white text-black' : 'bg-green-700 text-white'}`}>
                <Link href="/login">Login</Link>
              </button>
              <FaBars onClick={() => setShow(!show)} className='md:hidden text-white text-2xl' />
            </>
          )}
          {show && (
            <div className='absolute top-10 md:hidden right-10 bg-slate-300 w-[200px] py-5 px-2 z-40 rounded-md'>
              <ul className='flex flex-col gap-3'>
                <li onClick={() => setShow(!show)} className='border-1 px-3 p-1 hover:bg-black hover:text-gray-200 rounded-md border-gray-500'>
                  <Link href="/">Home</Link>
                </li>
                <li onClick={() => setShow(!show)} className='border-1 px-3 p-1 hover:bg-black hover:text-gray-200 rounded-md border-gray-500'>
                  <Link href="/about">About Us</Link>
                </li>
                <li onClick={() => setShow(!show)} className='border-1 px-3 p-1 hover:bg-black hover:text-gray-200 rounded-md border-gray-500'>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
