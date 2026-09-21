import { useState } from "react";
import { formNotice } from "@/data/site";
import { enquirySchema, productOptions, submitEnquiry, type EnquiryInput } from "@/lib/enquiry";
import { cn } from "@/lib/utils";

const empty: EnquiryInput = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  quantity: "",
  message: "",
};

export function ContactForm({ heading = "Send an enquiry" }: { heading?: string }) {
  const [values, setValues] = useState<EnquiryInput>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryInput, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof EnquiryInput, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !next[field as keyof EnquiryInput]) {
          next[field as keyof EnquiryInput] = issue.message;
        }
      }
      setErrors(next);
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      await submitEnquiry(parsed.data);
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-card p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-2xl font-semibold tracking-tight">Enquiry recorded</h2>
       <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
  Thank you for your enquiry. Your request has been submitted
  successfully. Our team will review the details and get back to you.
</p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-primary hover:underline"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-card p-6 shadow-[var(--shadow-border)] sm:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{formNotice}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          value={values.name}
          error={errors.name}
          onChange={(v) => update("name", v)}
        />
        <Field
          id="company"
          label="Company Name"
          value={values.company}
          error={errors.company}
          onChange={(v) => update("company", v)}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          onChange={(v) => update("email", v)}
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(v) => update("phone", v)}
        />
        <Field
          id="country"
          label="Country"
          value={values.country}
          error={errors.country}
          onChange={(v) => update("country", v)}
        />
        <div>
          <label htmlFor="product" className="mb-1.5 block text-sm font-medium">
            Product
          </label>
          <select
            id="product"
            value={values.product}
            onChange={(e) => update("product", e.target.value)}
            className={inputClass(Boolean(errors.product))}
            aria-invalid={Boolean(errors.product)}
          >
            <option value="">Select a category</option>
            {productOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.product ? <ErrorText>{errors.product}</ErrorText> : null}
        </div>
        <Field
          id="quantity"
          label="Quantity"
          value={values.quantity}
          error={errors.quantity}
          onChange={(v) => update("quantity", v)}
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(inputClass(Boolean(errors.message)), "min-h-32 py-3")}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <ErrorText>{errors.message}</ErrorText> : null}
        </div>
      </div>
      {status === "error" ? (
      <p className="mt-4 text-sm text-red-700" role="alert">
  We couldn't send your enquiry right now. Please try again.
</p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit enquiry"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  className,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass(Boolean(error))}
        aria-invalid={Boolean(error)}
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </div>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "h-11 w-full rounded-md bg-background px-3 text-sm shadow-[var(--shadow-border)] outline-none transition-[box-shadow] duration-150 focus-visible:shadow-[0_0_0_3px_rgb(30_71_56/0.25)]",
    invalid && "shadow-[0_0_0_1px_rgb(159_46_46)]",
  );
}

function ErrorText({ children }: { children: string }) {
  return (
    <p className="mt-1 text-xs text-red-800" role="alert">
      {children}
    </p>
  );
}
