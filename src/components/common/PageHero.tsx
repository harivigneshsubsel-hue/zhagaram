import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Container } from "@/components/common/Container";
import type { BreadcrumbItem } from "@/types/common";

export function PageHero({
  kicker,
  title,
  description,
  crumbs,
  image,
  children,
}: {
  kicker?: string;
  title: string;
  description?: string;
  crumbs: BreadcrumbItem[];
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="-mt-[4.25rem] relative overflow-hidden border-b border-primary-dark bg-primary-dark text-primary-foreground"
      style={
        image
          ? {
              backgroundImage: `
                linear-gradient(
                  90deg,
                  rgba(6, 56, 36, 0.95) 0%,
                  rgba(6, 56, 36, 0.82) 38%,
                  rgba(6, 56, 36, 0.55) 68%,
                  rgba(6, 56, 36, 0.35) 100%
                ),
                url("${image}")
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <Container className="relative z-10 py-14 sm:py-20">
        <Breadcrumb items={crumbs} tone="dark" />

        {kicker ? (
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {kicker}
          </p>
        ) : null}

        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            {description}
          </p>
        ) : null}

        {children}
      </Container>
    </section>
  );
}