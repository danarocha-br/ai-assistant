import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@workspace/ui/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-sm font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "font-semibold border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        success:
          "text-xs font-semibold border-transparent bg-green-600 text-primary-foreground [a&]:hover:bg-green-500",
        social:
          "py-1 font-semibold border-transparent bg-accent text-accent-foreground [a&]:hover:bg-primary/90 pl-1",
        secondary:
          "border-transparent bg-blue-100/70 dark:bg-blue-400/30 text-blue-800 dark:text-blue-100 [a&]:hover:bg-secondary/90 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
