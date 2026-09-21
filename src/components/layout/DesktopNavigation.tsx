import { Link, useRouterState } from "@tanstack/react-router";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function DesktopNavigation({
  tone = "dark",
}: {
  tone?: "dark" | "light";
}) {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  return (
    <nav
      aria-label="Primary"
      className="hidden items-center gap-2 lg:flex"
    >
      {mainNavigation.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "relative rounded-md px-4 py-2.5 text-sm font-medium",
              "transition-all duration-200",

              // BEFORE SCROLL
              tone === "light"
                ? active
                  ? "text-primary"
                  : "text-primary/75 hover:text-primary"

                // AFTER SCROLL
                : active
                  ? "text-primary"
                  : "text-primary/75 hover:text-primary",
            )}
          >
            {item.label}

            {active && (
              <span
                className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-primary"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}