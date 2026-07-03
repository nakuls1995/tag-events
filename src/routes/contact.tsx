import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Type,
  Camera,
  Mic,
  Aperture,
  Video,
  Trees,
  HeartHandshake,
  Gift,
  Sofa,
  UtensilsCrossed,
  Users,
  Briefcase,
  Globe,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { ogMeta, twitterMeta } from "@/lib/seo";

const TITLE = "Contact TAG Events | Book Your Consultation";
const DESCRIPTION =
  "Contact TAG Events to discuss your upcoming wedding, celebration, or corporate event.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      ...ogMeta({ title: TITLE, description: DESCRIPTION, path: "/contact" }),
      ...twitterMeta({ title: TITLE, description: DESCRIPTION }),
    ],
    links: [{ rel: "canonical", href: "https://www.tagevent.ca/contact" }],
  }),
  component: Contact,
});

const packages = [
  "Essential Elegance — $3,000+",
  "Signature Luxury — $4,500",
  "Royal Wedding Experience — $6,500+",
  "Mini Celebration Package — $299+",
  "Signature Balloon Setup — $499+",
  "Luxury Balloon Experience — $799+",
  "Custom / Other",
];

const enhanceServices = [
  {
    icon: Type,
    name: "Marquee Letters",
    desc: "Statement light-up letters for grand entrances.",
  },
  {
    icon: Mic,
    name: "Audio Guest Book",
    desc: "Vintage phone for heartfelt voice messages.",
  },
  {
    icon: Aperture,
    name: "360 Photo Booth",
    desc: "Cinematic slow-motion video moments.",
  },
  {
    icon: Video,
    name: "Wedding Content Creation",
    desc: "Same-day social-ready reels and highlights.",
  },
  {
    icon: Trees,
    name: "Luxury Picnic Setups",
    desc: "Curated outdoor experiences for intimate gatherings.",
  },
  {
    icon: HeartHandshake,
    name: "Proposal Planning",
    desc: "Bespoke proposal design from concept to capture.",
  },
  {
    icon: Gift,
    name: "Bridal Shower Packages",
    desc: "All-inclusive shower styling and coordination.",
  },
  {
    icon: Sofa,
    name: "Chair Covers & Linens",
    desc: "Premium textiles for an elevated tablescape.",
  },
  {
    icon: UtensilsCrossed,
    name: "Charger Plates",
    desc: "Luxury place settings in gold, silver & marble.",
  },
  {
    icon: Users,
    name: "Event Staffing",
    desc: "Trained hosts, servers, and on-site coordinators.",
  },
  {
    icon: Briefcase,
    name: "Corporate Event Planning",
    desc: "Refined galas, launches, and brand experiences.",
  },
  {
    icon: Globe,
    name: "Wedding Website Creation",
    desc: "Elegant custom sites with RSVP management.",
  },
  {
    icon: Sparkles,
    name: "Wedding Day Emergency Kits",
    desc: "Beautifully packaged essentials for the big day.",
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <h1 className="font-heading text-foreground mb-4">Contact</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
            Let's begin crafting your celebration. Share a few details and our
            team will respond within one business day.
          </p>
        </div>

        {/* Contact info row */}
        <div className="mb-16 grid gap-6 border-y border-border py-10 md:grid-cols-4 md:mb-20">
          <a
            href="mailto:tagevents2604@gmail.com"
            className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
          >
            <Mail aria-hidden="true" className="text-primary h-5 w-5" />
            <span className="text-sm">tagevents2604@gmail.com</span>
          </a>
          <a
            href="tel:+14165291135"
            className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
          >
            <Phone aria-hidden="true" className="text-primary h-5 w-5" />
            <span className="text-sm">+1 (416) 529-1135</span>
          </a>
          <a
            href="https://www.instagram.com/tagevents2019?igsh=MWg3cWQ2cXYxN3V3dg=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram (opens in a new tab)"
            className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
          >
            <Instagram aria-hidden="true" className="text-primary h-5 w-5" />
            <span className="text-sm">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/share/1CuAvnXUqT/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook (opens in a new tab)"
            className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
          >
            <Facebook aria-hidden="true" className="text-primary h-5 w-5" />
            <span className="text-sm">Facebook</span>
          </a>
        </div>

        {/* Inquiry form — temporarily disabled
        <section className="mb-24 md:mb-32">
          <h2 className="font-heading text-foreground mb-10 text-center">
            Inquiry Form
          </h2>

          {submitted ? (
            <div
              role="status"
              className="mx-auto max-w-2xl rounded-2xl border border-primary bg-secondary p-10 text-center animate-in fade-in slide-in-from-bottom-2 duration-500 motion-reduce:animate-none"
            >
              <Sparkles aria-hidden="true" className="text-primary mx-auto mb-4 h-8 w-8" />
              <h3 className="font-heading text-foreground mb-2 text-2xl">
                Thank you
              </h3>
              <p className="text-muted-foreground">
                Your inquiry has been received. We'll be in touch within one
                business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto grid max-w-3xl gap-10 md:grid-cols-2"
            >
              <FormField label="Full Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border-0 border-b border-charcoal bg-transparent py-3 text-charcoal outline-none transition-all focus:border-b-2 focus:border-charcoal"
                />
              </FormField>

              <FormField label="Email Address" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border-0 border-b border-charcoal bg-transparent py-3 text-charcoal outline-none transition-all focus:border-b-2 focus:border-charcoal"
                />
              </FormField>

              <FormField label="Event Date" htmlFor="date">
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full border-0 border-b border-charcoal bg-transparent py-3 text-charcoal outline-none transition-all focus:border-b-2 focus:border-charcoal"
                />
              </FormField>

              <FormField label="Location" htmlFor="location">
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City / Venue"
                  className="w-full border-0 border-b border-charcoal bg-transparent py-3 text-charcoal outline-none transition-all placeholder:text-charcoal/40 focus:border-b-2 focus:border-charcoal"
                />
              </FormField>

              <FormField label="Guest Count" htmlFor="guests">
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min={1}
                  className="w-full border-0 border-b border-charcoal bg-transparent py-3 text-charcoal outline-none transition-all focus:border-b-2 focus:border-charcoal"
                />
              </FormField>

              <FormField label="Package of Interest" htmlFor="package">
                <div className="relative">
                  <select
                    id="package"
                    name="package"
                    className="w-full appearance-none border-0 border-b border-charcoal bg-transparent py-3 pr-8 text-charcoal outline-none transition-all focus:border-b-2 focus:border-charcoal"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a package
                    </option>
                    {packages.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal"
                    strokeWidth={1.5}
                  />
                </div>
              </FormField>

              <FormField
                label="Tell Us About Your Vision"
                htmlFor="message"
                className="md:col-span-2"
              >
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none border-0 border-b border-charcoal bg-transparent py-3 text-charcoal outline-none transition-all focus:border-b-2 focus:border-charcoal"
                />
              </FormField>

              <div className="md:col-span-2 md:text-center">
                <button
                  type="submit"
                  className="border border-charcoal bg-transparent px-10 py-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-all hover:bg-charcoal hover:text-cream"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          )}
        </section>
        */}

        {/* Enhance Your Experience */}
        <section>
          <Reveal className="mb-12 text-center md:mb-16">
            <p className="text-primary mb-3 text-xs font-medium uppercase tracking-[0.2em]">
              Boutique Add-Ons
            </p>
            <h2 className="font-heading text-foreground mb-4">
              Enhance Your Experience
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed">
              Curated luxury upgrades to elevate every moment of your
              celebration.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enhanceServices.map(({ icon: Icon, name, desc }, i) => (
              <Reveal
                key={name}
                delay={(i % 6) * 80}
                className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary"
              >
                <Icon
                  aria-hidden="true"
                  className="text-primary mb-5 h-6 w-6"
                  strokeWidth={1.5}
                />
                <h3 className="font-heading text-foreground mb-2 text-xl">
                  {name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

function FormField({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="text-muted-foreground mb-1 block text-xs font-medium uppercase tracking-[0.15em]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
