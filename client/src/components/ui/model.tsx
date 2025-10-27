"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Root modal wrapper
const Modal = ({
    open,
    onOpenChange,
    children,
}: {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}) => {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            {children}
        </Dialog.Root>
    );
};

// Trigger
const ModalTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<"button"> & { asChild?: boolean }
>(({ children, asChild = false, ...props }, ref) => (
    <Dialog.Trigger ref={ref} asChild={asChild} {...props}>
        {children}
    </Dialog.Trigger>
));
ModalTrigger.displayName = "ModalTrigger";

// Content
const ModalContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
    <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />

        <Dialog.Content
            ref={ref}
            className={cn(
                "fixed top-5 left-[50%] -translate-x-1/2  z-50 w-[560px] bg-[var(--surface)] rounded-lg p-6  focus:outline-none",
                className
            )}
            {...props}
        >
            {children}
        </Dialog.Content>
    </Dialog.Portal>
));
ModalContent.displayName = "ModalContent";

// Modal title (separate)
const ModalTitle = React.forwardRef<
    HTMLHeadingElement,
    React.ComponentPropsWithoutRef<"h2">
>(({ className, children, ...props }, ref) => (
    <Dialog.Title
        ref={ref}
        className={cn(" text-white w-full ", className)}
        {...props}
    >
        {children}
    </Dialog.Title>
));
ModalTitle.displayName = "ModalTitle";

// Modal close button (separate)
const ModalClose = React.forwardRef<
    HTMLButtonElement,
    React.ComponentPropsWithoutRef<"button">
>(({ className, children, ...props }, ref) => (
    <Dialog.Close asChild>
        <button
            ref={ref}
            className={cn(
                "rounded-full p-1  cursor-pointer",
                className
            )}
            {...props}
        >
            {children || <X className="w-5 h-5" />}
        </button>
    </Dialog.Close>
));
ModalClose.displayName = "ModalClose";

export { Modal, ModalTrigger, ModalContent, ModalTitle, ModalClose };
