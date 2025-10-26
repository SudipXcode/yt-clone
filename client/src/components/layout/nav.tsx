"use client"
import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/fullsizeoutput_11a1.jpeg'
import ProfilePic from '../../../public/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
import { Button } from '../ui/button'
import { Menu, Bell, Plus, Search, Radio, SquarePlay, SquarePen, Settings, EllipsisVertical, ShieldCheck, CircleUserRound, LogOut, Piano, CircleDollarSign, Languages, MessageCircleQuestion, MessageSquareShare } from "lucide-react";
import SearchBar from '../ui/searchBar';
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '../ui/dropdown'
import { timeAgo } from '../../lib/timeConversion'
import { type } from '../../../.next/types/routes';
import { useAppDispatch } from "../../redux/hooks";
import { toggleSidenav } from "../../redux/slices/sidenavSlice";
const nav = () => {
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
    const dispatch = useAppDispatch();
    return (
        <nav className='w-full z-40 px-4 lg:px-6 h-15 flex  justify-between  bg-[var(--background)] fixed top-0 right-0'>
            <div className='w-auto  h-full flex items-center gap-4'>
                <Button onClick={() => dispatch(toggleSidenav())} className='w-10  h-10 rounded-full' size="icon" variant="default">
                    <Menu size={24} className='text-white' />
                </Button>
                <Image alt='logo' src={Logo} className='w-auto h-7' />
            </div>
            <SearchBar />
            <div className='w-auto h-full'>
                <div className='flex h-full items-center justify-center md:hidden'>
                    <Button className='cursor-pointer bg-[var(--surface)] w-10  h-10 rounded-full'>
                        <Search size={24} className='text-white' />
                    </Button>
                </div>
                <div className='hidden  h-full md:flex gap-5 items-center justify-center'>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button size="lg" className='bg-[var(--surface)] px-4 flex gap-1 font-semibold rounded-full text-white h-[38px]' variant="default" >
                                <Plus size={26} className='text-white' />
                                Create
                            </Button>
                        </DropdownTrigger>
                        <DropdownContent align="start">
                            <DropdownItem>
                                <Button className='w-auto text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 rounded-lg' variant="default"> <SquarePlay size={24} />Update video</Button>
                            </DropdownItem>
                            <DropdownItem>
                                <Button className='w-auto text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 rounded-lg' variant="default"> <Radio size={24} /> Go live</Button>
                            </DropdownItem>
                            <DropdownItem>
                                <Button className='w-auto text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 rounded-lg' variant="default"> <SquarePen size={24} />Create post</Button>
                            </DropdownItem>
                        </DropdownContent>
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button className='w-10 relative  h-10 rounded-full' size="icon" variant="default">
                                <div className='absolute top-0 -right-1 h-5 px-1 rounded-full flex items-center justify-center bg-red-500'>
                                    <p className='text-white font-medium text-[14px]'>8+</p>
                                </div>
                                <Bell size={25} className='text-white' />
                            </Button>
                        </DropdownTrigger>
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
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <button className='w-auto cursor-pointer h-auto'><Image alt='ppic' className='w-9 h-9 rounded-full' src={ProfilePic} /></button>
                        </DropdownTrigger>
                        <DropdownContent align="end" className='w-[300px] h-auto'>
                            <div className='w-full h-auto flex gap-3 p-4'>
                                <div className='w-[50px] flex-none h-auto'>
                                    <Image alt='ppic' className='w-[45px] h-[45px] rounded-full' src={ProfilePic} />
                                </div>
                                <div className='w-full h-auto'>
                                    <h4 className='text-white font-semibold text-[17px]'>Sudip Joshi</h4>
                                    <p className='text-gray-400 font-medium text-[15px]'>@sudipjoshifilms</p>
                                    <Button variant="ghost" className='text-blue-500 font-medium mt-2'>View your profile</Button>
                                </div>
                            </div>
                            <div className='w-full border-t flex flex-col gap-1 py-3 border-[var(--foreground)] h-auto'>
                                <DropdownItem>
                                    <Button className='w-auto outline-none text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 ' variant="default"> <ShieldCheck size={22} />Verify creater account</Button>
                                </DropdownItem>
                                <DropdownItem>
                                    <Button className='w-auto outline-none text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 ' variant="default"> <CircleUserRound size={22} />My account</Button>
                                </DropdownItem>
                                <DropdownItem>
                                    <Button className='w-auto outline-none text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 ' variant="default"> <LogOut size={22} />Sign out</Button>
                                </DropdownItem>
                            </div>
                            <div className='w-full border-t flex flex-col gap-1 py-3 border-[var(--foreground)] h-auto'>
                                <DropdownItem>
                                    <Button className='w-auto outline-none text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 ' variant="default"> <Piano size={22} />My studio</Button>
                                </DropdownItem>
                                <DropdownItem>
                                    <Button className='w-auto outline-none text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 ' variant="default"> <CircleDollarSign size={22} />Purchase and membership</Button>
                                </DropdownItem>
                                <DropdownItem>
                                    <Button className='w-auto outline-none text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 ' variant="default"> <Languages size={22} />Language: British English</Button>
                                </DropdownItem>
                            </div>
                            <div className='w-full border-t flex flex-col gap-1 py-3 border-[var(--foreground)] h-auto'>
                                <DropdownItem>
                                    <Button className='w-auto outline-none text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 ' variant="default"> <Settings size={22} />Settings</Button>
                                </DropdownItem>
                            </div>
                            <div className='w-full border-t flex flex-col gap-1 py-3 border-[var(--foreground)] h-auto'>
                                <DropdownItem>
                                    <Button className='w-auto outline-none text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 ' variant="default"> <MessageCircleQuestion size={22} />Help</Button>
                                </DropdownItem>
                                <DropdownItem>
                                    <Button className='w-auto outline-none text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 ' variant="default"> <MessageSquareShare size={22} />Send feedback</Button>
                                </DropdownItem>
                            </div>
                        </DropdownContent>
                    </Dropdown>

                </div>
            </div>
        </nav>
    )
}

export default nav 