
"use client";
import { useEffect, useRef, useState } from 'react';
import Carousel from "../../components/ui/carousel";
export default function ResizableDiv() {
    const divRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const updateWidth = () => {
            if (divRef.current) {
                setWidth(divRef.current.offsetWidth);
            }
        };

        const observer = new ResizeObserver(updateWidth);
        if (divRef.current) {
            observer.observe(divRef.current);
            updateWidth(); // Initial width
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={divRef}
            className='w-full  h-auto '
        >
            <Carousel width={width} />
        </div>


    );
}