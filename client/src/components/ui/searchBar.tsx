"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "./button";
import { Mic, Search, X } from "lucide-react";
import { useClickOutside } from "@/hooks/useClickOutSide";
import SearchDropdown from "../layout/SearchDropdown";
import { useRouter } from "next/navigation";
import { Modal, ModalTrigger, ModalContent, ModalClose, ModalTitle } from "./model";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip";
const SearchBar = () => {
    const [open, setOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // Close dropdown when clicking outside
    useClickOutside(wrapperRef, () => setOpen(false));

    // 🔍 Fetch results from API as user types
    useEffect(() => {
        const fetchResults = async () => {
            if (searchInput.trim().length === 0) {
                setResults([]);
                return;
            }

            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(searchInput)}`);
                const data = await res.json();
                setResults(data.results || []);
            } catch (err) {
                console.error("Search error:", err);
            }
        };

        const timeout = setTimeout(fetchResults, 400); // debounce typing
        return () => clearTimeout(timeout);
    }, [searchInput]);

    // 🧭 Navigate to search result page
    const handleSearch = () => {
        console.log(searchInput)
        if (!searchInput.trim()) return;
        router.push(`/result?search_query=${encodeURIComponent(searchInput)}`);
        setOpen(false);
    };

    // When user clicks a dropdown item
    const handleSelectResult = (title: string) => {
        setSearchInput(title);
        setOpen(false);
        router.push(`/result?search_query=${encodeURIComponent(title)}`);
    };

    return (
        <div
            ref={wrapperRef}
            className="hidden w-[320px] lg:w-[550px] xl:w-[730px] h-full md:flex gap-4 items-center"
        >
            <div className="w-full h-11 bg-[var(--surface)] rounded-full flex border border-[var(--foreground)] relative">
                <div className="w-full relative">
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onFocus={() => setOpen(true)}
                        placeholder="Search"
                        className="w-full focus:border focus:border-[var(--info)] rounded-l-full border-r border-[var(--foreground)] outline-none pl-4 text-white h-full bg-[var(--background)]"
                    />

                    {open && (
                        <SearchDropdown results={results} onSelect={handleSelectResult} />
                    )}
                </div>

                <div className="w-[63px] flex-none flex items-center justify-center h-full">
                    <button onClick={handleSearch} className="cursor-pointer">
                        <Search size={24} className="text-white" />
                    </button>
                </div>
            </div>
            <Modal>
                <ModalTrigger asChild>
                    <Button
                        className="w-10 bg-[var(--surface)] flex-none h-10 rounded-full"
                        size="icon"
                        variant="default"
                    >
                        <TooltipProvider delayDuration={200}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span>
                                        <Mic size={24} className="text-white" />
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    Search with your voice
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </Button>
                </ModalTrigger>

                <ModalContent className="flex flex-col items-end">
                    <ModalClose>
                        <X size={24} className="text-white" />
                    </ModalClose>
                    <ModalTitle className="mt-4">
                        <p className="text-[24px] font-semibold">Search with your voice</p>
                    </ModalTitle>
                    <p className="text-gray-300 text-[15px]">
                        To search by voice, go to your browser settings and allow access to microphone
                    </p>
                    <div className="w-full h-auto pt-[120px] flex items-center justify-center pb-[70px]">
                        <Button
                            size="icon"
                            variant="default"
                            className="bg-[var(--background)] rounded-full w-18 h-18"
                        >
                            <Mic size={32} className="text-white" />
                        </Button>
                    </div>
                </ModalContent>
            </Modal>

        </div>
    );
};

export default SearchBar;
