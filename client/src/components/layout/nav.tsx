"use client"
import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/fullsizeoutput_11a1.jpeg'
import ProfilePic from '../../../public/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
import { Button } from '../ui/button'
import { Menu, Bell, Plus, Search } from "lucide-react";
import SearchBar from '../ui/searchBar';
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '../ui/dropdown'
import { useAppDispatch } from "../../redux/hooks";
import { toggleSidenav } from "../../redux/slices/sidenavSlice";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../ui/tooltip";
import CreaterDropDown from './createrDropDown';
import Notifications from './notifications'
import ProfileOptions from './profileOptions'
const nav = () => {

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
                        <CreaterDropDown />
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <TooltipProvider delayDuration={200}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button className='w-10 relative  h-10 rounded-full' size="icon" variant="default">
                                            <div className='absolute top-0 right-0 h-5 px-1 rounded-full flex items-center justify-center bg-red-500'>
                                                <p className='text-white font-medium text-[14px]'>8+</p>
                                            </div>
                                            <Bell size={25} className='text-white' />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="left">Notifications</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </DropdownTrigger>
                        <Notifications />
                    </Dropdown>
                    <Dropdown>
                        <DropdownTrigger>
                            <button className='w-auto cursor-pointer h-auto'><Image alt='ppic' className='w-9 h-9 rounded-full' src={ProfilePic} /></button>
                        </DropdownTrigger>
                        <ProfileOptions />
                    </Dropdown>

                </div>
            </div>
        </nav>
    )
}

export default nav 