import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BreadcrumbItem } from "@/types/common";

export function Breadcrumb({
  items,
  tone = "light",
}: {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {item.href && !last ? (
                <Link
                  to={item.href}
                  className={cn(
                    "hover:underline",
                    tone === "dark"
                      ? "text-primary-foreground/65 hover:text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={tone === "dark" ? "text-primary-foreground" : "text-foreground"}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!last ? (
                <ChevronRight
                  className={cn(
                    "size-3.5",
                    tone === "dark" ? "text-primary-foreground/40" : "opacity-60",
                  )}
                  aria-hidden
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
