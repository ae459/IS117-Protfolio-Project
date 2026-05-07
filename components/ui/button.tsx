import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-semibold text-sm transition-all focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--accent)] text-white hover:bg-[var(--accent-strong)] shadow-[0_0_20px_var(--accent-muted)]",
        secondary:
          "border border-[var(--ink-20)] bg-transparent text-[var(--foreground)] hover:border-[var(--ink-40)] hover:bg-[var(--surface-2)]",
        ghost:
          "bg-transparent text-[var(--accent-soft)] hover:text-[var(--accent-strong)]",
        accent:
          "bg-[var(--accent-muted)] border border-[var(--accent-border)] text-[var(--accent-soft)] hover:bg-[var(--accent)] hover:text-white",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-5",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
