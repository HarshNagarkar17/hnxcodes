import type { PortableTextBlock } from "@portabletext/types";

/** GROQ fragments assume a `post` type with slug + portable text `body` (see sanity-integration.md). */

export const POST_LIST_QUERY = `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "excerpt": coalesce(excerpt, description),
  publishedAt,
  mainImage
}`;

export const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]{"slug": slug.current}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]{
  _id,
  title,
  "slug": slug.current,
  "excerpt": coalesce(excerpt, description),
  publishedAt,
  mainImage,
  body
}`;

export type SanityImageValue = {
  _type?: "image";
  asset?: { _ref?: string; _type?: string };
  alt?: string;
};

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  publishedAt: string | null;
  mainImage?: SanityImageValue | null;
};

export type PostDetail = PostListItem & {
  body: PortableTextBlock[] | null;
};

export function formatPostDate(iso: string | null): Date | null {
  if (!iso) return null;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : d;
}
