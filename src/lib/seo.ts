export const SITE_URL = "https://www.tagevent.ca";
const SITE_NAME = "TAG Events";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface OgMetaOptions {
  title: string;
  description: string;
  /** Route path starting with "/", e.g. "/" or "/about" */
  path: string;
  image?: string;
  imageAlt?: string;
}

export function ogMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt = title,
}: OgMetaOptions) {
  return [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:alt", content: imageAlt },
    { property: "og:url", content: `${SITE_URL}${path}` },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_CA" },
  ];
}

interface TwitterMetaOptions {
  title: string;
  description: string;
  image?: string;
}

export function twitterMeta({
  title,
  description,
  image = DEFAULT_OG_IMAGE,
}: TwitterMetaOptions) {
  return [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}
