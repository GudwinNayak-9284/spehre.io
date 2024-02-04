import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BiSolidBriefcase } from "react-icons/bi";
import { IoMdAnalytics } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogoChrome } from "react-icons/bi";
import { NavLink, useLocation } from 'react-router-dom';
import image1 from '../assets/creative.png'
import image2 from '../assets/idea.png'
import image3 from '../assets/search-web.png'
import image4 from '../assets/work-from-home.png'
import { MdKeyboardArrowRight } from "react-icons/md";

const Aside = () => {
  const location=useLocation()
  const routes=[
    {
      id:1,
      name:"home",
      url:'/',
      icon:<RxDashboard/>
    },
    {
      id:2,
      name:"job invites",
      icon:<BiSolidBriefcase/>
    },
    {
      id:3,
      name:"analytics",
      icon:<IoMdAnalytics/>
    },
    {
      id:4,
      name:"my profile",
      icon:<BsFillPersonFill/>
    },
    {
      id:5,
      name:"explore",
      icon:<BiLogoChrome/>
    }
  ]
  const communityFeed=[
    {
      id:1,
      title:"indonesia UI designer",
      members:"734 members",
      img:image1,
    },
    {
      id:2,
      title:"indonesia UX researcher",
      members:"125 members",
      img:image2,
    },
    {
      id:3,
      title:"prototyping club",
      members:"891 members",
      img:image3,
    },
    {
      id:4,
      title:"indonesia UI designer",
      members:"241 members",
      img:image4,
    }
  ]
  return (
    <>
    <aside className='hidden lg:block w-full h-full lg:max-w-[20rem] max-w-full bg-white lg:p-6 shadow-sm'>
     <div className="flex flex-col space-y-1">
     {routes.map((route)=>(
      <NavLink to={route.url} key={route.id} 
      className={`flex items-center w-full gap-2 p-3 font-medium ${location.pathname===route.url && "lg:bg-[#CDD0D5] font-semibold md:rounded-md"}`}>
      <i className='text-2xl text-primary'>{route.icon}</i>
      <h1 className='capitalize text-sm text-medium text-secondary'>{route.name}</h1>
      </NavLink>
     ))}  
     </div>
     <hr className='border-gray-200 border'/>
     <div className="flex flex-col gap-4 my-4">
       <div className="flex flex-col gap-2">
       <h2 className='capitalize text-secondary font-semibold text-lg'>communities feed</h2>
       {communityFeed.map((feed)=>(
        <div className="flex items-center gap-2 my-2" key={feed.id}>
        <img src={feed.img} alt="" className='h-10 w-10 rounded-full object-cover'/>
        <div className="flex flex-col">
          <h2 className='capitalize text-secondary font-medium'>{feed.title}</h2>
          <p className='text-sm text-tertiary'>{feed.members}</p>
        </div>
        </div>
       ))}   
       </div>
       <div className="flex items-center justify-center w-full">
       <a href="#" className='text-primary text-sm capitalize'>show 5 more</a>
       <i className='text-xl text-primary'><MdKeyboardArrowRight/></i>
       </div>
     </div>
     <footer className="w-full h-full my-6">
       <div className="flex flex-wrap items-start justify-start gap-3 capitalize text-xs text-gray-600">
        <a href="">about</a>
        <a href="">accessibility</a>
        <a href="">help</a>
        <a href="">privacy & terms</a>
        <a href="">advertise</a>
        <a href="">more</a>
       </div>
       <div className="flex items-center justify-center w-full my-4">
       <a href="#" className='text-primary text-sm capitalize font-semibold'>© 2023 spehre.io</a>
       </div>
     </footer>
     </aside>
   <div className="w-full flex sm:flex fixed md:hidden md:left-[-100%] items-center justify-center pt-2 pb-1 bottom-0 bg-white z-50">
     {routes.map((route)=>(
      <NavLink to={route.url} key={route.id} 
      className={`flex flex-col items-center gap-2 justify-center w-full font-medium ${location.pathname===route.url && "lg:bg-[#CDD0D5] font-semibold md:rounded-md"}`}>
      <i className='text-2xl text-primary'>{route.icon}</i>
      <h1 className='capitalize text-xs text-medium text-secondary'>{route.name}</h1>
      </NavLink>
     ))}  
     </div>
    </>
  )
}

export default Aside