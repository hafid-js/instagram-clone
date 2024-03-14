import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import HomeRight from '../../Components/HomeRight/HomeRight'
import CreatePostModal from '../../Components/Post/CreatePostModal'
import PostCard from '../../Components/Post/PostCard'
import StoryCircle from '../../Components/Story/StoryCircle'

const HomePage = () => {
  const { isOpen, onClose } = useDisclosure();
  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
        <div className='w-[44%] px-10'>
          <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
            {[1,1,11].map((item) => <StoryCircle/>)}
          </div>
          <div className='space-y-10 w-full mt-10'>
            {[1,1].map((item) => <PostCard/>)}
          </div>
        </div>
        <div className='w-[27%]'>
          <HomeRight/>
        </div>
      </div>
      <CreatePostModal onClose={onClose} isOpen={isOpen}/>
      </div>
  )
}

export default HomePage