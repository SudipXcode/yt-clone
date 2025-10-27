import React from 'react'
import Image from 'next/image'
import { Settings, ShieldCheck, CircleUserRound, LogOut, Piano, CircleDollarSign, Languages, MessageCircleQuestion, MessageSquareShare } from "lucide-react";
import { Button } from '../ui/button'
import { DropdownContent, DropdownItem } from '../ui/dropdown'
import ProfilePic from '../../../public/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'
const profileOptions = () => {
    return (
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
    )
}

export default profileOptions