"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

// Root dropdown wrapper (controlled/uncontrolled)
const Dropdown = ({
    open,
    onOpenChange,
    children,
}: {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}) => {
    return (
        <DropdownMenu.Root open={open} onOpenChange={onOpenChange}>
            {children}
        </DropdownMenu.Root>
    );
};

// Trigger
const DropdownTrigger = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
    const { asChild, ...rest } = props as any;
    return (
        <DropdownMenu.Trigger asChild>
            <div
                ref={ref}
                className={cn("cursor-pointer w-auto", className)}
                {...rest}
            >
                {children}
            </div>
        </DropdownMenu.Trigger>
    );
});
DropdownTrigger.displayName = "DropdownTrigger";

// Content
const DropdownContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof DropdownMenu.Content>
>(({ className, sideOffset = 4, align = "start", ...props }, ref) => (
    <DropdownMenu.Portal>
        <DropdownMenu.Content
            ref={ref}
            align={align}
            sideOffset={sideOffset}
            className={cn(
                "z-50  rounded-xl py-2   bg-[var(--surface)] shadow-lg ",
                className
            )}
            {...props}
        />
    </DropdownMenu.Portal>
));
DropdownContent.displayName = "DropdownContent";

// Item
const DropdownItem = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof DropdownMenu.Item>
>(({ className, ...props }, ref) => (
    <DropdownMenu.Item
        ref={ref}
        className={cn(
            " text-white rounded-lg   cursor-pointer select-none hover:bg-[var(--foreground)]",
            className
        )}
        {...props}
    />
));
DropdownItem.displayName = "DropdownItem";

export { Dropdown, DropdownTrigger, DropdownContent, DropdownItem };
