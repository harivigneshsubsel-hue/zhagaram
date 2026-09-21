import {
  Box,
  CheckCircle2,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import type { Product } from "@/types/product";

export function ProductDetails({
  product,
}: {
  product: Product;
}) {
  return (
    <section className="bg-[#f8f8f4] pt-16 sm:pt-20 lg:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* =================================
              PRODUCT IMAGE
          ================================= */}
          <div className="group relative">
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -left-4 -z-0 size-24 border-b border-l border-accent/40" />

            <div className="relative z-10 overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={`${product.title} — illustrative product photography, not a branded facility.`}
                className="
                  aspect-[4/3]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.02]
                "
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* =================================
              PRODUCT CONTENT
          ================================= */}
          <div className="relative">

            {/* Vertical accent */}
            <div className="absolute -left-5 top-0 hidden h-16 w-px bg-accent lg:block" />

            {/* Category */}
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-accent" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Category
              </p>
            </div>

            {/* Product title */}
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {product.title}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {product.description}
            </p>

            {/* =================================
                PRODUCT FOCUS
            ================================= */}
            <div className="mt-8 border-y border-border py-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Our focus
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">

                {/* Quality */}
                <div className="flex gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="size-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Quality
                    </p>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Careful selection and quality-focused sourcing.
                    </p>
                  </div>
                </div>

                {/* Handling */}
                <div className="flex gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="size-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Careful handling
                    </p>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Proper handling throughout the supply process.
                    </p>
                  </div>
                </div>

                {/* Packaging */}
                <div className="flex gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Box className="size-4" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Packaging
                    </p>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Packaging aligned with onward logistics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification note */}
            <div className="mt-6 flex gap-3 border-l-2 border-primary/20 pl-4">
              <Truck className="mt-0.5 size-4 shrink-0 text-primary" />

              <p className="text-xs leading-5 text-muted-foreground">
                Specifications, grades, and origin details are published only
                when they are verified by the business.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}