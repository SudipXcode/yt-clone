"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
    "All", "Music", "Thrillers", "Tamil Cinema", "Sports", "Comedy", "Gaming", "Live", "Podcasts", "Drama", "Recently Uploaded",
    "Music", "Thrillers", "Tamil Cinema", "Sports", "Comedy", "Gaming", "Live", "Podcasts", "Drama", "Recently Uploaded",
];

interface CarouselProps {
    width: number;
}

const Carousel: React.FC<CarouselProps> = ({ width }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;

        const { scrollLeft, scrollWidth, clientWidth } = el;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        handleScroll(); // initial check
        el.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            el.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = direction === "left" ? -width / 2 : width / 2;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full">
            {/* Left Arrow */}
            {showLeft && (
                <Button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-6 -translate-y-1/2 z-10 bg-[var(--surface)] text-white p-1 rounded-full transition"
                >
                    <ChevronLeft size={24} />
                </Button>
            )}

            {/* Scrollable Categories */}
            <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto hide-scrollbar px-6 py-2 w-full scroll-smooth"
            >
                {categories.map((category, index) => {
                    const isActive = activeCategory === category;
                    return (
                        <button
                            key={`${category}-${index}`}
                            onClick={() => setActiveCategory(category)}
                            className={`whitespace-nowrap rounded-xl px-4 cursor-pointer h-9 flex items-center justify-center font-medium text-[15px] transition-all duration-200
                                ${isActive
                                    ? "bg-white text-black"
                                    : "bg-[var(--surface)] text-white hover:bg-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>

            {/* Right Arrow */}
            {showRight && (
                <Button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-6 -translate-y-1/2 z-10 bg-[var(--surface)] text-white p-1 rounded-full transition"
                >
                    <ChevronRight size={24} />
                </Button>
            )}
        </div>
    );
};

export default Carousel;
