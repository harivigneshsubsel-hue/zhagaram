import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-dark shadow-[0_1px_0_rgb(255_255_255/0.08)_inset]",
        secondary:
          "bg-card text-foreground ring-1 ring-border hover:bg-muted",
        ghost: "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10",
        outline:
          "bg-transparent text-primary-foreground ring-1 ring-primary-foreground/40 hover:bg-primary-foreground/10",
        gold: "bg-accent text-accent-foreground hover:brightness-95",
        dark: "bg-secondary text-secondary-foreground hover:bg-ink",
      },
      size: {
        sm: "h-10 px-4 text-sm rounded-md",
        md: "h-11 px-5 text-sm rounded-lg",
        lg: "h-12 px-6 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
    children: ReactNode;
  };

export function Button({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
