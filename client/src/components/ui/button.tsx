
"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";


// ✅ Define variant styles using CVA
const buttonVariants = cva(
    "inline-flex items-center cursor-pointer transition ease-linear duration-200 justify-center ",
    {
        variants: {
            variant: {
                default:
                    "hover:bg-[var(--foreground)] ",
                outline:
                    "",
                ghost:
                    "",
                danger:
                    "",
                success:
                    "",
            },
            size: {
                sm: "",
                md: "",
                lg: "",
                icon: "p-1",
            },
            fullWidth: {
                true: "w-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
    icon?: React.ReactNode;
}

// ✅ Button Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { className, variant, size, fullWidth, asChild = false, isLoading, icon, children, ...props },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                ref={ref as any}
                className={cn(buttonVariants({ variant, size, fullWidth }), className)}
                disabled={isLoading}
                {...props}
            >
                {isLoading ? (
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                ) : (
                    icon && <span className="mr-2">{icon}</span>
                )}
                {children}
            </Comp>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
