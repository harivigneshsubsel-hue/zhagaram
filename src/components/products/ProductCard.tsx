import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/types/product";

export function ProductCard({ product, categoryLink = false }: { product: Product; categoryLink?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-border-hover)]">
      {categoryLink ? <Link to="/products" search={{ category: product.slug }} preload="intent" className="block">
        <CardContent product={product} />
      </Link> : <Link to="/products/$slug" params={{ slug: product.slug }} preload="intent" className="block">
        <CardContent product={product} />
      </Link>}
    </article>
  );
}

function CardContent({ product }: { product: Product }) {
  return (
    <>
        <div className="relative aspect-[4/3] overflow-hidden bg-[#edf4ee]">
          {product.image ? <img
              src={product.image}
              alt={`${product.title} product`}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            /> : <div className="grid size-full place-items-center text-sm text-[#52715d]">Image unavailable</div>}
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
    </>
  );
}
