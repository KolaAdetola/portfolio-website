import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav>
        <div className="flex items-center justify-between p-5 flex-wrap mx-auto  ">
            <Link href={"/"} className='text-5xl text-white text-semibold' >
                <Image src="/images/logo.png" alt="logo" width={150} height={150} />
            </Link>
            <div className="menu  md:block md:w-auto " id='navbar'>
                <ul className="flex flex-col md:flex-row items-center md:space-x-4   ">
                    <li className="  p-2 rounded-lg cursor-pointer place-items-center text-white  sm:text-lg font-semibold">
                        <Link href="#" className='text-white'>
                            Home
                        </Link>
                    </li>
                    <li className="  p-2 rounded-lg cursor-pointer  place-items-center text-white  sm:text-lg font-semibold">
                        <Link href="#about" className='text-white'>
                            About
                        </Link>
                    </li>
                    <li className="  p-2 rounded-lg cursor-pointer  place-items-center text-white  sm:text-lg font-semibold">
                        <Link href="#services" className=''>
                            Services
                        </Link>
                    </li>
                    <button className="btn btn-info  sm:text-lg font-semibold rounded-lg cursor-pointer place-items-center text-white">
                        <Link href="#contact" className='text-white'>
                            Contact
                        </Link>
                    </button>
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar