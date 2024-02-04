import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
   <>
     <nav className='w-full hidden sm:hidden px-4 py-2 lg:flex items-center justify-between shadow-sm border-b border-gray-200 sticky top-0 left-0 bg-white z-50 opacity-1'>
     <div className='flex items-center w-full max-w-[16rem] p-[0.4rem] rounded-md shadow-md'>
     <img src="https://spehre.io/assets/logo-43560d32.svg" className='h-10 w-10' alt="" />
     <h1 className='ml-1 text-lg font-normal'>Spehre</h1>
     </div>
    <div className="flex flex-1 justify-end gap-4 items-center">
     <div className="flex items-center w-full px-2 max-w-xs shadow-md shadow-gray-300 rounded-md">
     <i className='text-xl mr-2 text-gray-500'><IoSearch/></i>
     <hr className='w-[2px] h-[24px] border-r-[2px] border-gray-400'></hr>
     <input type="text" placeholder='search' className='p-2 outline-none bg-transparent w-full text-sm capitalize font-medium placeholder:capitalize '/>
     </div>
     <i className='text-xl  p-2 border border-gray-300 rounded-md text-primary'><IoNotificationsOutline/></i>
     <i className='text-xl  p-2 border border-gray-300 rounded-md text-primary'><MdOutlineEmail/></i>
     <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className='h-10 w-10 rounded-full ' />
    </div>
    </nav>
    <nav className='w-full flex lg:hidden items-center justify-between p-4'>
    <IoMenu className='text-lg'/>
    <IoSearch className='text-lg'/>
    </nav>
   </>
  )
}

export default Navbar