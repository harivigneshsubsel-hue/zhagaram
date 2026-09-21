import { z } from "zod";

import { products } from "@/data/products";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  company: z.string().trim().min(2, "Please enter your company name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(6, "Please enter a phone number."),
  country: z.string().trim().min(2, "Please enter your country."),
  product: z.string().trim().min(1, "Please select a product."),
  quantity: z.string().trim().min(1, "Please enter an approximate quantity."),
  message: z.string().trim().min(10, "Please add a short message."),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const productOptions = [
  ...products.map((product) => ({ value: product.slug, label: product.title })),
  { value: "general", label: "General enquiry" },
];

export async function submitEnquiry(
  data: EnquiryInput,
): Promise<{ ok: true }> {
  const response = await fetch(
    "http://localhost:4000/api/enquiry",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to send enquiry.",
    );
  }

  return { ok: true };
}
