import React from 'react'
import { Radio, Settings, EllipsisVertical } from "lucide-react";
import { Button } from '../ui/button'
import { DropdownContent, DropdownItem } from '../ui/dropdown'
import { timeAgo } from '../../lib/timeConversion'
const notifications = () => {
    const data = [
        {
            id: 1,
            profilePic: "https://i.pravatar.cc/150?img=32",
            title: "PewDiePie uploaded: Reacting to Old Videos 😅",
            thumbnail: "https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg",
            time: new Date("2025-10-24T08:15:00Z"),
            type: "upload",
        },
        {
            id: 2,
            profilePic: "https://i.pravatar.cc/150?img=12",
            title: "MrBeast started a live stream: I Bought an Entire Island 🌴",
            thumbnail: "https://i.ytimg.com/vi/1roy4o4tqQM/hqdefault.jpg",
            time: new Date("2025-10-24T06:42:00Z"),
            type: "live",
        },
        {
            id: 3,
            profilePic: "https://i.pravatar.cc/150?img=25",
            title: "TechLead commented on your post: 'Interesting perspective 💼'",
            thumbnail: "https://i.ytimg.com/vi/TUVcZfQe-Kw/hqdefault.jpg",
            time: new Date("2025-10-23T20:30:00Z"),
            type: "live",
        },
        {
            id: 4,
            profilePic: "https://i.pravatar.cc/150?img=45",
            title: "Kurzgesagt – In a Nutshell uploaded: How Big Is Space? 🚀",
            thumbnail: "https://i.ytimg.com/vi/3AtDnEC4zak/hqdefault.jpg",
            time: new Date("2025-10-23T17:10:00Z"),
            type: "upload",
        },
        {
            id: 5,
            profilePic: "https://i.pravatar.cc/150?img=8",
            title: "The Weeknd uploaded a new song ‘Echoes’ 🎵",
            thumbnail: "https://i.ytimg.com/vi/2OEL4P1Rz04/hqdefault.jpg",
            time: new Date("2025-10-23T14:00:00Z"),
            type: "upload",
        },
    ];
    return (
        <DropdownContent align="end" className='w-[455px] h-[700px]'>
            <div className='w-full h-auto px-4 pt-2 pb-3 flex items-center justify-between border-b border-[var(--foreground)]'>
                <h5 className='text-white text-[17px] font-semibold'>Notifications</h5>
                <Button size="icon" variant="default" className=' w-10 relative  h-10 rounded-full' >
                    <Settings size={25} className=' text-white' />
                </Button>
            </div>
            <div className='py-1'>
                {data.map((data) => (
                    <DropdownItem key={data.id} className='w-full outline-none px-3 py-2 h-auto flex gap-2'>
                        <div className='w-[70px] h-auto flex-none  flex gap-2 relative  items-center '>
                            {data.type === "upload" ? <div className='w-1 h-1 rounded-full bg-[var(--info)]'></div> : <div className='absolute top-4 bg-[var(--surface)] rounded-full  p-1'>
                                <Radio size={20} className='text-red-500' />   </div>}
                            <img alt="pp" width={200} className="w-[55px] h-[55px] rounded-full" src={data.profilePic} />
                        </div>
                        <div className='w-full h-auto flex gap-3'>
                            <div className='w-full flex flex-col gap-2 h-auto'>
                                <p className='text-[16px] font-medium'>{data.title}</p>
                                <p className='text-gray-400 text-[13px] font-medium'>{timeAgo(data.time)}</p>
                            </div>
                            <div className='w-[100px] flex-none h-auto'>
                                <img alt="thumbnail" width={200} className="w-full h-[65px] rounded-md" src={data.thumbnail} />
                            </div>
                        </div>
                        <div className='w-[25px] h-auto  flex  justify-center'>
                            <Button size="icon" variant="default" className=' w-10 relative  h-10 rounded-full' >
                                <EllipsisVertical size={21} className=' text-white' />
                            </Button>
                        </div>
                    </DropdownItem>
                ))}
            </div>


        </DropdownContent>
    )
}

export default notifications