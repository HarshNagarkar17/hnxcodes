import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { urlForImage } from "../lib/sanity-image";

type Props = {
  value: PortableTextBlock[] | null | undefined;
};

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href ?? "#";
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code>{children}</code>
    ),
  },
  types: {
    image: ({ value }) => {
      const asset = value?.asset;
      if (!asset) return null;
      try {
        const src = urlForImage(value).width(900).fit("max").url();
        const alt = typeof value?.alt === "string" ? value.alt : "";
        return (
          <figure className="blog-figure">
            <img src={src} alt={alt} loading="lazy" decoding="async" />
          </figure>
        );
      } catch {
        return null;
      }
    },
  },
};

export default function BlogBody({ value }: Props) {
  if (!value?.length) return null;
  return (
    <div className="blog-body-root">
      <PortableText value={value} components={components} />
    </div>
  );
}
