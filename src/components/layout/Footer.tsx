import { Link } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { footerColumns, footerCopy } from "@/data/footer";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {footerCopy.tagline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/55">
              {footerCopy.blurb}
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerCopy.copyright}</p>
          <p>From Indian roots to global routes.</p>
        </div>
      </Container>
    </footer>
  );
}
