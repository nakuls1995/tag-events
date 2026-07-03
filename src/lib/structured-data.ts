const SITE_URL = "https://www.tagevent.ca";
const SITE_NAME = "TAG Events";
const LEGAL_NAME = "TAG Events & Productions";
const LOGO_URL = `${SITE_URL}/og-image.jpg`;
const CONTACT_EMAIL = "tagevents2604@gmail.com";
const CONTACT_PHONE = "+1-416-529-1135";
const SOCIAL_PROFILES = [
  "https://www.instagram.com/tagevents2019",
  "https://www.facebook.com/share/1CuAvnXUqT/",
];

/** Wraps a schema.org object as a TanStack Router `scripts` entry for SSR-rendered JSON-LD. */
export function jsonLdScript(data: Record<string, unknown>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    sameAs: SOCIAL_PROFILES,
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    image: LOGO_URL,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    address: {
      "@type": "PostalAddress",
      addressRegion: "NS",
      addressCountry: "CA",
    },
    areaServed: "Nova Scotia, Canada",
    sameAs: SOCIAL_PROFILES,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

/** Site-wide JSON-LD scripts (Organization, LocalBusiness, WebSite) for the root route's `head()`. */
export function siteStructuredData() {
  return [
    jsonLdScript(organizationSchema()),
    jsonLdScript(localBusinessSchema()),
    jsonLdScript(websiteSchema()),
  ];
}
