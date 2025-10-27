import React from 'react'
import { DropdownContent, DropdownItem } from '../ui/dropdown'
import { Button } from '../ui/button'
const videoSaveOption = () => {
    return (
        <DropdownContent align="bottom">
            <DropdownItem>
                <Button className='w-auto text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 rounded-lg' variant="default"> Update video</Button>
            </DropdownItem>
            <DropdownItem>
                <Button className='w-auto text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 rounded-lg' variant="default">  Go live</Button>
            </DropdownItem>
            <DropdownItem>
                <Button className='w-auto text-[15px] font-medium h-auto px-4 py-2 flex items-center gap-5 rounded-lg' variant="default"> Create post</Button>
            </DropdownItem>
        </DropdownContent>
    )
}

export default videoSaveOption