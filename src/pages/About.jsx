import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { TbPencil } from 'react-icons/tb'

const About = () => {
  return (
    <div className='w-full h-full flex p-2 pb-10 flex-col'>
    <summary className='w-full h-full flex'>
    <span className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nulla nesciunt facilis odit nemo eveniet quas fugit similique vel! Adipisci explicabo veniam quisquam, molestias quasi excepturi tempora in, minus nobis nisi possimus tempore sed sapiente nihil, iure nemo eius aut.</span>
    <i className='bg-primary p-2 rounded-full text-white h-fit'><TbPencil/></i>
    </summary>
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
    <i className='bg-primary p-2 rounded-full text-white'><IoMdAdd/></i>
    <i className='bg-primary p-2 rounded-full text-white h-fit'><TbPencil/></i>
    </div>
    </div>
    </div>
    </div>
  )
}

export default About