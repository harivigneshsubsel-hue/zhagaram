import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { useRouterState } from "@tanstack/react-router";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/");
  const isLogin = pathname === "/login";
  const isStandalone = isAdmin || isLogin;

  if (isStandalone) {
    return (
      <>
        {children}
        <ScrollToTop />
      </>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-[4.25rem]">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
