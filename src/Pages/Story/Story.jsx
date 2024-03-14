import React from 'react'
import StoryViewer from '../../Components/StoryComponents/StoryViewer'

const Story = () => {

    const story = [

        {
            image: "https://images.pexels.com/photos/19033300/pexels-photo-19033300/free-photo-of-kota-tengara-penunjuk-penanda.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/17993398/pexels-photo-17993398/free-photo-of-kota-matahari-terbenam-wanita-perempuan.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/17893690/pexels-photo-17893690/free-photo-of-bidang-lahan-padang-lapangan.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        },
        {
            image: "https://images.pexels.com/photos/20196635/pexels-photo-20196635/free-photo-of-mode-fashion-fesyen-pria.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        }

    ]
  return (
    <div>
        <StoryViewer stories={story}/>
    </div>
  )
}

export default Story