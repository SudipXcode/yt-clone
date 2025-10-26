"use client"
import React from 'react'
import { Button } from '../ui/button'
import { Bug, CircleUser, Clapperboard, Flag, Gamepad2, History, Home, ListVideo, MessageCircleQuestion, MessageSquareShare, Music, Settings, SquarePlay, ThumbsUp, Trophy } from 'lucide-react'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
const sidenav = () => {
    const isOpen = useAppSelector((state) => state.sidenav.isOpen);

    return (
        <div className={`${isOpen ? "w-[250px]" : "w-[80px]"} `}>
            {isOpen ? <div className='w-[250px]  fixed top-[60px]  p-2 flex flex-col gap-1   h-auto'>
                <div className='w-full border-b border-[var(--surface)] pb-4 h-auto flex flex-col gap-2'>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className=' bg-[var(--surface)]  w-10  h-10 rounded-full'>
                            <Home size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-white font-semibold '>Home</h4>
                    </div>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <Clapperboard size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Shorts</h4>
                    </div>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <Flag size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Notify Me</h4>
                    </div>
                </div>
                <div className='w-full border-b border-[var(--surface)] py-4 h-auto flex flex-col gap-2'>
                    <h5 className='ml-5 text-white font-bold text-[17px]'>You</h5>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <History size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>History</h4>
                    </div>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <ListVideo size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Play List</h4>
                    </div>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <SquarePlay size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Your videos</h4>
                    </div>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <ThumbsUp size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Liked videos</h4>
                    </div>
                </div>
                <div className='w-full border-b border-[var(--surface)] py-4 h-auto flex flex-col gap-2'>
                    <h5 className='ml-5 text-white font-bold text-[17px]'>Explore</h5>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <Music size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Music</h4>
                    </div>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <Gamepad2 size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Gaming</h4>
                    </div>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <Trophy size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Sport</h4>
                    </div>
                </div>
                <div className='w-full  py-4 h-auto flex flex-col gap-2'>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <Settings size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Settings</h4>
                    </div>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <Bug size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Report history</h4>
                    </div>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <MessageCircleQuestion size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Help</h4>
                    </div>
                    <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                        <Button className='   w-10  h-10 rounded-full'>
                            <MessageSquareShare size={24} className='text-white' />
                        </Button>
                        <h4 className='text-[15px] text-gray-300 font-semibold '>Send feedback</h4>
                    </div>
                </div>
            </div>
                :
                <div className='w-[80px]  fixed   p-2  flex flex-col gap-6 items-center h-auto'>
                    <div className='w-auto h-auto flex flex-col gap-1  items-center '>
                        <Button className='cursor-pointer bg-[var(--surface)] w-10  h-10 rounded-full'>
                            <Home size={24} className='text-white' />
                        </Button>
                        <p className='text-[13px] text-gray-300 font-medium'>Home</p>
                    </div>
                    <div className='w-auto h-auto flex flex-col gap-1  items-center '>
                        <Button className='cursor-pointer bg-[var(--surface)] w-10  h-10 rounded-full'>
                            <Clapperboard size={24} className='text-white' />
                        </Button>
                        <p className='text-[13px] text-gray-300 font-medium'>Shorts</p>
                    </div>
                    <div className='w-auto h-auto flex flex-col gap-1  items-center'>
                        <Button className='cursor-pointer bg-[var(--surface)] w-10  h-10 rounded-full'>
                            <Flag size={24} className='text-white' />
                        </Button>
                        <p className='text-[13px] text-gray-300 font-medium'>Notify Me</p>
                    </div>
                    <div className='w-auto h-auto flex flex-col gap-1   items-center'>
                        <Button className='cursor-pointer bg-[var(--surface)] w-10  h-10 rounded-full'>
                            <History size={24} className='text-white' />
                        </Button>
                        <p className='text-[13px] text-gray-300 font-medium'>History</p>
                    </div>
                    <div className='w-auto h-auto flex flex-col  gap-1  items-center'>
                        <Button className='cursor-pointer bg-[var(--surface)] w-10  h-10 rounded-full'>
                            <ListVideo size={24} className='text-white' />
                        </Button>
                        <p className='text-[13px] text-gray-300 font-medium'>Play List</p>
                    </div>
                    <div className='w-auto h-auto flex flex-col gap-1   items-center'>
                        <Button className='cursor-pointer bg-[var(--surface)] w-10  h-10 rounded-full'>
                            <CircleUser size={24} className='text-white' />
                        </Button>
                        <p className='text-[13px] text-gray-300 font-medium'>You</p>
                    </div>
                </div>}
        </div>
    )
}

export default sidenav