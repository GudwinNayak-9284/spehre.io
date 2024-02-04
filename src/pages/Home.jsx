import { Slider, Switch } from '@material-tailwind/react';
import React, { useState } from 'react'
import { FaUsers } from "react-icons/fa";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Posts from '../components/Posts';
import { IoMdAdd } from "react-icons/io";
import DropboxIcon from '../assets/dropbox.png'
import MediumIcon from '../assets/medium.png'
import SlackMedium from '../assets/slack.png'
import GraphChart from '../assets/graph.png'
import { TbPencil } from 'react-icons/tb';
import About from './About';
const Home = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const data = [
    {
      label: "About",
      value: "about",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
      customContent:<About/>
    },
    {
      label: "Skills & certificates",
      value: "skills",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      customContent: <div>Custom React content goes here</div>, // Add custom content for React tab
    },
    {
      label: "Posts",
      value: "posts",
      customContent: <Posts/>
    },
    {
      label: "Spaces",
      value: "spaces",
      desc: `I'm here to follow my dreams and inspire other people to follow their dreams, too.`,
      customContent: <div>Custom Vue content goes here</div>, // Add custom content for Vue tab
    },
  ];
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='w-full h-[6rem] md:h-[12rem] lg:h-[16rem] relative'>
        <img src="https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg"
          alt="" className='h-full w-full object-cover' />
       <i className='bg-white p-1 rounded-full absolute right-0 top-0 text-secondary translate-y-[50%] translate-x-[-50%]'><TbPencil/></i>
      </div>
      <div className="h-full w-full lg:flex">
      <div className=' w-full md:max-w-full lg:max-w-xs h-full pt-10 md:pt-14 relative flex flex-col shadow-sm 
      justify-center bg-white rounded-md gap-2 items-center'>
       <div className="flex flex-col gap-1 lg:items-center lg:justify-center h-full w-full">
       <img src="https://randomuser.me/api/portraits/men/1.jpg" alt=""
       className='absolute left-0 translate-x-[10%] lg:translate-x-[50%] top-0 translate-y-[-50%] 
       rounded-full md:h-40 md:w-40 h-24 w-24 object-cover p-1 bg-white' />
        <div className="flex lg:items-center flex-col gap-1 p-4  md:my-6">
        <h2 className='text-secondary font-semibold text-lg capitalize'>jhon doe</h2>
          <p className='text-tertiary text-xs capitalize'>UI/UX designer</p>
          <div className="flex items-center gap-2">
            <i className='text-xl text-secondary'><FaUsers /></i>
            <span className='text-sm capitalize text-secondary font-medium'>21 followers</span>
            <span className='text-sm capitalize text-secondary font-medium'>43 following</span>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between py-1">
              <span className='text-sm capitalize text-secondary font-medium'>make my profile visible to employers</span>
              <Switch defaultChecked id="custom-switch-component"
                ripple={false}
                className="h-full w-full checked:bg-primary"
                containerProps={{
                  className: "w-11 h-6",
                }}
                circleProps={{
                  className: "before:hidden left-0.5 border-none",
                }} />
            </div>
            <span className='text-xs font-normal'>Your profile and career goals will appear when employers search our database for candidates</span>
            <div className="flex flex-col md:items-center my-6">
            <div className="flex items-center justify-between w-full py-1">
            <h2 className='text-sm capitalize text-secondary font-medium'>online links</h2>
            <i className='bg-primary p-2 rounded-full text-white'><IoMdAdd /></i>
            </div>
            <p className='text-xs font-normal'>Add your portfolio links to increase your profile strength</p>
            </div>
            <div className="flex items-center justify-center gap-6 bg-[#F6F9FF] p-2 rounded-md">
            <img src={DropboxIcon} alt="" className='h-6 w-6' />
            <img src={MediumIcon} alt=""  className='h-6 w-6' />
            <img src={SlackMedium} alt="" className='h-6 w-6' />
            </div>
            <img src={GraphChart} alt="" className='object-cover h-60 w-60 mx-auto'/>
            <div className="flex flex-col gap-2 my-4 w-full h-full">
            <h2 className='text-sm capitalize text-secondary font-medium'>your ranking</h2>
            <div className="w-full rounded-full p-1 border border-gray-300">
              <Slider defaultValue={60} size='lg' color='purple'/>
            </div>
            <p className='text-sm text-tertiary font-medium text-center flex items-center gap-2 justify-center'>Hurrah! You are in the top
            <span className='text-lg text-secondary font-bold'>27%</span></p>
           </div>
          </div>
        </div>
       </div>
     
      </div>
       <div className="w-full h-full bg-white py-3">
       <Tabs value={activeTab}>
       <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-white p-0 h-[3rem] shadow-sm"
        indicatorProps={{
          className:
            "bg-transparent border-b-[4px] flex items-center justify-center mx-auto border-primary shadow-none rounded-sm",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "p-2 font-semibold" : "p-2"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc, customContent }) => (
          <TabPanel key={value} value={value}>
            {customContent}
          </TabPanel>
        ))}
      </TabsBody>
       </Tabs>
       </div>
      </div>
    </div>
  )
}

export default Home