import { Link, useRouterState } from "@tanstack/react-router";
import { ctaNavigation, mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  return (
    <div
      id="mobile-menu"
      hidden={!open}
      className={cn(
        "border-t border-primary/10 bg-cream lg:hidden",
        open ? "block" : "hidden",
      )}
    >
      <nav
        aria-label="Mobile"
        className="flex flex-col px-5 py-5"
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
              onClick={onClose}
              className={cn(
                "rounded-md px-4 py-3 text-base font-medium",
                "transition-all duration-200",

                active
                  ? "bg-primary/10 text-primary"
                  : "text-primary hover:bg-primary/5 hover:text-primary-dark",
              )}
            >
              {item.label}
            </Link>
          );
        })}

        {/* CTA */}

        <Link
          to={ctaNavigation.href}
          onClick={onClose}
          className={cn(
            "mt-4 inline-flex h-12 items-center justify-center",
            "rounded-lg bg-primary px-5",
            "text-sm font-semibold text-primary-foreground",
            "transition-colors duration-200",
            "hover:bg-primary-dark",
          )}
        >
          {ctaNavigation.label}
        </Link>
      </nav>
    </div>
  );
}