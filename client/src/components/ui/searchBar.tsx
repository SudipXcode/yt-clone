"use client";
import React, { useRef, useState } from "react";
import { Button } from "./button";
import { Mic, Search } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutSide"; // 👈 import the hook

import SearchDropdown from "../layout/SearchDropdown";
const SearchBar = () => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useClickOutside(wrapperRef, () => setOpen(false));

    return (
        <div
            ref={wrapperRef}
            className="hidden w-[320px] lg:w-[550px] xl:w-[730px] h-full md:flex gap-4 items-center"
        >
            <div className="w-full  h-11 bg-[var(--surface)] rounded-full flex border border-[var(--foreground)] relative">
                <div className="w-full  relative h-auto">
                    <input
                        onFocus={() => setOpen(true)}
                        placeholder="Search"
                        className="w-full focus:border focus:border-[var(--info)] rounded-l-full border-r border-[var(--foreground)] outline-none pl-4 text-white h-full bg-[var(--background)]"
                    />

                    {open && (
                        <SearchDropdown />
                    )}
                </div>

                <div className="w-[63px] flex-none flex items-center justify-center h-full">
                    <button className="cursor-pointer">
                        <Search size={24} className="text-white" />
                    </button>
                </div>
            </div>

            <Button
                className="w-10 bg-[var(--surface)] flex-none h-10 rounded-full"
                size="icon"
                variant="default"
            >
                <Mic size={24} className="text-white" />
            </Button>
        </div>
    );
};

export default SearchBar;
