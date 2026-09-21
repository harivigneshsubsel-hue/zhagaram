import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const ink = tone === "light" ? "text-primary-foreground" : "text-foreground";
  return (
    <Link
      to="/"
      className="flex items-center gap-3 rounded-sm focus-visible:outline-offset-4"
      aria-label={`${siteConfig.name} home`}
    >
      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <svg viewBox="0 0 32 32" className="size-6" aria-hidden>
          <path
            d="M8 8h11.5c2.8 0 4.5 1.7 4.5 4.1 0 2.6-1.9 4.1-4.7 4.1H14v8H8V8zm6 5.6h4.4c1.1 0 1.8-.6 1.8-1.5s-.6-1.5-1.8-1.5H14v3z"
            fill="currentColor"
          />
          <path
            d="M21.2 6.5c.3 1.4.2 2.6-.4 3.5"
            fill="none"
            stroke="#A6844A"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className={cn("leading-tight", compact && "hidden sm:block")}>
        <span className={cn("block text-[13px] font-semibold tracking-[0.18em] uppercase", ink)}>
          Zhagaram
        </span>
        <span className={cn("block text-[11px] tracking-[0.28em] uppercase", tone === "light" ? "text-primary-foreground/70" : "text-muted-foreground")}>
          Exim LLP
        </span>
      </span>
    </Link>
  );
}
