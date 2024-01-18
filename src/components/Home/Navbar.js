/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link'
import { FaBars } from "react-icons/fa6";
import logo from './../../../public/images/bookflow.png'
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false)

  const user = false;
  return (
    <div className='bg-slate-200'>
      <div className='max-w-7xl  mx-auto flex justify-between items-center px-3 py-3'>
        <Image className="max-w-[180px] " src={logo} alt="our logo" />
        <div>

          <ul className=' gap-6 hidden md:flex'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/">Home</Link></li>
          </ul>
        </div>
        <div className='flex gap-4 relative items-center'>
          {
            user ? <>
              <img className='w-10 h-10 rounded-full' src="https://reputationprotectiononline.com/wp-content/uploads/2022/04/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" />
            </> : <>
              <button className='bg-green-700 py-2 px-3 rounded-3xl text-md text-white'><Link href="/login">Login</Link></button>
              <FaBars onClick={() => setShow(!show)} className='md:hidden' />
            </>
          }
          {
            show && <>
              <div className='absolute top-10 md:hidden right-10 bg-slate-300 w-[200px] py-5 px-2 z-40 rounded-md'>
                <ul className='flex flex-col gap-3'>
                  <li onClick={() => setShow(!show)} className='border-1 px-3 p-1 bg-slate-200 hover:bg-black hover:text-gray-200 rounded-md border-gray-500'><Link href="/">Home</Link></li>
                  <li onClick={() => setShow(!show)} className='border-1 px-3 p-1 bg-slate-200 hover:bg-black hover:text-gray-200 rounded-md border-gray-500'><Link href="/">Home</Link></li>
                  <li onClick={() => setShow(!show)} className='border-1 px-3 p-1 bg-slate-200 hover:bg-black hover:text-gray-200 rounded-md border-gray-500'><Link href="/">Home</Link></li>
                  <li onClick={() => setShow(!show)} className='border-1 px-3 p-1 bg-slate-200 hover:bg-black hover:text-gray-200 rounded-md border-gray-500'><Link href="/">Home</Link></li>
                  <li onClick={() => setShow(!show)} className='border-1 px-3 p-1 bg-slate-200 hover:bg-black hover:text-gray-200 rounded-md border-gray-500'><Link href="/">Home</Link></li>
                </ul>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar