import React from 'react'
import { TfiTimer } from "react-icons/tfi";
import { TbPencil } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidCommentDetail } from "react-icons/bi";
import { LuSend } from "react-icons/lu";

const Posts = () => {
   return (
      <div className='w-full h-full p-2 pb-10 flex flex-col'>
         <div className="flex flex-col justify-between">
            <div className="flex gap-2">
               <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className='h-10 w-10 rounded-full' />
               <div className="flex flex-col w-full">
                  <h2 className='font-semibold capitalize'>jhon doe</h2>
                  <div className="flex items-center space-x-1">
                     <span className='flex items-center text-xs my-auto text-tertiary font-normal'><i className='mr-1'><TfiTimer /></i> 14 min ago on</span>
                     <span className='text-sm text-tertiary font-semibold capitalize'>figma community</span>
                  </div>
               </div>
               <div className="flex justify-end items-center gap-2 w-full h-fit">
                  <i className='bg-primary p-2 rounded-full text-white'><TbPencil /></i>
                  <i className='bg-primary p-2 rounded-full text-white'><RiDeleteBinLine /></i>
               </div>
            </div>
            <div className="w-full flex px-4 py-1">
               <p className='text-sm font-medium my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officia quas odio, consequuntur sit aspernatur magni tempora deserunt quibusdam omnis!</p>
            </div>
            <div className="w-full">
               <img src="https://images.unsplash.com/photo-1560858275-933aa173847b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWRvYmUlMjBwaG90b3Nob3B8ZW58MHx8MHx8fDA%3D"
                  alt="" className='object-cover rounded-md h-full max-h-[16rem] w-full' />
            </div>
            
            <div className="flex items-center w-full max-w-[14rem] my-4 justify-between">
               <div className="flex items-center gap-1 text-primary">
                  <i className='text-lg'><BiSolidLike /></i>
                  <span className='text-sm font-medium'>1,9k</span>
               </div>
               <div className="flex items-center gap-1">
                  <i className='text-lg'><BiSolidCommentDetail /></i>
                  <span className='text-sm font-medium'>45</span>
               </div>
               <div className="flex items-center gap-1">
                  <i className='text-lg font-medium'><LuSend /></i>
               </div>
            </div>
            <hr />
            <div className="flex gap-2 my-4">
               <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className='h-8 w-8 rounded-full' />
               <div className="flex flex-col gap-1">
                  <h2 className='font-semibold text-secondary capitalize'>jhon doe</h2>
                  <span className='text-xs capitalize w-full max-w-xs'>i loved northern ireland and send some of the very memorable days.</span>
                  <div className="flex items-center justify-between w-full max-w-[10rem]">
                     <span className='text-xs text-tertiary capitalize'>like .5</span>
                     <span className='text-xs text-tertiary capitalize'>reply</span>
                     <span className='text-xs text-tertiary capitalize'>1 reply</span>
                  </div>
                  <div className="flex gap-2 my-2">
                     <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className='h-8 w-8 rounded-full'/>
                     <div className="flex flex-col">
                        <h2 className='font-semibold text-secondary capitalize'>user 1</h2>
                        <span className='text-xs'>I agree with this.</span>
                     </div>
                  </div>
                     <div className="mx-20 md:my-4">
                        <a href="#" className='text-xs text-gray-600 font-semibold'>Load more comments</a>
                      </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Posts