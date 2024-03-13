import React, { useState } from 'react'
import { BsThreeDots} from 'react-icons/bs'
import './PostCard.css'

const PostCard = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick=() => {
        setShowDropdown(!showDropdown);
    }
  return (
    <div>
        <div className='border rounded-md w-full'>
            <div className='flex justify-between items-center w-full py-4 px-5'>
                <div className='flex items-center'>
                    <img className='h-12 w-12 rounded-full' src="https://cdn.pixabay.com/photo/2022/08/01/12/24/people-7358064_1280.jpg" alt=''/>
                    <div className='pl-2'>
                        <p className='font-semibold text-sm'>username</p>
                        <p className='font-thin text-sm'>location</p>
                    </div>
                </div>
                <div className='dropdown'>
                    <BsThreeDots className='dots' onClick={handleClick} />
                    <div className='dropdown-content'>
                        {showDropdown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                    </div>
                </div>
            </div>

            <div className='w-full'>
                <img className='w-full' src='https://cdn.pixabay.com/photo/2023/04/19/17/15/couple-7938190_1280.jpg' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default PostCard