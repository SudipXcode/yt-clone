"use client"
import React from 'react'
import { Button } from '../ui/button'
import { CreditCard, CircleUser, Clapperboard, Flag, Gamepad2, History, Home, ListVideo, MessageCircleQuestion, MessageSquareShare, Music, Settings, SquarePlay, ThumbsUp, Trophy } from 'lucide-react'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../ui/tooltip";
import useCurrentPage from "@/hooks/usePathname";
const sidenav = () => {
    const isOpen = useAppSelector((state) => state.sidenav.isOpen);
    const primary = [
        { label: "Home", href: "/", icon: Home },
        { label: "Shorts", href: "/shorts", icon: Clapperboard },
        { label: "Notify Me", href: "/feed/notify_me", icon: Flag }
    ]
    const you = [
        { label: "History", href: "/feed/history", icon: History },
        { label: "Play list", href: "/feed/playlist", icon: ListVideo },
        { label: "Your videos ", href: "/your_studio/content", icon: SquarePlay },
        { label: "Liked videos", href: "/feed/liked_videos", icon: ThumbsUp }
    ]
    const explore = [
        { label: "Music", href: "/result/music", icon: Music },
        { label: "Gaming", href: "/result/gaming", icon: ListVideo },
        { label: "Sports ", href: "/result/sports", icon: SquarePlay },
    ]
    const personalized = [
        { label: "Settings", href: "/account/advanced_settings", icon: Settings },
        { label: "Membership", href: "/account/purchase_membership", icon: CreditCard },
        { label: "Help ", href: "/account/help", icon: MessageCircleQuestion },
        { label: "Send feedback ", href: "/account/send_feedback", icon: MessageSquareShare },
    ]

    const currentPage = useCurrentPage();


    const smNavlist = [
        { label: "Home", href: "/", icon: Home },
        { label: "Shorts", href: "/shorts", icon: Clapperboard },
        { label: "Notify Me", href: "/feed/notify_me", icon: Flag },
        { label: "History", href: "/feed/history", icon: History },
        { label: "Play list", href: "/feed/playlist", icon: ListVideo },
        { label: "You", href: "/feed/you", icon: CircleUser },
    ]
    return (
        <div className={`${isOpen ? "w-[250px]" : "w-[80px]"} `}>
            {isOpen ? <div className='w-[250px]  fixed top-[60px]  p-2 flex flex-col gap-1   h-auto'>
                <div className='w-full border-b border-[var(--surface)] pb-4 h-auto flex flex-col gap-2'>
                    <TooltipProvider delayDuration={200}>
                        {primary.map((data, i) => {
                            const Icon = data.icon
                            const isActive = currentPage === data.href;
                            return (
                                <Tooltip key={i}>
                                    <TooltipTrigger asChild>
                                        <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                                            <Button className={`${isActive ? "bg-[var(--surface)]" : "bg-[var(--background)]"}  w-10  h-10 rounded-full`}>
                                                <Icon size={24} className={`${isActive ? "text-white" : "text-gray-300"} `} />
                                            </Button>
                                            <h4 className={` ${isActive ? "text-white" : "text-gray-300"} text-[15px]  font-semibold `}>{data.label}</h4>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent sideOffset={-85} side="right">{data.label}</TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </TooltipProvider>
                </div>
                <div className='w-full border-b border-[var(--surface)] py-4 h-auto flex flex-col gap-2'>
                    <h5 className='ml-5 text-white font-bold text-[17px]'>You</h5>
                    <TooltipProvider delayDuration={200}>
                        {you.map((data, i) => {
                            const Icon = data.icon
                            const isActive = currentPage === data.href;
                            return (
                                <Tooltip key={i}>
                                    <TooltipTrigger asChild>
                                        <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                                            <Button className={`${isActive ? "bg-[var(--surface)]" : "bg-[var(--background)]"}  w-10  h-10 rounded-full`}>
                                                <Icon size={24} className={`${isActive ? "text-white" : "text-gray-300"} `} />
                                            </Button>
                                            <h4 className={` ${isActive ? "text-white" : "text-gray-300"} text-[15px]  font-semibold `}>{data.label}</h4>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent sideOffset={-85} side="right">{data.label}</TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </TooltipProvider>
                </div>
                <div className='w-full border-b border-[var(--surface)] py-4 h-auto flex flex-col gap-2'>
                    <h5 className='ml-5 text-white font-bold text-[17px]'>Explore</h5>

                    <TooltipProvider delayDuration={200}>
                        {explore.map((data, i) => {
                            const Icon = data.icon
                            const isActive = currentPage === data.href;
                            return (
                                <Tooltip key={i}>
                                    <TooltipTrigger asChild>
                                        <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                                            <Button className={`${isActive ? "bg-[var(--surface)]" : "bg-[var(--background)]"}  w-10  h-10 rounded-full`}>
                                                <Icon size={24} className={`${isActive ? "text-white" : "text-gray-300"} `} />
                                            </Button>
                                            <h4 className={` ${isActive ? "text-white" : "text-gray-300"} text-[15px]  font-semibold `}>{data.label}</h4>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent sideOffset={-85} side="right">{data.label}</TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </TooltipProvider>
                </div>
                <div className='w-full  py-4 h-auto flex flex-col gap-2'>
                    <TooltipProvider delayDuration={200}>
                        {personalized.map((data, i) => {
                            const Icon = data.icon
                            const isActive = currentPage === data.href;
                            return (
                                <Tooltip key={i}>
                                    <TooltipTrigger asChild>
                                        <div className='w-full cursor-pointer h-auto px-4  flex items-center gap-4'>
                                            <Button className={`${isActive ? "bg-[var(--surface)]" : "bg-[var(--background)]"}  w-10  h-10 rounded-full`}>
                                                <Icon size={24} className={`${isActive ? "text-white" : "text-gray-300"} `} />
                                            </Button>
                                            <h4 className={` ${isActive ? "text-white" : "text-gray-300"} text-[15px]  font-semibold `}>{data.label}</h4>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent sideOffset={-85} side="right">{data.label}</TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </TooltipProvider>
                </div>
            </div>
                :
                <div className='w-[80px]  fixed   p-2  flex flex-col gap-6 items-center h-auto'>
                    <TooltipProvider delayDuration={200}>
                        {smNavlist.map((data, i) => {
                            const Icon = data.icon
                            const isActive = currentPage === data.href;
                            return (
                                <Tooltip key={i}>
                                    <TooltipTrigger asChild>
                                        <div className='w-auto h-auto flex flex-col gap-1  items-center '>
                                            <Button className='cursor-pointer bg-[var(--surface)] w-10  h-10 rounded-full'>
                                                <Icon size={24} className={`${isActive ? "text-white" : "text-gray-300"}`} />
                                            </Button>
                                            <p className={` ${isActive ? "text-white" : "text-gray-300"} text-[13px]  font-medium `}>{data.label}</p>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent sideOffset={5} className='z-[9999]' side="right">{data.label}</TooltipContent>
                                </Tooltip>
                            )
                        })}
                    </TooltipProvider>
                </div>}
        </div>
    )
}

export default sidenav