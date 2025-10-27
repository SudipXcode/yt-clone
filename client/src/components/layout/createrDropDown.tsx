import React from 'react'
import { Radio, SquarePlay, SquarePen } from "lucide-react";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '../ui/dropdown'
import { Button } from '../ui/button';
const createrDropDown = () => {
    return (
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
    )
}

export default createrDropDown