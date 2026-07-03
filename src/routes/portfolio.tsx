import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import {
  Star,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { ogMeta, twitterMeta } from "@/lib/seo";
import { galleryItems } from "@/lib/gallery";

const TITLE = "Our Portfolio | TAG Events";
const DESCRIPTION =
  "Explore our portfolio of weddings, corporate events, celebrations, and premium event experiences created by TAG Events.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      ...ogMeta({ title: TITLE, description: DESCRIPTION, path: "/portfolio" }),
      ...twitterMeta({ title: TITLE, description: DESCRIPTION }),
    ],
    links: [{ rel: "canonical", href: "https://www.tagevent.ca/portfolio" }],
  }),
  component: Portfolio,
});

const categories = [
  "All",
  "Weddings",
  "Luxury Receptions",
  "Engagements",
  "Bridal Showers",
  "Baby Showers",
  "Corporate Events",
  "Balloon Installations",
  "Custom Décor",
];

const testimonials = [
  {
    quote:
      "TAG Events transformed our wedding into a dream. Every detail was perfect, and our guests couldn't stop talking about the décor.",
    author: "Sarah & Michael",
    event: "Luxury Wedding",
  },
  {
    quote:
      "From the first consultation to the final dance, the team delivered beyond every expectation. Truly a flawless experience.",
    author: "Priya & Arjun",
    event: "Royal Wedding Experience",
  },
  {
    quote:
      "Our corporate gala has never looked so elegant. Professional, creative, and incredibly easy to work with.",
    author: "Jennifer L.",
    event: "Corporate Event",
  },
  {
    quote:
      "The balloon installation at our daughter's baby shower was absolute magic. Stunning craftsmanship.",
    author: "Amanda R.",
    event: "Baby Shower",
  },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "For weddings and large events, we recommend booking 6–12 months in advance to secure your date. Smaller celebrations and balloon installations can often be booked 4–8 weeks ahead, subject to availability.",
  },
  {
    q: "Do you travel?",
    a: "Yes — we serve clients throughout Nova Scotia and beyond. Travel beyond our local service area may include additional fees, which we'll outline transparently in your custom quote.",
  },
  {
    q: "What is required to reserve a date?",
    a: "A signed service agreement and a non-refundable retainer (typically 30% of the package total) are required to officially reserve your date on our calendar.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Absolutely. We offer flexible payment plans tailored to your timeline, with the final balance due two weeks before your event.",
  },
  {
    q: "Can packages be customized?",
    a: "Every package is fully customizable. We tailor each experience to your vision, guest count, venue, and budget — no two TAG Events celebrations are alike.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Retainers are non-refundable. Cancellations made more than 60 days prior may receive a partial refund of additional payments. Full details are outlined in your service agreement.",
  },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="mx-auto max-w-5xl px-6 pb-[100px] pt-[120px] text-center md:px-12 lg:pb-[120px] lg:pt-[160px]">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Portfolio
        </p>
        <h1 className="mb-[80px] font-heading text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          A curated collection of memorable celebrations.
        </h1>
      </section>

      {/* Filter bar — borderless underline style */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-12">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`pb-1 text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                activeCategory === cat
                  ? "border-b border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry gallery — full bleed, no borders */}
      <section className="pb-[120px] pl-4 pr-4 md:pl-8 md:pr-8 lg:pb-[160px]">
        <div
          key={activeCategory}
          className="columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6 animate-in fade-in duration-500"
        >
          {filtered.map((item, i) => (
            <div
              key={`${activeCategory}-${item.category}-${i}`}
              style={{ animationDelay: `${(i % 6) * 60}ms` }}
              className={`mb-4 break-inside-avoid overflow-hidden bg-secondary animate-in fade-in slide-in-from-bottom-2 fill-mode-both duration-500 motion-reduce:animate-none lg:mb-6 ${item.aspect}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading={i < 3 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">
            No items in this category yet.
          </p>
        )}
      </section>

      {/* Testimonials + FAQ — borderless split */}
      <section className="mx-auto max-w-7xl gap-16 px-6 pb-[160px] md:px-12 lg:grid lg:grid-cols-2 lg:gap-24 lg:pb-[200px]">
        {/* Testimonials carousel */}
        <Reveal className="mb-20 lg:mb-0">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Testimonials
          </p>
          <h2 className="mb-[80px] font-heading text-[2.7rem] font-medium tracking-tight text-foreground md:text-6xl">
            Kind words from clients.
          </h2>

          <div>
            <Quote aria-hidden="true" className="mb-8 h-10 w-10 text-primary/60" />
            <div className="mb-8 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  aria-hidden="true"
                  className="h-4 w-4 text-primary"
                  fill="currentColor"
                />
              ))}
            </div>
            <div
              key={carouselIndex}
              aria-live="polite"
              className="animate-in fade-in duration-300 motion-reduce:animate-none"
            >
              <p className="mb-10 font-heading text-2xl font-medium leading-[1.4] text-foreground md:text-3xl">
                "{testimonials[carouselIndex].quote}"
              </p>
              <div className="mb-10">
                <p className="font-medium text-foreground">
                  {testimonials[carouselIndex].author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[carouselIndex].event}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={i === carouselIndex ? "true" : undefined}
                    className={`h-px transition-all ${i === carouselIndex ? "w-12 bg-primary" : "w-6 bg-border"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCarouselIndex(
                      (carouselIndex - 1 + testimonials.length) %
                        testimonials.length,
                    )
                  }
                  aria-label="Previous testimonial"
                  className="p-2 text-foreground transition-colors hover:text-primary"
                >
                  <ChevronLeft aria-hidden="true" className="h-4 w-4" />
                </button>
                <button
                  onClick={() =>
                    setCarouselIndex((carouselIndex + 1) % testimonials.length)
                  }
                  aria-label="Next testimonial"
                  className="p-2 text-foreground transition-colors hover:text-primary"
                >
                  <ChevronRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* FAQ accordion */}
        <Reveal delay={100}>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            FAQ
          </p>
          <h2 className="mb-[80px] font-heading text-[2.7rem] font-medium tracking-tight text-foreground md:text-6xl">
            Frequently asked.
          </h2>

          <div>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={faq.q} className="border-b border-border/40">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-medium text-foreground">{faq.q}</span>
                    <span className="shrink-0 text-primary">
                      {isOpen ? (
                        <Minus aria-hidden="true" className="h-4 w-4" />
                      ) : (
                        <Plus aria-hidden="true" className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="min-h-0">
                      <p className="leading-[1.8] text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
