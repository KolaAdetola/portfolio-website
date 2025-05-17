import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full px-10 sm:px-[100px] py-[20px] border-t flex justify-between items-center ">
        <Image src="/images/logo.png" alt="logo" width={80} height={80} />
        <div className="text-gray-400 whitespace-nowrap text-sm sm:text-[20px] ">© 2025 <span className='text-white ml-3'>Kolawole Adetola</span> </div>
    </div>
  )
}

export default Footer