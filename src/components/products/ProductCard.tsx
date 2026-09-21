import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-border-hover)]">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={`${product.title} — illustrative product photography`}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold tracking-tight">{product.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {product.shortDescription}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
            View More
            <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
