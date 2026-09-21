export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description?: string;
  image: string;
  icon?: string;
  features?: string[];
}
