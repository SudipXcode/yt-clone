"use client";

import React, { useRef, useState, useEffect } from "react";

interface HoverVideoProps {
    thumbnailUrl: string;
    duration: number;
    hoverPreviewUrl: string// in seconds (e.g., 30)
}

export default function HoverVideo({ thumbnailUrl, duration, hoverPreviewUrl }: HoverVideoProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const hoverTimer = useRef<NodeJS.Timeout | null>(null);

    const [isVideoVisible, setIsVideoVisible] = useState(false);


    // ✅ Format duration like 0:30, 2:05, etc.
    const formatTime = (seconds: number) => {
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const handleMouseEnter = () => {
        // Start a timer to show video after 2 seconds
        hoverTimer.current = setTimeout(() => {
            setIsVideoVisible(true);
        }, 1000);
    };

    const handleMouseLeave = () => {
        // Clear timer if hover ends early
        if (hoverTimer.current) {
            clearTimeout(hoverTimer.current);
            hoverTimer.current = null;
        }

        // Hide and reset video
        setIsVideoVisible(false);
        const video = videoRef.current;
        if (video) {
            video.pause();
            video.currentTime = 0;

        }
    };

    // ✅ Start playing automatically after video becomes visible
    useEffect(() => {
        const video = videoRef.current;
        if (isVideoVisible && video) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch((err) => {
                    console.warn("Autoplay prevented:", err);
                });
            }
        }
    }, [isVideoVisible]);



    return (
        <div
            className="w-full h-auto rounded-xl overflow-hidden cursor-pointer bg-black"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full   relative">
                {/* Thumbnail (default) */}
                {!isVideoVisible && (
                    <img
                        src={thumbnailUrl}
                        alt="Thumbnail"
                        className="w-full aspect-video object-cover rounded-xl transition-opacity duration-300"
                    />
                )}

                {/* Video (plays on hover) */}
                {isVideoVisible && (
                    <video
                        ref={videoRef}
                        src={hoverPreviewUrl}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full aspect-video object-cover rounded-xl"
                    />
                )}
                <div className="absolute bottom-5 right-2 bg-black/70 text-white font-medium text-xs px-1.5 py-0.5 rounded">
                    {formatTime(duration)}
                </div>

            </div>
        </div>
    );
}
