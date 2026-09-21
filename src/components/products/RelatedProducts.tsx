import { Container } from "@/components/common/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getRelatedProducts } from "@/data/products";

export function RelatedProducts({ slug }: { slug: string }) {
  const related = getRelatedProducts(slug);
  if (!related.length) return null;
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Related products</h2>
        <div className="mt-8">
          <ProductGrid items={related} />
        </div>
      </Container>
    </section>
  );
}
