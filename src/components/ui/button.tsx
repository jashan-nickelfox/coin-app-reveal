
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-gold via-amber to-darkGold text-white hover:from-darkGold hover:via-gold hover:to-amber hover:text-white dark:from-gold dark:via-amber dark:to-darkGold",
        destructive: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600",
        outline: "border-2 border-gold text-gold hover:bg-gold/10 hover:text-darkGold dark:text-gold dark:hover:bg-gold/20 dark:hover:text-gold",
        secondary: "bg-gold text-darkGold hover:bg-amber hover:text-white dark:bg-amber dark:text-black dark:hover:bg-gold",
        ghost: "hover:bg-amber/20 hover:text-amber dark:hover:bg-gold/20 dark:hover:text-gold",
        link: "underline text-gold hover:text-amber dark:text-gold dark:hover:text-amber",
      },
      size: {
        default: "h-11 px-7 py-3",
        sm: "h-9 rounded-md px-4 py-2 text-sm",
        lg: "h-14 rounded-xl px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
