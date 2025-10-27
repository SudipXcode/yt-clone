"use client"
import { Clapperboard, EllipsisVertical } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

// Component for individual hover video
const HoverVideo = ({ videoUrl, title }) => {
    const videoRef = React.useRef(null)

    return (
        <div className='w-full  mt-6 h-auto  rounded-lg overflow-hidden   cursor-pointer'>
            <div className='w-full aspect-9/16 '>
                <video
                    ref={videoRef}
                    src={videoUrl}
                    className='w-full rounded-lg h-full'
                    muted
                    loop
                    onMouseEnter={() => videoRef.current?.play()}
                    onMouseLeave={() => {
                        if (videoRef.current) {
                            videoRef.current.pause()
                            videoRef.current.currentTime = 0
                        }
                    }}
                />
            </div>
            <div className='w-full flex justify-between h-auto py-3'>
                <div className='w-full flex flex-col gap-1'>
                    <h4 className='text-white font-bold text-[17px]'>{title}</h4>
                    <p className='text-gray-400 font-semibold text-[15px]' >111k views</p>
                </div>
                <div className='w-10 h-auto  '>
                    <Button className='cursor-pointer w-9  h-9 rounded-full'>
                        <EllipsisVertical size={22} className='text-white' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

const ShortsList = () => {
    // ✅ Working public mp4 URLs
    const data = [
        { id: 1, vidUrl: "https://v.ftcdn.net/06/26/10/67/700_F_626106736_2b0X37Fb4U7OVSLGXDpBHb6Wbutk8ICW_ST.mp4", title: "💕❣️🥰Ishq Jab Se Hua Mujhe Tumse✨⚡💫 || Dil Ka Rishta ||" },
        { id: 2, vidUrl: "https://v.ftcdn.net/06/23/75/22/700_F_623752275_RDfL1dcOfbDrYIDkBTaLM0K6in4KAvFT_ST.mp4", title: "Mr Robot. Elliot. #mrrobot. Song by: I monster-Daydream In Blue." },
        { id: 3, vidUrl: "https://v.ftcdn.net/14/97/94/98/700_F_1497949834_STeS0LDyJa8Zk45bS4CQRpdK6jJvZIou.mp4", title: "Wamiqa Gabbi CUTELY Blushes At Kapil’s Pick-Up Lines " },
        { id: 4, vidUrl: "https://v.ftcdn.net/08/10/74/28/700_F_810742801_F6vmJuG8jOpmaUBK5zOLJ2AlQLVno1EN.mp4", title: "Badshah introduces Reet Talwar" },
        { id: 5, vidUrl: "https://v.ftcdn.net/07/11/98/29/700_F_711982975_HLQ1sxNRIqM9pQKvbJLnzGzHH6jZ4vGe.mp4", title: "Sony A6400  50mm lens photography test" },

    ]

    return (
        <div className='col-span-3 w-full py-6'>
            <div className='w-full h-auto px-2 flex gap-4 items-center mb-4'>
                <Clapperboard size={28} className='text-red-500' fill="currentColor" />
                <h3 className='text-white font-bold text-[20px]'>Shorts</h3>
            </div>

            <div className='w-full h-auto grid grid-cols-5 gap-6'>
                {data.map(video => (
                    <HoverVideo title={video.title} key={video.id} videoUrl={video.vidUrl} />
                ))}
            </div>
        </div>
    )
}

export default ShortsList
