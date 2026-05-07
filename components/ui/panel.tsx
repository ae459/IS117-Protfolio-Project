import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const panelVariants = cva(
  "rounded-[var(--radius-lg)] border transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--surface-1)] border-[var(--ink-12)]",
        elevated:
          "bg-[var(--surface-2)] border-[var(--ink-12)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        accent:
          "bg-[var(--accent-muted)] border-[var(--accent-border)]",
        ghost:
          "bg-transparent border-[var(--ink-20)]",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export type PanelProps = React.ComponentProps<"section"> &
  VariantProps<typeof panelVariants> & {
    asChild?: boolean;
  };

export function Panel({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: PanelProps) {
  const Comp = asChild ? Slot : "section";
  return (
    <Comp
      className={cn(panelVariants({ variant, size }), className)}
      {...props}
    />
  );
}
