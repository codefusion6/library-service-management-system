"use client"
import Link from 'next/link'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className='max-w-7xl bg-red-300 mx-auto flex justify-between items-center px-3 lg:px-0 py-3'>
        <h2>Book House</h2>
        <div>
          <FaBars className='md:hidden' />
          <ul className=' gap-6 hidden md:flex'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/login">Sign In</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar ;