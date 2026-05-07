import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="accent-line" aria-hidden="true" />
      <h2 className="text-[var(--foreground)]">{title}</h2>
      {description && (
        <p className="max-w-[55ch] text-[var(--ink-70)] text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
