"use client"
import Link from 'next/link'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='bg-red-300'>
      <div className='max-w-7xl  mx-auto flex justify-between items-center px-3 py-3'>
        <h2>Book House</h2>
        <div>
          <FaBars className='md:hidden' />
          <ul className=' gap-6 hidden md:flex'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
          </ul>
        </div>
        <div className='flex gap-4'>
          <button className='bg-green-700 px-3 rounded-3xl text-md text-white'><Link href="/">Sign In</Link></button>
          <img className='w-10 h-10 rounded-full' src="https://reputationprotectiononline.com/wp-content/uploads/2022/04/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar