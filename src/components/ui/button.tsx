import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-accent-fg shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] hover:bg-navy-deep",
        secondary:
          "bg-paper text-navy shadow-[0_0_0_1px_rgba(30,58,95,0.18)] hover:bg-paper-edge",
        ghost: "bg-transparent text-navy hover:bg-paper-edge",
      },
      size: {
        sm: "h-10 px-3.5 text-sm rounded-[10px]",
        md: "h-11 px-4 text-[0.95rem] rounded-xl",
        lg: "h-12 px-5 text-base rounded-xl",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: Props) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
