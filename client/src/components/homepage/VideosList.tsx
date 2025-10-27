"use client"
import React from 'react'
import ShortsList from './ShortsList'
import { timeAgo } from '../../lib/timeConversion'
import HoverVideo from './hoverPlay'
import { Button } from '../ui/button'
import { EllipsisVertical } from 'lucide-react'
import { useAppSelector } from "../../redux/hooks";
import { Dropdown, DropdownTrigger } from '../ui/dropdown'
import VideoSaveOption from './videoSaveOption'
const VideosList = () => {
    const data = [
        {
            id: "VIDEO_ID1",
            title: "F.A.L.T.U Full COMEDY Movie | Jackky Bhagnani | Arshad Warsi | Riteish Deshmukh | Boman Irani",
            slug: "how-to-make-dal-bhat-10-min",
            thumbnailUrl: "https://i.ytimg.com/vi/Zw5TuXwyX5c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDMLiuMMtKoNJQKe9Yce8euBQBydA",
            channelId: "CHANNEL_ID_99",
            channelName: "Nepal Kitchen",
            channelProfileUrl: "https://yt3.ggpht.com/ytc/AIdro_nyZgHvRTdrTWwIYnBcT6hRnHcpfMF0cqNvRoxEcpwnhg=s68-c-k-c0x00ffffff-no-rj",  // you’d fetch via channels.list
            views: 154320,
            publishedAt: "2025-08-12T09:00:00Z",
            duration: 720,    // 12 minutes => 720 seconds
            isLive: false,
            hoverPreviewUrl: "https://cdn.pixabay.com/video/2015/10/18/1080-142790249_tiny.mp4",
            currentlyWatching: 0
        },
        {
            id: "VIDEO_ID2",
            title: "Eagles - In The City(Official Video)[HD]",
            slug: "30s-chai-hack",
            thumbnailUrl: "https://i.ytimg.com/vi/TMJEhVaEQtw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC7W1u8ZYMrVSXXnXhSVd-n0hrImg",
            channelId: "CHANNEL_ID_21",
            channelName: "Quick Kitchen",
            channelProfileUrl: "https://yt3.ggpht.com/E5gGCeMU9aRK9cOvTK4j8pAJr_pwXnh7_jHBZw6YeNXIVyc7WpNFCQe_SwEOpG0BMtpm3CrzNQ=s68-c-k-c0x00ffffff-no-rj",
            views: 502300,
            publishedAt: "2025-10-02T13:00:00Z",
            duration: 30,
            isLive: false,
            hoverPreviewUrl: "https://media.istockphoto.com/id/1752533608/video/high-five-business-people-and-teamwork-with-collaboration-and-celebration-in-a-office-with.mp4?s=mp4-640x640-is&k=20&c=gyLwIv9faT9EUS3KFvUYcshBt6qFJeNHlOUBl3jZEFk=",
            currentlyWatching: 0
        },

        {
            id: "VIDEO_ID3",
            title: "Kya Kool Hain Hum 3 Full Movie | Comedy Bollywood Movie HD | Tusshar Kapoor | Aftab Shivdasani",
            slug: "30s-chai-hack",
            thumbnailUrl: "https://i.ytimg.com/vi/wbxWJ6qWx_o/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBmX3Y-RW_BFZkHWzBU6XjmrHUIuw",
            channelId: "CHANNEL_ID_21",
            channelName: "Quick Kitchen",
            channelProfileUrl: "https://yt3.ggpht.com/2KpL4E7BBvDnywz0BLJXu0cMG_bqiXv6cMQ_dL4MNRTrQYIB6ydv8Tp1PnEvmx6Sg6d4yp7P=s68-c-k-c0x00ffffff-no-rj",
            views: 502300,
            publishedAt: "2025-10-02T13:00:00Z",
            duration: 30,
            isLive: false,
            hoverPreviewUrl: "https://cdn.pixabay.com/video/2024/03/10/203598-921832500_large.mp4",
            currentlyWatching: 0
        },
        {
            id: "VIDEO_ID4",
            title: "Budho Bhaiyo - The Firantee | Nepali Song | Official Music Video 2025",
            slug: "30s-chai-hack",
            thumbnailUrl: "https://i.ytimg.com/vi/-Rzp19Fpmuc/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD4EtOhDz04Ci1q3JWPkxJYro8VpQ",
            channelId: "CHANNEL_ID_21",
            channelName: "The Firantee",
            channelProfileUrl: "https://yt3.ggpht.com/2jAxBr2oXwFAZMpFaP2YlMI6TOuMGvI6zdRtflZJR-BxVaGvtNTat_DC8OrwcIfrgpxg91WPvA=s48-c-k-c0x00ffffff-no-rj",
            views: 502300,
            publishedAt: "2025-10-02T13:00:00Z",
            duration: 30,
            isLive: false,
            hoverPreviewUrl: "https://media.istockphoto.com/id/994586448/video/whitewater-kayaker-in-a-yellow-kayak-dropping-a-waterfall.mp4?s=mp4-640x640-is&k=20&c=xYSdMWJkdmbhudlDWmY7wNxMVAHoEsyROe4MmJjEVH0=",
            currentlyWatching: 0
        },
        {
            id: "VIDEO_ID5",
            title: "Budho Bhaiyo - The Firantee | Nepali Song | Official Music Video 2025",
            slug: "30s-chai-hack",
            thumbnailUrl: "https://i.ytimg.com/vi/dDMXyQ6cwIc/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYQSBZKGUwDw==&rs=AOn4CLCaAz9ZgrDAJHPQhfWPSwqXxbhALQ",
            channelId: "CHANNEL_ID_21",
            channelName: "The Firantee",
            channelProfileUrl: "https://yt3.ggpht.com/2jAxBr2oXwFAZMpFaP2YlMI6TOuMGvI6zdRtflZJR-BxVaGvtNTat_DC8OrwcIfrgpxg91WPvA=s48-c-k-c0x00ffffff-no-rj",
            views: 502300,
            publishedAt: "2025-10-02T13:00:00Z",
            duration: 30,
            isLive: false,
            hoverPreviewUrl: "https://media.istockphoto.com/id/994586448/video/whitewater-kayaker-in-a-yellow-kayak-dropping-a-waterfall.mp4?s=mp4-640x640-is&k=20&c=xYSdMWJkdmbhudlDWmY7wNxMVAHoEsyROe4MmJjEVH0=",
            currentlyWatching: 0
        },
        {
            id: "VIDEO_ID6",
            title: "Budho Bhaiyo - The Firantee | Nepali Song | Official Music Video 2025",
            slug: "30s-chai-hack",
            thumbnailUrl: "https://i.ytimg.com/vi/Jbk-CCdDqz0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDkv8ZqtNmo6CncKuOz9MHIAbepjA",
            channelId: "CHANNEL_ID_21",
            channelName: "The Firantee",
            channelProfileUrl: "https://yt3.ggpht.com/2jAxBr2oXwFAZMpFaP2YlMI6TOuMGvI6zdRtflZJR-BxVaGvtNTat_DC8OrwcIfrgpxg91WPvA=s48-c-k-c0x00ffffff-no-rj",
            views: 502300,
            publishedAt: "2025-10-02T13:00:00Z",
            duration: 30,
            isLive: false,
            hoverPreviewUrl: "https://media.istockphoto.com/id/994586448/video/whitewater-kayaker-in-a-yellow-kayak-dropping-a-waterfall.mp4?s=mp4-640x640-is&k=20&c=xYSdMWJkdmbhudlDWmY7wNxMVAHoEsyROe4MmJjEVH0=",
            currentlyWatching: 0
        },
        {
            id: "VIDEO_ID7",
            title: "Budho Bhaiyo - The Firantee | Nepali Song | Official Music Video 2025",
            slug: "30s-chai-hack",
            thumbnailUrl: "https://i.ytimg.com/vi/dLl4PZtxia8/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKaGsRwooJsep9C-PoxhFz6IB-Gw",
            channelId: "CHANNEL_ID_21",
            channelName: "The Firantee",
            channelProfileUrl: "https://yt3.ggpht.com/2jAxBr2oXwFAZMpFaP2YlMI6TOuMGvI6zdRtflZJR-BxVaGvtNTat_DC8OrwcIfrgpxg91WPvA=s48-c-k-c0x00ffffff-no-rj",
            views: 502300,
            publishedAt: "2025-10-02T13:00:00Z",
            duration: 30,
            isLive: false,
            hoverPreviewUrl: "https://media.istockphoto.com/id/994586448/video/whitewater-kayaker-in-a-yellow-kayak-dropping-a-waterfall.mp4?s=mp4-640x640-is&k=20&c=xYSdMWJkdmbhudlDWmY7wNxMVAHoEsyROe4MmJjEVH0=",
            currentlyWatching: 0
        }
        , {
            id: "VIDEO_ID8",
            title: "Budho Bhaiyo - The Firantee | Nepali Song | Official Music Video 2025",
            slug: "30s-chai-hack",
            thumbnailUrl: "https://i.ytimg.com/vi/cdR7tzSOhtE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB2RgQfkmcxOYvx2lUE3XmISHLgyw",
            channelId: "CHANNEL_ID_21",
            channelName: "The Firantee",
            channelProfileUrl: "https://yt3.ggpht.com/2jAxBr2oXwFAZMpFaP2YlMI6TOuMGvI6zdRtflZJR-BxVaGvtNTat_DC8OrwcIfrgpxg91WPvA=s48-c-k-c0x00ffffff-no-rj",
            views: 502300,
            publishedAt: "2025-10-02T13:00:00Z",
            duration: 30,
            isLive: false,
            hoverPreviewUrl: "https://i.ytimg.com/an_webp/GRDGQERSmDE/mqdefault_6s.webp?du=3000&sqp=CKO198cG&rs=AOn4CLC0-hblbYpFuGU-bSjanyOiFhpZ_g",
            currentlyWatching: 0
        }
        , {
            id: "VIDEO_ID9",
            title: "Budho Bhaiyo - The Firantee | Nepali Song | Official Music Video 2025",
            slug: "30s-chai-hack",
            thumbnailUrl: "https://i.ytimg.com/vi/FDkUApLcTYY/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGD0gRChyMA8=&rs=AOn4CLC0L5gA-CtpUofItK-TuvQ2g-VtuQ",
            channelId: "CHANNEL_ID_21",
            channelName: "The Firantee",
            channelProfileUrl: "https://yt3.ggpht.com/2jAxBr2oXwFAZMpFaP2YlMI6TOuMGvI6zdRtflZJR-BxVaGvtNTat_DC8OrwcIfrgpxg91WPvA=s48-c-k-c0x00ffffff-no-rj",
            views: 502300,
            publishedAt: "2025-10-02T13:00:00Z",
            duration: 30,
            isLive: false,
            hoverPreviewUrl: "https://media.istockphoto.com/id/994586448/video/whitewater-kayaker-in-a-yellow-kayak-dropping-a-waterfall.mp4?s=mp4-640x640-is&k=20&c=xYSdMWJkdmbhudlDWmY7wNxMVAHoEsyROe4MmJjEVH0=",
            currentlyWatching: 0
        }


    ];
    const videosOne = data.slice(0, 6); // first 6 videos
    const videostwo = data.slice(6); // first 6 videos
    const activeCategory = useAppSelector((state) => state.quickFilter.activeCategory);
    return (
        <div className='w-full h-auto grid  md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-2 mt-5'>
            {videosOne.map((i) => (
                <div key={i.id} className='w-full  p-2 h-auto hover:bg-[var(--surface)] transition ease-linear duration-150 cursor-pointer  rounded-xl'>
                    {/* <img alt='thumbnailUrl' className='w-full   h-auto rounded-xl' width={200} src={i.thumbnailUrl} /> */}
                    <HoverVideo hoverPreviewUrl={i.hoverPreviewUrl} thumbnailUrl={i.thumbnailUrl} duration={i.duration} />

                    <div className='w-full h-auto p-1 mt-4 flex'>
                        <div className='w-[55px] flex-none  h-auto'>
                            <img alt='channelProfileUrl' className='w-[40px]  h-[40px] rounded-full' width={200} src={i.channelProfileUrl} />
                        </div>
                        <div className='w-full h-auto'>
                            <h3 className='text-white text-[18px] line-clamp-2 font-bold'>{i.title}</h3>
                            <div className='w-full h-auto flex items-center gap-2'>
                                <p className='text-gray-400 font-semibold text-[15px]'>{i.channelName}</p>
                            </div>
                            <div className='flex mt-1 items-center gap-2'>
                                <p className='text-gray-400 font-semibold text-[15px]' >{i.views} views</p>
                                <p className='text-gray-400 font-semibold -mt-1 text-[15px] '>.</p>
                                <p className='text-gray-400  font-semibold text-[15px]'>{timeAgo(new Date(i.publishedAt))}</p>
                            </div>
                        </div>
                        <div className='w-11 h-auto '>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button className='cursor-pointer w-10  h-10 rounded-full'>
                                        <EllipsisVertical size={24} className='text-white' />
                                    </Button>
                                </DropdownTrigger>
                                <VideoSaveOption />
                            </Dropdown>
                        </div>
                    </div>
                </div>
            ))}
            <ShortsList />
            {videostwo.map((i) => (
                <div key={i.id} className='w-full p-2 h-auto hover:bg-[var(--surface)] transition ease-linear duration-150 cursor-pointer  rounded-xl'>
                    {/* <img alt='thumbnailUrl' className='w-full   h-auto rounded-xl' width={200} src={i.thumbnailUrl} /> */}
                    <HoverVideo hoverPreviewUrl={i.hoverPreviewUrl} thumbnailUrl={i.thumbnailUrl} duration={i.duration} />

                    <div className='w-full h-auto p-1 mt-4 flex'>
                        <div className='w-[55px] flex-none  h-auto'>
                            <img alt='channelProfileUrl' className='w-[40px]  h-[40px] rounded-full' width={200} src={i.channelProfileUrl} />
                        </div>
                        <div className='w-full h-auto'>
                            <h3 className='text-white text-[18px] line-clamp-2 font-bold'>{i.title}</h3>
                            <div className='w-full h-auto flex items-center gap-2'>
                                <p className='text-gray-400 font-semibold text-[15px]'>{i.channelName}</p>
                            </div>
                            <div className='flex mt-1 items-center gap-2'>
                                <p className='text-gray-400 font-semibold text-[15px]' >{i.views} views</p>
                                <p className='text-gray-400 font-semibold -mt-1 text-[15px] '>.</p>
                                <p className='text-gray-400  font-semibold text-[15px]'>{timeAgo(new Date(i.publishedAt))}</p>
                            </div>
                        </div>
                        <div className='w-11 h-auto '>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button className='cursor-pointer w-10  h-10 rounded-full'>
                                        <EllipsisVertical size={24} className='text-white' />
                                    </Button>
                                </DropdownTrigger>
                                <VideoSaveOption />
                            </Dropdown>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VideosList
