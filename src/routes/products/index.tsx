import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductHero } from "@/components/products/ProductHero";
import { products } from "@/data/products";
import { pageTitle } from "@/lib/metadata";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: pageTitle("Products") },
      {
        name: "description",
        content:
          "Spices, edible oils, nuts, pulses, rice, and other agricultural products for international supply.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <ProductHero
        title="Our Products"
        description="Six categories of agricultural and food products, sourced from farmers, manufacturers, and trusted suppliers."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Category pages describe the supply approach. Named SKUs, grades, and certifications are added only when the business verifies them.
          </p>
          <ProductGrid items={products} />
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <div className="rounded-2xl bg-primary px-8 py-10 text-primary-foreground">
            <h2 className="text-2xl font-semibold tracking-tight">Need a specific lot?</h2>
            <p className="mt-2 max-w-xl text-sm text-primary-foreground/75">
              Share the category, quantity, and destination on the quote form.
            </p>
            <div className="mt-6">
              <Button href="/get-a-quote" variant="gold">
                Get a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
