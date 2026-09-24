import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { products } from "@/data/products";
import { pageTitle } from "@/lib/metadata";

export const Route = createFileRoute("/get-a-quote")({
  head: () => ({
    meta: [
      { title: pageTitle("Get a Quote") },
      {
        name: "description",
        content: "Request a quote for spices, edible oils, nuts, pulses, rice, or other agricultural products.",
      },
    ],
  }),
  component: QuotePage,
});

function QuotePage() {
  return (
    <>
      <ContactHero
        title="Get a Quote"
        description="Tell us the product, quantity, and destination. Your enquiry is validated before it is sent to our team."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                What to include
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                A clear request helps us respond.
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>Name and company</li>
                <li>Email, phone, and country</li>
                <li>Product category and approximate quantity</li>
                <li>Any packing or timing notes in the message</li>
              </ul>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Categories
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {products.map((product) => product.title).join(" · ")}
              </p>
            </div>
            <ContactForm
              heading="Quote request"
              variant="customer"
              submitLabel="Submit enquiry"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
