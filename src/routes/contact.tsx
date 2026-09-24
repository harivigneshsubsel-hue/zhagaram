import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/common/Container";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";

import { Button } from "@/components/common/Button";
import { pageTitle } from "@/lib/metadata";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: pageTitle("Contact") },
      {
        name: "description",
        content: "Send an enquiry to ZHAGARAM EXIM LLP. Official phone and email will be published once verified.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactHero
        title="Contact"
        description="Reach the team with an enquiry. Contact numbers and a street address are withheld until the business confirms them."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <ContactDetails />
              <div className="mt-8">
                <Button href="/get-a-quote">Get a Quote</Button>
              </div>
            </div>
            <ContactForm
              heading="Interested in supplying your products?"
              description="Tell us about your products and available quantity. Our team will review your details and get back to you."
              variant="supplier"
              submitLabel="Submit"
            />
          </div>
          {/* <div className="mt-12">
            <ContactMap />
          </div> */}
        </Container>
      </section>
    </>
  );
}
