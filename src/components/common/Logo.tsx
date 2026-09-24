import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Logo({
  tone: _tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className="flex items-center rounded-sm border-0 outline-none focus-visible:outline-none"
      aria-label={`${siteConfig.name} home`}
    >
      {/* Desktop & Tablet */}
      <img
        src="/logo.png"
        alt={siteConfig.name}
        className={cn(
          "hidden w-auto max-w-none border-0 object-contain outline-none",
          "h-14 sm:h-14 md:h-16 lg:h-[4.75rem] xl:h-20 2xl:h-[5.5rem]",
          "sm:block",
          compact &&
            "sm:h-12 md:h-14 lg:h-16 xl:h-[4.5rem] 2xl:h-20",
        )}
      />

      {/* Mobile */}
      <img
        src="/images/common/mobile-logo.png"
        alt={siteConfig.name}
        className={cn(
          "block h-12 w-auto max-w-[11rem] border-0 object-contain outline-none",
          compact && "h-10 max-w-[9rem]",
          "sm:hidden",
        )}
      />
    </Link>
  );
}
