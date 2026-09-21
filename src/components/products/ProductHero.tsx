import { PageHero } from "@/components/common/PageHero";

export function ProductHero({
  title,
  description,
  // crumbs,
}: {
  title: string;
  description: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
   <PageHero
  image="public/images/products/products-banner.png"
  kicker="Products"
  title={title}
  description={description}
  crumbs={[
    { label: "Home", href: "/" },
    { label: "Products" },
  ]}
/>
  );
}
