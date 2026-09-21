import type { CompanyCopy, ContactPlaceholder, SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "ZHAGARAM EXIM LLP",
  shortName: "ZHAGARAM EXIM",
  tagline: "From Indian Roots to Global Routes",
  description:
    "India-based export and import company supplying quality agricultural and food products to international markets.",
  locale: "en",
  url: "https://zhagaram-exim.example",
};

export const companyCopy: CompanyCopy = {
  intro:
    "ZHAGARAM EXIM LLP is an India-based Export and Import company involved in sourcing, trading and international supply of quality agricultural and food products.",
  sourcingLead: "Products are sourced from:",
  sourcing: ["Reliable farmers", "Manufacturers", "Trusted suppliers"],
  prioritiesLead: "The business focuses on:",
  priorities: [
    "Quality",
    "Competitive pricing",
    "Proper packaging",
    "Timely supply",
    "Reliability",
    "Transparency",
    "Long-term partnerships",
  ],
  aim: "Connecting quality Indian agricultural products with international markets.",
  vision:
    "To become a trusted global trading partner by connecting high-quality Indian agricultural products with international markets through reliable sourcing, consistent quality, and responsible business practices.",
  mission:
    "To source quality products from trusted farmers, manufacturers, and suppliers, ensure proper handling and packaging, and deliver them efficiently to customers worldwide while building long-term relationships based on quality, transparency, and timely service.",
};

export const heroCopy = {
  kicker: "Agricultural export & import",
  supporting:
    "Sourcing quality Indian agricultural and food products and supplying them through a carefully managed international route — from farm and factory to importer, distributor, and customer.",
  primaryCta: "Get a Quote",
  secondaryCta: "Explore Products",
};

export const contactPlaceholders: ContactPlaceholder[] = [
  {
    label: "Email",
    value: "To be published",
    note: "Official email will appear here once verified by the business.",
  },
  {
    label: "Phone",
    value: "To be published",
    note: "Direct phone and WhatsApp numbers are not listed until confirmed.",
  },
  {
    label: "Office",
    value: "India",
    note: "A precise office address will be added when the business verifies it.",
  },
];

export const formNotice =
  "Enquiries are validated in the browser and stored locally until a mail service is connected. Submitting this form does not send an email yet.";
