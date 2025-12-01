import { createClient } from "@sanity/client";

// Read from environment; for public reads you can omit token
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.SANITY_API_VERSION || "2023-10-01";
const token = process.env.SANITY_API_READ_TOKEN; // optional for private datasets

// Export a Sanity client configured for Cloud Studio usage
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !token,
  token,
  perspective: "published",
});

export type SanityImage = {
  asset: { _ref?: string; _type?: string; url?: string };
  alt?: string;
};

export type Author = {
  _id: string;
  name: string;
  slug?: { current: string };
  image?: SanityImage;
};

export type Category = {
  _id: string;
  title: string;
  slug?: { current: string };
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: SanityImage;
  author?: Author;
  categories?: Category[];
  body?: unknown;
  // SEO fields
  seoTitle?: string;
  seoDescription?: string;
  focusKeyphrase?: string;
  seoKeywords?: string[];
  noIndex?: boolean;
  canonicalUrl?: string;
  // Open Graph fields
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SanityImage;
  twitterCard?: 'summary' | 'summary_large_image';
};
