import { Checkbox, Dialog, Switch} from '@material-tailwind/react';
import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { TbPencil } from 'react-icons/tb'
import { IoIosArrowBack } from "react-icons/io";

const About = () => {
    const [open, setOpen] = React.useState(null);
    const [addExperience, setAddExperience] = React.useState(null);
    const [editExperience, setEditExperience] = React.useState(null);

  const handleOpen = (value) => setOpen(value);
  const handleAddExperience = (value) => setAddExperience(value);
  const handleEditExperience = (value) => setEditExperience(value);
  return (
    <div className='w-full h-full flex p-2 pb-10 flex-col'>
    <summary className='w-full h-full flex gap-4 justify-between'>
    <span className='text-sm w-full max-w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla nesciunt facilis odit nemo eveniet quas fugit similique vel! Adipisci explicabo veniam quisquam, molestias quasi excepturi tempora in, minus nobis nisi possimus tempore sed sapiente nihil, iure nemo eius aut.</span>
    <i onClick={()=>handleOpen('sm')} className='bg-primary p-2 rounded-full text-white h-fit cursor-pointer'><TbPencil/></i>
    </summary>
    <Dialog
       animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
       size='sm' open={open} handler={handleOpen} className='rounded-none'>
     <div className='w-full flex flex-col'>
      <div className="flex items-center justify-between w-full text-gray-900 p-4">
       <i className='text-xl' onClick={()=>handleOpen(null)}><IoIosArrowBack/></i>
       <h2 className='font-semibold text-xl w-fit capitalize'>edit about</h2>
       <div></div>
      </div>
      <div className="bg-[#EDEBFF] w-full px-4 py-2 flex justify-between">
       <div className="p-2 w-full flex justify-between">
       <h2 className='font-semibold capitalize text-secondary'>notify network</h2>
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
       </div>
       <div className="flex flex-col p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>about</h2>
        <textarea name="" id="" cols="10" rows="7" 
        className='outline-none text-[#4C5E75] font-semibold w-full h-full max-h-[12rem] border border-gray-400 rounded-md p-2'>

       </textarea>
       </div>
       <hr className='w-full my-2 border border-gray-300'/>
       <div className="flex p-4 space-x-4">
       <button className='border-2 text-primary font-semibold border-primary capitalize rounded-md lg:px-5 w-full max-w-[10rem] py-2'>delete about</button>
       <button className='bg-primary font-semibold text-white rounded-md lg:px-5 capitalize w-full max-w-[10rem] py-2'>save</button>
       </div>
     </div>
    </Dialog>
    <div className="w-full flex flex-col space-y-4 my-6">
    <h2 className='font-semibold text-secondary capitalize text-xl'>experience</h2>
    <div className="flex">
    <img src="" alt="" />
    <div className="flex flex-col space-y-1">
     <h2 className='font-semibold capitalize text-lg'>full stack developer</h2>
     <span className='text-sm font-medium capitalize text-gray-500'>january 2023-present</span>
     <span className='text-xs text-tertiary font-normal capitalize'>celerity pvt ltd. - delhi, india</span>
     <span className='w-full text-sm font-normal'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim tenetur dolor cupiditate ex deleniti dicta quo perferendis eligendi nam inventore, debitis voluptatem at voluptas delectus laborum minima sequi. Quod!
     </span>
    </div>
    <div className="flex h-fit gap-2">
    <i onClick={()=>handleAddExperience('sm')} className='bg-primary p-2 rounded-full text-white cursor-pointer'><IoMdAdd/></i>
    <Dialog
       animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
       size='sm' open={addExperience} handler={handleAddExperience} className='rounded-none outline-none'>
     <div className='w-full flex flex-col h-full max-h-[40rem] overflow-y-scroll'>
      <div className="flex items-center justify-between w-full text-gray-900 p-4">
       <i className='text-xl' onClick={()=>handleOpen(null)}><IoIosArrowBack/></i>
       <h2 className='font-semibold text-xl w-fit capitalize'>add experience</h2>
       <div></div>
      </div>
      <div className="bg-[#EDEBFF] w-full px-4 py-2 flex justify-between">
       <div className="p-2 w-full flex justify-between">
       <h2 className='font-semibold capitalize text-secondary'>notify network</h2>
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
       </div>
       <div className="flex flex-col  p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>company name <i className='text-red-600'>*</i></h2>
        <input type="text" className='outline-none text-[#4C5E75] font-semibold w-full h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
       </div>
       <div className="flex flex-col  p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>location</h2>
        <input type="text" className='outline-none text-[#4C5E75] font-semibold w-full h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
       </div>
       <div className="flex p-2">
       <Checkbox
        label={
        <span color="blue-gray" className="flex font-medium text-sm capitalize">
          i am currently working here.
        </span>}/>
       </div>
       <div className="flex flex-col  p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>start date</h2>
       <div className="flex items-center gap-2">
       <input type="date" className='outline-none text-[#4C5E75] font-semibold w-full  text-sm h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
        <input type="date" className='outline-none text-[#4C5E75] font-semibold w-full text-sm  h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
       </div>
       </div>
       <div className="flex flex-col  p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>end date</h2>
       <div className="flex items-center gap-2">
       <input type="date" className='outline-none text-[#4C5E75] font-semibold w-full  text-sm h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
        <input type="date" className='outline-none text-[#4C5E75] font-semibold w-full text-sm  h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
       </div>
       </div>
       <div className="flex flex-col p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>description</h2>
        <textarea name="" id="" cols="10" rows="7" 
        className='outline-none text-[#4C5E75] font-semibold w-full h-full max-h-[12rem] border border-gray-400 rounded-md p-2'>
       </textarea>
       </div>
       <hr className='w-full my-2 border border-gray-300'/>
       <div className="flex p-4 space-x-4">
       <button className='border-2 text-primary font-semibold border-primary capitalize rounded-md lg:px-5 w-full max-w-[10rem] py-2'>delete about</button>
       <button className='bg-primary font-semibold text-white rounded-md lg:px-5 capitalize w-full max-w-[10rem] py-2'>save</button>
       </div>
     </div>
    </Dialog>
    <i onClick={()=>handleEditExperience('sm')} className='bg-primary p-2 rounded-full text-white h-fit cursor-pointer'><TbPencil/></i>
    <Dialog
       animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
       size='sm' open={editExperience} handler={handleEditExperience} className='rounded-none outline-none'>
     <div className='w-full flex flex-col h-full max-h-[40rem] overflow-y-scroll'>
      <div className="flex items-center justify-between w-full text-gray-900 p-4">
       <i className='text-xl' onClick={()=>handleOpen(null)}><IoIosArrowBack/></i>
       <h2 className='font-semibold text-xl w-fit capitalize'>edit experience</h2>
       <div></div>
      </div>
      <div className="bg-[#EDEBFF] w-full px-4 py-2 flex justify-between">
       <div className="p-2 w-full flex justify-between">
       <h2 className='font-semibold capitalize text-secondary'>notify network</h2>
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
       </div>
       <div className="flex flex-col  p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>company name <i className='text-red-600'>*</i></h2>
        <input type="text" className='outline-none text-[#4C5E75] font-semibold w-full h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
       </div>
       <div className="flex flex-col  p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>location</h2>
        <input type="text" className='outline-none text-[#4C5E75] font-semibold w-full h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
       </div>
       <div className="flex p-2">
       <Checkbox
        label={
        <span color="blue-gray" className="flex font-medium text-sm capitalize">
          i am currently working here.
        </span>}/>
       </div>
       <div className="flex flex-col  p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>start date</h2>
       <div className="flex items-center gap-2">
       <input type="date" className='outline-none text-[#4C5E75] font-semibold w-full  text-sm h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
        <input type="date" className='outline-none text-[#4C5E75] font-semibold w-full text-sm  h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
       </div>
       </div>
       <div className="flex flex-col  p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>end date</h2>
       <div className="flex items-center gap-2">
       <input type="date" className='outline-none text-[#4C5E75] font-semibold w-full  text-sm h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
        <input type="date" className='outline-none text-[#4C5E75] font-semibold w-full text-sm  h-full max-h-[12rem] border border-gray-400 rounded-md p-2'/>
       </div>
       </div>
       <div className="flex flex-col p-4 gap-2 text-gray-600">
        <h2 className='font-semibold capitalize'>description</h2>
        <textarea name="" id="" cols="10" rows="7" 
        className='outline-none text-[#4C5E75] font-semibold w-full h-full max-h-[12rem] border border-gray-400 rounded-md p-2'>
       </textarea>
       </div>
       <hr className='w-full my-2 border border-gray-300'/>
       <div className="flex p-4 space-x-4">
       <button className='border-2 text-primary font-semibold border-primary capitalize rounded-md lg:px-5 w-full max-w-[10rem] py-2'>delete about</button>
       <button className='bg-primary font-semibold text-white rounded-md lg:px-5 capitalize w-full max-w-[10rem] py-2'>save</button>
       </div>
     </div>
    </Dialog>
    </div>
    </div>
    </div>
    </div>
  )
}

export default About