import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-gray-400 py-10'>
            <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 place-items-center gap-5'>
            <div>
                    <h3 className='text-lg font-bold'>About Us</h3>
                    <ul className=''>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Contack</Link></li>
                        <li><Link href="/">Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>About Us</h3>
                    <ul className=''>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Contack</Link></li>
                        <li><Link href="/">Service</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>About Us</h3>
                    <ul className=''>
                        <li><Link href="/">Privace</Link></li>
                        <li><Link href="/">Term & condition</Link></li>
                        <li><Link href="/">Requirments</Link></li>
                        <li><Link href="/">Home</Link></li>

                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-bold'>Contact Us</h3>
                    <ul className=''>
                        <li><Link href="/">Facebook</Link></li>
                        <li><Link href="/">LinkedIn</Link></li>
                        <li><Link href="/">Email</Link></li>
                        <li><Link href="/">Youtube</Link></li>

                    </ul>
                </div>
            </div>
            <hr className='mt-4' />
            <div>
                <p className='text-center pt-5'>All reserved right &copy; CodeFusion</p>
            </div>
        </div>
    )
}

export default Footer