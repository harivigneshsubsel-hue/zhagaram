import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";

export function ProductCategories() {
  return (
    <section className="pt-20 sm:pt-28">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            kicker="Catalogue"
            title="Our Products"
            description="Six agricultural and food categories, sourced for quality and prepared for international supply."
          />
          <Button href="/products" variant="secondary">
            View all products
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
