import React from 'react'
import { History, X } from "lucide-react";
import Thumbnail from '../../../public/mqdefault.jpg'
import Image from "next/image";
const SearchDropdown = () => {
    const data = [
        {
            id: 1,
            title: "Nepali Songs 2025",
            thumbnail: "https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg",
        },
        {
            id: 2,
            title: "South Indian Action Movies Hindi Dubbed",
            thumbnail: "https://i.ytimg.com/vi/1roy4o4tqQM/hqdefault.jpg",
        },
        {
            id: 3,
            title: "Lo-fi Chill Beats",
            thumbnail: "https://i.ytimg.com/vi/jfKfPfyJRdk/hqdefault.jpg",
        },
        {
            id: 4,
            title: "Funny TikTok Compilation 2025",
            thumbnail: "https://i.ytimg.com/vi/TUVcZfQe-Kw/hqdefault.jpg",
        },
        {
            id: 5,
            title: "New Nepali Movies 2025",
            thumbnail: "https://i.ytimg.com/vi/3AtDnEC4zak/hqdefault.jpg",
        },
        {
            id: 6,
            title: "Football Highlights",
            thumbnail: "https://i.ytimg.com/vi/oHg5SJYRHA0/hqdefault.jpg",
        },
        {
            id: 7,
            title: "Python Tutorial for Beginners",
            thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
        },
        {
            id: 8,
            title: "Top 10 Tech Gadgets 2025",
            thumbnail: "https://i.ytimg.com/vi/lJIrF4YjHfQ/hqdefault.jpg",
        },
        {
            id: 9,
            title: "Meditation Music 1 Hour",
            thumbnail: "https://i.ytimg.com/vi/2OEL4P1Rz04/hqdefault.jpg",
        },
        {
            id: 10,
            title: "Motivational Speech by Sandeep Maheshwari",
            thumbnail: "https://i.ytimg.com/vi/EvknN89JoWo/hqdefault.jpg",
        },
        {
            id: 11,
            title: "React.js Crash Course 2025",
            thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/hqdefault.jpg",
        },
        {
            id: 12,
            title: "Gaming Live Stream",
            thumbnail: "https://i.ytimg.com/vi/v=QJO3ROT-A4E/hqdefault.jpg",
        },
        {
            id: 13,
            title: "Nepali Comedy Videos",
            thumbnail: "https://i.ytimg.com/vi/d-diB65scQU/hqdefault.jpg",
        },
        {
            id: 14,
            title: "Learn HTML & CSS Full Course",
            thumbnail: "https://i.ytimg.com/vi/mU6anWqZJcc/hqdefault.jpg",
        },
        {
            id: 15,
            title: "Best Travel Vlogs Nepal 2025",
            thumbnail: "https://i.ytimg.com/vi/VYOjWnS4cMY/hqdefault.jpg",
        },
    ];



    return (
        <div className="w-full  h-auto p-3 bg-[var(--surface)] absolute top-[45px] rounded-2xl flex flex-col  shadow-lg z-50">
            {data.map((data) => (
                <div key={data.id} className="w-full group py-2 px-3 cursor-pointer   hover:bg-[var(--foreground)] transition ease-linear duration-200 rounded-2xl h-auto flex items-center justify-between">
                    <div className="w-[50px] h-auto">
                        <History className="text-white" size={24} />
                    </div>
                    <div className="w-full h-auto">
                        <h5 className="text-white text-[16px]  font-semibold">{data.title}</h5>
                    </div>
                    <div className="w-[100px]  h-auto flex gap-1 justify-end items-center">
                        <img alt="thubnail" width={200} className="w-[55px] h-[33px] rounded-md" src={data.thumbnail} />
                        <button className="cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
                            <X size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SearchDropdown
